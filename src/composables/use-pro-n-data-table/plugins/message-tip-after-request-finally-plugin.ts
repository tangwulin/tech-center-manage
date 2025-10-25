import type { UseNDataTableData, UseNDataTableParams } from 'pro-naive-ui'
import { messageTipAfterRequestFinallyPlugin } from '../../use-pro-request/plugins/message-tip-after-request-finally-plugin'

declare module '../types' {
  interface UseProNDataTableOptions<
    Data extends UseNDataTableData,
    Params extends UseNDataTableParams
  > extends UseProRequestOptions<Data, Params> {}
}

export { messageTipAfterRequestFinallyPlugin }
