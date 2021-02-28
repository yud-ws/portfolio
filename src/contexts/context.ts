import { createContext } from 'react'

export interface ColorInterface {
  color: string
}

export interface ActionType {
  type: string
  payload: {
    color: string
  }
}

export const ColorContext = createContext(
  {} as {
    state: ColorInterface
    dispatch: React.Dispatch<ActionType>
  }
)
