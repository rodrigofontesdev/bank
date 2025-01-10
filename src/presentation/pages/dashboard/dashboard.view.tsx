import { Box } from '@presentation/ui/box'
import { Button } from '@presentation/ui/button'
import { ShortcutCard } from '@presentation/ui/shortcut-card'

import styles from './styles.module.css'

import creditCardImage from '@presentation/assets/credit-card.svg'

export function Dashboard() {
  return (
    <>
      <title>Dashboard - MeuBanco</title>

      <div className={styles.shortcuts}>
        <ShortcutCard
          title="Gasto esse mês"
          amount="R$ 3.547,67"
          tag="+23%"
        />
        <ShortcutCard
          title="Recebido esse mês"
          amount="R$ 7.648,48"
          tag="+6%"
        />
        <ShortcutCard
          title="Investimentos"
          amount="R$ 9.532,62"
          tag="+R$ 242,13 (+2.54%)"
          appearance="tagged"
        />
        <ShortcutCard
          title="Cartões"
          amount="R$ 9.532,62"
        />

        <button className={styles.newShortcut}>
          <span>+</span>
          <p>
            Configurar
            <br /> atalhos
          </p>
        </button>
      </div>

      <div className={styles.gridColumnHalf}>
        <Box>
          <article className={styles.cardsSummary}>
            <h2 className={styles.cardsSummary__Header}>Cartões</h2>

            <div className={styles.cardsSummary__Body}>
              <img
                src={creditCardImage}
                width={240}
                height={140}
                alt=""
              />

              <div className={styles.cardsSummary__BodyInner}>
                <p className={styles.cardsSummary__BodyInner__AvailableLimit}>
                  Limite disponível <span>R$ 3.000,00</span>
                </p>

                <p className={styles.cardsSummary__BodyInner__LatestPurchase}>
                  Última compra{' '}
                  <span>
                    Bazar Mituzi <span>R$ 300,00</span>
                  </span>
                </p>
              </div>
            </div>

            <div className={styles.cardsSummary__Footer}>
              <div className={styles.cardsSummary__Tracker}>
                <div
                  className={styles.cardsSummary__Progress}
                  role="progressbar"
                  aria-label="Limite mensal"
                  aria-valuenow={300}
                  aria-valuemin={0}
                  aria-valuemax={3000}
                >
                  <div
                    className={styles.cardsSummary__ProgressBar}
                    style={{ width: '10%' }}
                  />
                </div>

                <p>
                  Limite mensal <span>R$ 300/3.000</span>
                </p>
              </div>

              <Button fill>Mais Detalhes</Button>
            </div>
          </article>
        </Box>

        <Box>
          <article className={styles.latestTransactionsSummary}>
            <h2 className={styles.latestTransactionsSummary__Header}>Últimas compras</h2>

            <div className={styles.latestTransactionsSummary__List}>
              <div className={styles.latestTransactionsSummary__ListGroup}>
                <time dateTime="2025-01-03">03/jan</time>

                <div className={styles.latestTransactionsSummary__ListItem}>
                  <p className={styles.latestTransactionsSummary__ListItem__Place}>
                    Bazar Mizutu <span>Compra no crédito</span>
                  </p>
                  <p className={styles.latestTransactionsSummary__ListItem__Amount}>R$ 300,00</p>
                </div>

                <div className={styles.latestTransactionsSummary__ListItem}>
                  <p className={styles.latestTransactionsSummary__ListItem__Place}>
                    Lanchonete Dez <span>Compra no débito</span>
                  </p>
                  <p className={styles.latestTransactionsSummary__ListItem__Amount}>R$ 125,00</p>
                </div>

                <div className={styles.latestTransactionsSummary__ListItem}>
                  <p className={styles.latestTransactionsSummary__ListItem__Place}>
                    Loja Tatame velho <span>Compra no débito</span>
                  </p>
                  <p className={styles.latestTransactionsSummary__ListItem__Amount}>R$ 700,00</p>
                </div>
              </div>

              <div className={styles.latestTransactionsSummary__ListGroup}>
                <time dateTime="2025-01-02">02/jan</time>

                <div className={styles.latestTransactionsSummary__ListItem}>
                  <p className={styles.latestTransactionsSummary__ListItem__Place}>
                    Bazar Mizutu <span>Compra no débito</span>
                  </p>
                  <p className={styles.latestTransactionsSummary__ListItem__Amount}>R$ 12,00</p>
                </div>

                <div className={styles.latestTransactionsSummary__ListItem}>
                  <p className={styles.latestTransactionsSummary__ListItem__Place}>
                    Lanchonete Dez <span>Compra no débito</span>
                  </p>
                  <p className={styles.latestTransactionsSummary__ListItem__Amount}>R$ 85,00</p>
                </div>

                <div className={styles.latestTransactionsSummary__ListItem}>
                  <p className={styles.latestTransactionsSummary__ListItem__Place}>
                    Loja Tatame velho <span>Compra no débito</span>
                  </p>
                  <p className={styles.latestTransactionsSummary__ListItem__Amount}>R$ 200,00</p>
                </div>
              </div>

              <div className={styles.latestTransactionsSummary__ListGroup}>
                <time dateTime="2025-01-01">01/jan</time>

                <div className={styles.latestTransactionsSummary__ListItem}>
                  <p className={styles.latestTransactionsSummary__ListItem__Place}>
                    Restaurante Italiano <span>Compra no débito</span>
                  </p>
                  <p className={styles.latestTransactionsSummary__ListItem__Amount}>R$ 300,00</p>
                </div>
              </div>
            </div>

            <Button>Ver Extrato</Button>
          </article>
        </Box>
      </div>
    </>
  )
}
