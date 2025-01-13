import { HttpClient, HttpRequest } from '@infra/contracts/http.contract'
import axios, { AxiosError, AxiosInstance } from 'axios'

const baseApi = 'http://localhost:3000'

export class AxiosHttpClientAdapter implements HttpClient {
  constructor(private api: AxiosInstance) {
    //
  }

  static create(): HttpClient {
    return new AxiosHttpClientAdapter(axios)
  }

  async sendRequest<TResponse, TBody>(props: HttpRequest<TBody>): Promise<TResponse> {
    const { endpoint, method, body, headers, params } = props

    try {
      const { data } = await this.api.request<TResponse>({
        url: `${baseApi}${endpoint}`,
        method,
        headers,
        data: body,
        params,
      })

      return data
    } catch (e) {
      const error = e as AxiosError
      const status = error.response?.status || 500
      const message = error.response?.data || error.message

      throw new Error(`Request failed with status ${status}: ${message}`)
    }
  }
}
