import React from 'react'
import ReactDOM from 'react-dom'

import { HotspotElementProps } from '../types/types'
import { HotspotContainer, Hotspot } from '../types/marzipano-types'


function createHotspot(hotspotContainer: HotspotContainer, element: React.ReactElement<HotspotElementProps>): Hotspot {
  const { transform, ...otherProps } = element.props

  const rootElement = document.createElement('div')

  const { yaw, pitch, radius } = transform.coords
  const opts = { perspective: { radius } }

  const hotspot = hotspotContainer.createHotspot(rootElement, { yaw, pitch }, opts)

  ReactDOM.render(React.cloneElement(element, otherProps), hotspot.domElement())

  hotspot.show()

  return hotspot
}

function destroyHotspot(hotspotContainer: HotspotContainer, hotspot: Hotspot) {
  hotspotContainer.destroyHotspot(hotspot)
}

export { createHotspot, destroyHotspot }
