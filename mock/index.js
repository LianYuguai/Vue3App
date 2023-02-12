import chartMock from './chart'
export default [
  {
    url: '/mock/user/sign-in',
    method: 'post',
    response: ({ query }) => {
      return {
        code: '0',
        success: true,
        data: {
          token: '12345678',
          user: {
            role: '1'
          }
        }
      }
    }
  },
  ...chartMock
]
