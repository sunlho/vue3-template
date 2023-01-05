import service from '@/utils/request'

interface GetDogResponse {
  status: string
  message: string
}

export function getDog() {
  return service.request<GetDogResponse>({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random'
  })
}
