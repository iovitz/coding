import { Navbar, Button, Textarea, Cell, Form, Uploader, Notify } from '@taroify/core'
import React, { useRef, useState, Component } from 'react'
import { FormItemInstance } from '@taroify/core/form'
import { getFormDataParams } from '@/common/utils/aliyun'
import { getUUID } from '@/common/utils/uuid'
import Taro from '@tarojs/taro'
import './index.scss'

interface PublishStatus {
  text: string
  file: Uploader.File[]
}

export default class Publish extends Component<{}, PublishStatus> {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      file: []
    }
  }
  onSubmit = async () => {
    const { text, file } = this.state
    if (!text && !file.length) return
    console.log(text)
    if (file.length) {
      const files: string[] = []
      getFormDataParams().then((formData) => {
        const promisses = file.map((fileItem) => {
          return new Promise((success, fail) => {
            const path = `images/${getUUID(20, 0)}-${Date.now()}` + fileItem.url?.substring(fileItem.url.lastIndexOf('.') || 0)
            files.push(`https://miit-oss.oss-cn-hangzhou.aliyuncs.com/${path}`)
            Taro.uploadFile({
              url: 'https://miit-oss.oss-cn-hangzhou.aliyuncs.com/',
              filePath: fileItem.url || '',
              name: 'file', // 必须填file。
              formData: {
                ...formData,
                key: path
              },
              success,
              fail
            })
          })
        })
        Promise.all(promisses).then((item) => {
          console.log('成功了啊哈', item)
        })
      })
    }
  }

  goBack = () => {
    console.log('返回')
  }

  onUpload = () => {
    const { file } = this.state
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera']
    })
      .then(({ tempFiles }) => {
        if (tempFiles[0].size > 3 * 1024 * 1024) {
          Notify.open('图片不能超过3M')
          return
        }
        this.setState({
          file: [
            ...file,
            {
              url: tempFiles[0].path,
              type: tempFiles[0].type,
              name: tempFiles[0].originalFileObj?.name
            }
          ]
        })
      })
      .catch((e) => {
        if (e.errMsg === 'chooseImage:fail cancel') {
          console.log('取消上传')
        }
      })
  }

  onChange = (file: Uploader.File[]) => {
    this.setState({
      file
    })
  }

  render() {
    const { file, text } = this.state
    return (
      <div className="app-container">
        <Notify id="notify" />
        <Navbar>
          <Navbar.NavLeft onClick={this.goBack}>返回</Navbar.NavLeft>
          <Navbar.NavRight>
            <Button onClick={this.onSubmit} className="publish-button" size="mini" color="primary">
              发布
            </Button>
          </Navbar.NavRight>
        </Navbar>

        <Cell>
          <Textarea
            value={text}
            onChange={(e) => {
              this.setState({
                text: e.detail.value
              })
            }}
            className="publish-textarea"
            maxlength={500}
          ></Textarea>
          <Form.Item name="uploader">
            <Form.Control>
              <Uploader className="publish-uploader" value={file} multiple maxFiles={9} onUpload={this.onUpload} onChange={this.onChange} />
            </Form.Control>
          </Form.Item>
        </Cell>
      </div>
    )
  }
}
