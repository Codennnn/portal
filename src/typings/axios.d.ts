/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import axios from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
