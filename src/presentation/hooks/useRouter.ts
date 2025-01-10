import { useLocation } from 'react-router'

export function useRouter() {
  const routes = useLocation()

  const checkRoute = (path: string) => {
    const pathName = path.at(0) === '/' ? path : `/${path}`

    return routes.pathname === pathName
  }

  return { checkRoute }
}
