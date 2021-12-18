import Marzipano from './components/Marzipano'
import useMarzipano from './hooks/useMarzipano'
import { enableMapSet } from 'immer'
import { SceneSpec, HotspotElementProps, HotspotSpec } from './types/types'

enableMapSet()

export {
  Marzipano,
  useMarzipano,
}
export type {
  SceneSpec,
  HotspotSpec,
  HotspotElementProps,
}
