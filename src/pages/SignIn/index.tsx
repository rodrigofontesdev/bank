import { Button } from '@/components/Button'
import * as InputGroup from '@/components/InputGroup'

import styles from './styles.module.css'

export function SignIn() {
  return (
    <>
      <title>Login - MeuBanco</title>

      <div className={styles.container}>
        <header className={styles.heading}>
          <h1 className={styles.headingTitle}>
            Bem vindo <span>:)</span>
          </h1>
          <p className={styles.headingSubtitle}>Entre na sua conta</p>
        </header>

        <form className={styles.signInForm}>
          <InputGroup.Root>
            <InputGroup.Label htmlFor="username">Usuário</InputGroup.Label>
            <InputGroup.Input inputId="username" />
          </InputGroup.Root>

          <InputGroup.Root>
            <InputGroup.Label htmlFor="password">Senha</InputGroup.Label>
            <InputGroup.Input
              type="password"
              inputId="password"
            />
          </InputGroup.Root>

          <div className={styles.signInFormActions}>
            <InputGroup.Root>
              <InputGroup.Label htmlFor="remember">
                <InputGroup.Input
                  type="checkbox"
                  inputId="remember"
                />
                Lembrar dispositivo
              </InputGroup.Label>
            </InputGroup.Root>

            <a href="#">Esqueceu sua senha?</a>
          </div>

          <Button
            type="submit"
            appearance="primary"
            fill
          >
            Entrar
          </Button>
        </form>

        <p className={styles.signUpLink}>
          Não tem conta? <a href="#">Faça uma agora</a>
        </p>
      </div>
    </>
  )
}
