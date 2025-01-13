import { Button } from '@presentation/ui/button'
import { InputGroup } from '@presentation/ui/input-group'
import { useSignIn } from './sign-in.model'

import styles from './styles.module.css'

export function SignInView(methods: ReturnType<typeof useSignIn>) {
  const { handleAuthentication, register, errors, isSubmitting } = methods

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

        {errors.root && <p className={styles.loginError}>{errors.root.message}</p>}

        <form
          className={styles.signInForm}
          onSubmit={handleAuthentication}
        >
          <InputGroup.Root>
            <InputGroup.Label htmlFor="username">Usuário</InputGroup.Label>
            <InputGroup.Input
              inputId="username"
              {...register('username')}
            />

            {errors.username && <InputGroup.Error message={errors.username.message} />}
          </InputGroup.Root>

          <InputGroup.Root>
            <InputGroup.Label htmlFor="password">Senha</InputGroup.Label>
            <InputGroup.Input
              type="password"
              inputId="password"
              {...register('password')}
            />

            {errors.password && <InputGroup.Error message={errors.password.message} />}
          </InputGroup.Root>

          <div className={styles.signInFormActions}>
            <InputGroup.Root>
              <InputGroup.Label htmlFor="remember">
                <InputGroup.Input
                  type="checkbox"
                  inputId="remember"
                  {...register('remember')}
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
            disabled={isSubmitting}
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
