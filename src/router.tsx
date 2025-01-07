import { SignIn } from '@/pages/auth/SignIn'
import { AuthTemplate } from '@/templates/AuthTemplate'
import { BrowserRouter, Route, Routes } from 'react-router'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthTemplate />}>
          <Route
            index
            element={<SignIn />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
