export default [
  {
    url: '/mock/log/list',
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
