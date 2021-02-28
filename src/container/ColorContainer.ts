import { useState } from 'react'
import { createContainer } from 'unstated-next'

/**
 * カウンター操作用コンテナのHooks
 */
const useColorContainer = () => {
  // カウンターの数値と、数値更新用の関数を取得する
  const [color, setColor] = useState<string>('#00ff00')

  /**
   * カラーを変更する
   * @param nextColor 変更するカラー
   */
  const changeColor = (nextColor: string) => {
    console.log(color)
    setColor(nextColor)
  }

  return { color, changeColor }
}

/** カウンター操作用コンテナ */
export const ColorContainer = createContainer(useColorContainer)
