import { useRouter } from '@presentation/hooks/useRouter'
import { Button } from '@presentation/ui/button'
import { MainMenu } from '@presentation/ui/main-menu'
import { SearchForm } from '@presentation/ui/search-form'
import { Outlet } from 'react-router'

import styles from './styles.module.css'

import iconBell from '@presentation/assets/icon-bell.svg'
import iconCog from '@presentation/assets/icon-cog.svg'
import iconGrid from '@presentation/assets/icon-grid.svg'
import iconHome from '@presentation/assets/icon-home.svg'
import iconTransfer from '@presentation/assets/icon-transfer.svg'
import iconUser from '@presentation/assets/icon-user.svg'
import iconWallet from '@presentation/assets/icon-wallet.svg'
import logoDarkImage from '@presentation/assets/logo-dark.svg'

export function PanelTemplate() {
  const { checkRoute } = useRouter()

  return (
    <div className={styles.fullContainer}>
      <aside className={styles.sidebar}>
        <header className={styles.siteLogo}>
          <a href="/dashboard">
            <img
              src={logoDarkImage}
              width={200}
              height={43}
              alt="MeuBanco"
            />
          </a>
        </header>

        <MainMenu.Root>
          <MainMenu.Item>
            <MainMenu.Link
              href="/dashboard"
              isActive={checkRoute('/dashboard')}
            >
              <MainMenu.Icon src={iconHome} />
              Painel
            </MainMenu.Link>
          </MainMenu.Item>

          <MainMenu.Item>
            <MainMenu.Link
              href="/dashboard/carteira"
              isActive={checkRoute('/dashboard/carteira')}
            >
              <MainMenu.Icon src={iconWallet} />
              Carteira
            </MainMenu.Link>
          </MainMenu.Item>

          <MainMenu.Item>
            <MainMenu.Link
              href="/dashboard/transferencias"
              isActive={checkRoute('/dashboard/transferencias')}
            >
              <MainMenu.Icon src={iconTransfer} />
              Transferências
            </MainMenu.Link>
          </MainMenu.Item>

          <MainMenu.Item>
            <MainMenu.Link
              href="/dashboard/servicos"
              isActive={checkRoute('/dashboard/servicos')}
            >
              <MainMenu.Icon src={iconGrid} />
              Serviços
            </MainMenu.Link>
          </MainMenu.Item>

          <MainMenu.Item>
            <MainMenu.Link
              href="/dashboard/configuracoes"
              isActive={checkRoute('/dashboard/configuracoes')}
            >
              <MainMenu.Icon src={iconCog} />
              Configurações
            </MainMenu.Link>
          </MainMenu.Item>
        </MainMenu.Root>

        <article className={styles.help}>
          <h2>
            Precisa
            <br /> de ajuda?
          </h2>

          <p>
            Fale com um dos <br /> nossos especialistas
          </p>

          <Button appearance="secondary">Contatar</Button>
        </article>
      </aside>

      <div className={styles.app}>
        <header className={styles.topBar}>
          <SearchForm />

          <div className={styles.secondaryMenu}>
            <button
              className={styles.alerts}
              aria-label="Avisos"
            >
              <img
                src={iconBell}
                width={20}
                height={20}
                alt=""
                aria-hidden
              />
            </button>

            <div className={styles.profile}>
              <img
                src={iconUser}
                width={20}
                height={20}
                alt=""
                aria-hidden
              />

              <span>
                Bem vindo, <b>Tide Cardoso</b>
              </span>
            </div>
          </div>
        </header>

        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
