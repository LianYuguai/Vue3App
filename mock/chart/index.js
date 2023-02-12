export default [
  {
    url: '/mock/goldencham-data',
    method: 'get',
    response: ({ query }) => {
      return {
        code: '0',
        success: true,
        data: [{
          toolChamber: '11111/2 3 4 5',
          tool: '2222',
          cham: '3333',
          matchRatio: 99.1
        }]
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
