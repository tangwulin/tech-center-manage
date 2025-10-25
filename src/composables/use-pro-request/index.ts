import type { UseRequestPlugin, UseRequestService } from 'pro-naive-ui'
import { useRequest } from 'pro-naive-ui'
import type { UseProRequestOptions } from './types'
import { messageTipAfterRequestFinallyPlugin } from './plugins/message-tip-after-request-finally-plugin'

/**
 * 增强 useRequest 能力
 */
export function useProRequest<Data, Params extends any[]>(
  service: UseRequestService<Data, Params>,
  options?: UseProRequestOptions<Data, Params>,
  plugins?: UseRequestPlugin<Data, Params>[]
) {
  return useRequest(service, options, [
    ...(plugins ?? []),
    messageTipAfterRequestFinallyPlugin
  ] as UseRequestPlugin<Data, Params>[])
}
