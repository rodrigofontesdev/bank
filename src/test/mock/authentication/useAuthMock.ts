type Credentials = {
  username: string
  password: string
}

export let authenticated = false

export function useAuthMock() {
  async function login({ username, password }: Credentials) {
    const authenticate = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'demo' && password === 'demo') {
          authenticated = true
          resolve({ sucess: true })
        } else {
          reject({ success: false })
        }
      }, 1000)
    })

    return authenticate
  }

  return {
    login,
    authenticated,
  }
}
