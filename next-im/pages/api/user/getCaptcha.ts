import svgCaptcha from 'svg-captcha'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function getCaptcha(req: NextApiRequest, res: NextApiResponse) {
  let { width = 100, height = 50 } = req.query
  width = Number(width)
  height = Number(height)
  console.log(req.query)
  if (isNaN(width) || isNaN(height)) {
    throw new Error('验证码宽高格式不正确')
  }
  const captcha = svgCaptcha.create({
    width,
    height,
  })
  res.status(200).json({
    url: captcha.data,
  })
}
