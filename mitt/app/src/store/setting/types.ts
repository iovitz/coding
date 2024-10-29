export interface SystemComponentDisplay {
  isShowAppBar: boolean
  isShowNavigationBar: boolean
  isShowLoginModel: boolean
}

export type SystemStateFull = SystemComponentDisplay
export type SystemState = Partial<SystemStateFull>
