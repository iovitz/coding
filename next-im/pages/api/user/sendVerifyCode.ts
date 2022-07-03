// import http from '@/utils/request'
import { anywayServer } from '@/utils/server'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function sendVerifyCode(req: NextApiRequest, res: NextApiResponse) {
  const { phone = '' } = req.body
  if (!phone) {
    return
  }

  anywayServer.get('https://sms.tencentcloudapi.com/?Action=SendSms', {
    PhoneNumberSet: ['+8618511122266'],
    SmsSdkAppId: '1400701623',
    TemplateId: '1',
    TemplateParamSet: ['12345'],
    SessionContext: 'test',
  })
  res.status(200).json({ name: 'John Doe' })
}
