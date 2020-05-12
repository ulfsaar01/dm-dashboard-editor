import React from 'react'
import { Circle } from 'react-konva'

const Simple = props => {
  const { x, y, useRef } = props

  return (
    <Circle
      x={x}
      y={y}
      radius={50}
      fill="red"
      draggable
      ref={useRef}
    />
  )
}

export default Simple
