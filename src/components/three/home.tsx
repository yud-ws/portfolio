import { useRef, useState } from 'react'
import { useFrame, useResource } from 'react-three-fiber'
import { Mesh, Vector3, MeshBasicMaterial, Line } from 'three'

type Props = {
  position: Vector3
}

type LightProps = {
  brightness: number
  color: string
}

const Plane: React.FC = () => {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  )
}

const BackDrop: React.FC = () => {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  )
}

const KeyLight: React.FC<LightProps> = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      // lookAt={[1, 1, 1]}
      castShadow
    />
  )
}
const FillLight: React.FC<LightProps> = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={1}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 0, 5]}
      // lookAt={[0, 0, 0]}
      castShadow
    />
  )
}

const RimLight: React.FC<LightProps> = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  )
}

const PointLight: React.FC<LightProps> = ({ brightness, color }) => {
  return (
    <pointLight
      // width={2}
      // height={2}
      power={1}
      intensity={brightness}
      color={color}
      position={[1, 20, -2]}
      // rotation={[0, 180, 0]}
      castShadow
    />
  )
}

const Sphere: React.FC = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  )
}

const LineComponent: React.FC = () => {
  const ref = useRef({} as Line)
  return (
    <line>
      <bufferGeometry attach="geometry" />
      <lineBasicMaterial
        attach="material"
        color={'#9c88ff'}
        linewidth={10}
        linecap={'round'}
        linejoin={'round'}
      />
    </line>
  )
}

const Cube: React.FC<Props> = ({ position }) => {
  // const distance = Math.sqrt(Math.pow(position.x, 2) + Math.pow(position.y, 2))
  const edgeLength = 5
  const ref = useRef({} as Mesh)
  useFrame(() => (ref.current.position.x += 0.1))
  const materials = [
    new MeshBasicMaterial({ color: '#0d0015' }),
    new MeshBasicMaterial({ color: '#412e49' }),
    new MeshBasicMaterial({ color: '#00552e' }),
    new MeshBasicMaterial({ color: '#640125' }),
    new MeshBasicMaterial({ color: '#0f2350' }),
    new MeshBasicMaterial({ color: '#726250' }),
  ]

  return (
    <mesh
      ref={ref}
      position={position}
      scale={[edgeLength, edgeLength, edgeLength]}
      material={materials}
    >
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="#ff0000" />
    </mesh>
  )
}

export default Cube
