import { Dashboard } from '@presentation/pages/dashboard'
import { Services } from '@presentation/pages/services'
import { Settings } from '@presentation/pages/settings'
import { SignIn } from '@presentation/pages/sign-in'
import { Transfers } from '@presentation/pages/transfers'
import { Wallet } from '@presentation/pages/wallet'
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

        <Route
          path="dashboard"
          element={<PanelTemplate />}
        >
          <Route
            index
            element={<Dashboard />}
          />
          <Route
            path="carteira"
            element={<Wallet />}
          />
          <Route
            path="transferencias"
            element={<Transfers />}
          />
          <Route
            path="servicos"
            element={<Services />}
          />
          <Route
            path="configuracoes"
            element={<Settings />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
