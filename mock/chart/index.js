export default [
  {
    url: '/mock/goldencham-data',
    method: 'get',
    response: ({ query }) => {
      return {
        code: '0',
        success: true,
        data: []
      }
    }
  },
  {
    url: '/mock/g2g',
    method: 'get',
    response: ({ query }) => {
      return {
        code: '0',
        success: true,
        data: []
      }
    }
  },
  {
    url: '/mock/oer',
    method: 'get',
    response: ({ query }) => {
      return {
        code: '0',
        success: true,
        data: []
      }
    }
  },
  {
    url: '/mock/ooc',
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
