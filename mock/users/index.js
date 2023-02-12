export default [
  {
    url: '/mock/user/list',
    method: 'get',
    response: ({ query }) => {
      return {
        code: '0',
        success: true,
        data: []
      }
    }
  }
]
