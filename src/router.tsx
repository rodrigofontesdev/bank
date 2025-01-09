import { SignIn } from '@/pages/SignIn'
import { AuthTemplate } from '@/templates/AuthTemplate'
import { PanelTemplate } from '@/templates/PanelTemplate'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Dashboard } from './pages/Dashboard'

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
