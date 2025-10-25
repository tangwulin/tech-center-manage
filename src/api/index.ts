import { createAlova } from 'alova'
import fetchAdapter from 'alova/fetch'
import { createApis, withConfigType, mountApis } from './createApis'
import VueHook from 'alova/vue'
import { createServerTokenAuthentication, useRequest } from 'alova/client'

const { onAuthRequired, onResponseRefreshToken } = createServerTokenAuthentication<typeof VueHook>({
  assignToken: (method) => {
    method.config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  },

  // async login(response, _) {
  //     const data = (await response.clone().json() as ApiResultOfLoginResponse).data!
  //     localStorage.setItem('accessToken', data.accessToken!);
  //     localStorage.setItem('refreshToken', data.refreshToken!);
  // },
  //
  // logout() {
  //     localStorage.removeItem('accessToken');
  //     localStorage.removeItem('refreshToken');
  // },
  refreshTokenOnSuccess: {
    // 响应时触发，可获取到response和method，并返回boolean表示token是否过期
    // 当服务端返回401时，表示token过期
    isExpired: (response, _) => {
      return response.status === 401
    },

    // 当token过期时触发，在此函数中触发刷新token
    handler: async (_, __) => {
      try {
        const { accessToken, refreshToken: refresh_token } = (await refreshToken()).data.value.data!
        localStorage.setItem('token', accessToken)
        localStorage.setItem('refreshToken', refresh_token)
      } catch (error) {
        // token刷新失败，跳转回登录页
        //TODO:采用路由跳转的方式
        location.href = '/login'
        // 并抛出错误
        throw error
      }
    }
  }
})

async function refreshToken() {
  return useRequest(
    Apis.Auth.refreshToken({
      data: {
        refreshToken: localStorage.getItem('refreshToken')!
      }
    })
  )
}

export const alovaInstance = createAlova({
  baseURL: 'http://localhost:5250/',
  statesHook: VueHook,
  requestAdapter: fetchAdapter(),
  beforeRequest: onAuthRequired((_) => {
    // ...原请求前拦截器
  }),
  responded: onResponseRefreshToken(async (response, _) => {
    //...原响应成功拦截器
    if (response.status >= 400) {
      throw new Error(response.statusText)
    }
    const json = await response.json()
    if (json.code !== 200) {
      // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
      throw new Error(json.message)
    }

    // 解析的响应数据将传给method实例的transform钩子函数，这些函数将在后续讲解
    return json
  })
})

export const $$userConfigMap = withConfigType({})

const Apis = createApis(alovaInstance, $$userConfigMap)

mountApis(Apis)

export default Apis
