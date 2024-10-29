import AliCloudCore from '@alicloud/pop-core'

//构建一个阿里云客户端, 用于发起请求。
//设置调用者（RAM用户或RAM角色）的AccessKey ID和AccessKey Secret。
var client = new AliCloudCore({
  accessKeyId: '',
  accessKeySecret: '',
  endpoint: '',
  apiVersion: '2015-04-01'
})

//设置参数。
var params = {
  RoleArn: '',
  RoleSessionName: 'mee',
  Policy: JSON.stringify(
    {
      Version: '1',
      Statement: [
        {
          Effect: 'Allow',
          Action: 'oss:PutObject',
          Resource: ['']
        }
      ]
    },
    null,
    2
  ),
  DurationSeconds: 7200
}

var requestOption = {
  method: 'POST'
}

exports.request = (callback) => {
  client.request('AssumeRole', params, requestOption).then(
    (result) => {
      callback(result)
    },
    (ex) => {
      callback(ex)
    }
  )
}
