import { authenticated } from '@test/mock/authentication/useAuthMock'
import { Navigate } from 'react-router'

export function RequireAuth({ children }: { children: React.ReactNode }) {
  return authenticated ? children : <Navigate to="/" />
}
