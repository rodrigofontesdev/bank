import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthMock } from '@test/mock/authentication/useAuthMock'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Authentication, authenticationSchema } from './sign-in.schema'

export function useSignIn() {
  const { login } = useAuthMock()
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<Authentication>({
    mode: 'onSubmit',
    resolver: zodResolver(authenticationSchema),
    defaultValues: {
      username: '',
      password: '',
      remember: false,
    },
  })

  async function authenticate(data: Authentication) {
    await login({ username: data.username, password: data.password })
      .then(() => navigate('/dashboard'))
      .catch(() => {
        setError('root', { message: 'Usuário ou senha incorretos!' })
      })
  }

  const handleAuthentication = handleSubmit(authenticate)

  return {
    handleAuthentication,
    register,
    errors,
    isSubmitting,
  }
}
