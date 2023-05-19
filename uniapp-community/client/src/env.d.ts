/// <reference types="vite/client" />
import vue from 'vue'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'uview-plus' {
  const plugin: any
  export default plugin
}

interface Uni {
  $u: any
}

interface ButtonHTMLAttributes {
  type?: string
}