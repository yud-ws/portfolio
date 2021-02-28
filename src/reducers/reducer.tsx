import { useReducer } from 'react'
import { ColorContext, ActionType, ColorInterface } from '../contexts/context'

const initialState: ColorInterface = {
  color: '#00ff00',
}

const reducer: React.Reducer<ColorInterface, ActionType> = (
  state: ColorInterface,
  action: ActionType
) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload.color,
      }
    default:
      return state
  }
}

export const ColorProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<typeof reducer>(reducer, initialState)

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  )
}
