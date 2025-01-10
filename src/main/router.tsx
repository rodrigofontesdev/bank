import { Dashboard } from '@presentation/pages/dashboard'
import { SignIn } from '@presentation/pages/sign-in'
import { AuthTemplate } from '@presentation/templates/auth-template'
import { PanelTemplate } from '@presentation/templates/panel-template'
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

        <Route element={<PanelTemplate />}>
          <Route
            index
            path="/dashboard"
            element={<Dashboard />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
