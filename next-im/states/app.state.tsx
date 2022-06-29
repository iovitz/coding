import React, { useState } from 'react'

const defaultContextValue = {
  nickname: 'Hello',
}

export const appContext = React.createContext(defaultContextValue)
export const appSetStateContext = React.createContext<
  | React.Dispatch<
      React.SetStateAction<{
        nickname: string
      }>
    >
  | undefined
>(undefined)

const AppStateProvider: React.FC<any> = ({ children }) => {
  const [state, setState] = useState(defaultContextValue)
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>{children}</appSetStateContext.Provider>
    </appContext.Provider>
  )
}

export default AppStateProvider
