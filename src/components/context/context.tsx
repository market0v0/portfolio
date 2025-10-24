// MyContext.tsx
import React, { createContext, useContext, type ReactNode, useEffect } from 'react'

interface MyContextProps {
  data: boolean
  mode: (newData: boolean) => void
}

interface MyContextProviderProps {
  children: ReactNode
}

const MyContext = createContext<MyContextProps | undefined>(undefined)

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [data, setData] = React.useState<boolean>(true)

  const updateMode = (newData: boolean): void => {
    setData(newData)
    // Update HTML class for dark mode
    if (newData) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Initialize dark mode on mount
  useEffect(() => {
    // Always ensure dark mode is applied on initial load
    document.documentElement.classList.add('dark')
    if (!data) {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const contextValue: MyContextProps = {
    data,
    mode: updateMode
  }

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
}

const useMyContext = (): MyContextProps => {
  const context = useContext(MyContext)

  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider')
  }

  return context
}

export { MyContextProvider, useMyContext }
