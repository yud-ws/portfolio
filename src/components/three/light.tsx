import { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'
import { Vector3, Light } from 'three'

type LightProps = {
  color: string
}

const getRandomArbitrary = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}

const BackDrop: React.FC = () => {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  )
}

const PointLight: React.FC<LightProps> = ({ color }) => {
  const light = useRef({} as Light)

  const minBrightness = 0.3
  const maxBrightness = 1
  const maxX = 100
  const minX = -100
  const maxY = 100
  const minY = -100
  const maxZ = 0
  const minZ = -4

  const [brightness, setBrightness] = useState(
    getRandomArbitrary(minBrightness, maxBrightness)
  )
  const [position, setPosition] = useState(
    new Vector3(
      getRandomArbitrary(minX, maxX),
      getRandomArbitrary(minY, maxY),
      getRandomArbitrary(minZ, maxZ)
    )
  )
  const [isIncreasing, setIsIncreasing] = useState(true)

  useFrame(() => {
    if (brightness >= maxBrightness) {
      setIsIncreasing(false)
    } else if (brightness <= minBrightness) {
      setIsIncreasing(true)
    }

    if (isIncreasing) {
      setBrightness(brightness + getRandomArbitrary(0.001, 0.005))
    } else {
      setBrightness(brightness + getRandomArbitrary(-0.005, -0.001))
    }

    if (position.y > maxY) {
      setPosition(new Vector3(position.x, minY, position.z))
    } else {
      setPosition(
        new Vector3(
          position.x,
          position.y + getRandomArbitrary(0.001, 0.05),
          position.z
        )
      )
    }
  })

  return (
    <pointLight
      ref={light}
      distance={6}
      intensity={brightness}
      color={color}
      position={position}
      castShadow
    />
  )
}

const Background: React.FC<LightProps> = ({ color }) => {
  return (
    <>
      <BackDrop />
      {[...Array(20)].map((_, index) => {
        return <PointLight key={index} color={color} />
      })}
    </>
  )
}

export default Background
