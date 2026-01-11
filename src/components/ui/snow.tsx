'use client'

import { Snowfall } from 'react-snowfall'

export default function Snow() {
  return (
    <Snowfall
      snowflakeCount={100}
      speed={[0.5, 2]}
      wind={[-0.5, 0.5]}
      radius={[0.5, 2]}
      color="#ffffff"
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    />
  )
}

