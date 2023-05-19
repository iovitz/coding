const json = {
  'list|1-10': [
    {
      'id|+1': 1,
      'name': '@cname',
    },
  ],
}

const excel = [
  {
    'sheet1|10': [
      {
        'id|+1': 1,
        'Name': '@cname',
        'Address': '@county(true)',
        'Single': '@boolean',
      },
    ],
  },
  {
    'sheet2|10': [
      {
        Address: '@county(true)',
        Zip: '@zip',
        Description: '@cparagraph',
      },
    ],
  },
]

export default {
  json,
  excel,
}
