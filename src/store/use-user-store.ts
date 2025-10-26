import type { RouteRecordRaw } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { LOGIN_ROUTE_PATH } from '@/router/routes'
import Apis from '@/api'

export interface UserInfo {
  id: number
  email: string
  name: string
  nickName: string
  refreshToken: string
  roles: string[]
  token: string
}

export interface UserLoginPayload {
  email: string
  password: string
  [x: string]: any
}

export const useUserStore = defineStore('user', () => {
  const route = useRoute()
  const router = useRouter()
  const loading = ref(false)
  const homePath = '/home' // 当前用户的首页路径
  const routes = ref<RouteRecordRaw[]>([]) // 当前角色拥有的路由，Admin 中根据此数据生成菜单

  const user = ref<UserInfo>({
    id: 0,
    email: '',
    name: '',
    nickName: '',
    token: localStorage.getItem('token') ?? '',
    refreshToken: localStorage.getItem('refreshToken') ?? '',
    roles: []
  })

  async function fetchUpdateUserInfo() {
    try {
      const res = await Apis.User.GetUserBasicInfo({
        cacheFor: {
          mode: 'memory',
          expire: 60 * 1000 // 1 分钟
        }
      })
      user.value = {
        ...user.value,
        ...res.data
      }
      return user.value
    } catch (error) {
      console.error(error)
      await logout()
      return user.value
    }
  }

  async function login(payload: UserLoginPayload) {
    try {
      loading.value = true
      const req = Apis.Auth.Login({
        data: payload,
        cache: 'no-cache',
        meta: {
          authRole: 'login'
        }
      })
      const res = await req.send()
      if (!res.data) {
        throw new Error(res.message)
      }
      localStorage.setItem('token', (user.value.token = res.data?.accessToken!))
      localStorage.setItem('refreshToken', (user.value.refreshToken = res.data?.refreshToken!))
      const info = await fetchUpdateUserInfo()
      const redirect = (route.query.redirect as string) ?? homePath
      await router.push(redirect)
      return info
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    user.value = {
      email: '',
      id: 0,
      nickName: '',
      refreshToken: '',
      name: '',
      token: '',
      roles: []
    }
    await Apis.Auth.Logout({
      data: {
        userId: user.value.id,
        refreshToken: user.value.refreshToken
      },
      cache: 'no-cache',
      meta: {
        authRole: 'logout'
      }
    }).send()
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
  }

  async function logoutWithQueryRedirect(redirect?: string) {
    await logout()
    return router.push({
      path: LOGIN_ROUTE_PATH,
      query: {
        redirect: redirect ?? route.fullPath
      }
    })
  }

  return {
    login,
    logout,
    routes,
    homePath,
    fetchUpdateUserInfo,
    loginLoading: loading,
    logoutWithQueryRedirect,
    user: computed(() => user.value)
  }
})
