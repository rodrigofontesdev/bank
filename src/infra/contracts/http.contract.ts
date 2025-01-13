export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

export type HttpRequest<TBody = unknown> = {
  endpoint: string
  method: HttpMethod
  headers?: Record<string, string | number>
  body?: TBody
  params?: Record<string, string | number>
}

export interface HttpClient {
  sendRequest: <TResponse, TBody = unknown>(request: HttpRequest<TBody>) => Promise<TResponse>
}
