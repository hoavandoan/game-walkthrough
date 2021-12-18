// @ts-ignore
import Marzipano from 'marzipano'

import { SceneSpec } from '../types/types'
import { Scene, Viewer } from '../types/marzipano-types'


const defaultResolution = 5376
const defaultFov = Math.PI * 1 / 3
const defaultViewParams = { yaw: 0, pitch: 0, roll: 0, defaultFov }
const defaultViewLimiter = Marzipano.RectilinearView.limit.traditional(defaultResolution, defaultFov)
const defaultLevels = [
  { width: defaultResolution }
]


function loadScene(viewer: Viewer, sceneSpec: SceneSpec) {
  const { imageUrl, type } = sceneSpec

  const levels = sceneSpec.levels ?? defaultLevels

  const viewParams = sceneSpec.viewParams ?? defaultViewParams
  const viewLimiter = sceneSpec.viewLimiter ?? defaultViewLimiter
  const view = new Marzipano.RectilinearView(viewParams, viewLimiter)

  const geometry = type === 'equirect'
    ? new Marzipano.EquirectGeometry(levels)
    : new Marzipano.CubeGeometry(levels)
  const source = typeof imageUrl === 'function'
    ? new Marzipano.ImageUrlSource(imageUrl)
    : Marzipano.ImageUrlSource.fromString(imageUrl)

  return viewer.createScene({ source, geometry, view })
}

function unloadScene(viewer: Viewer, scene: Scene) {
  viewer.destroyScene(scene)
}

type OnLoadFunc = () => void

let currentListener: OnLoadFunc | null = null

function switchScene(viewer: Viewer, scene: Scene, transitionDuration?: number, onLoad?: OnLoadFunc) {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (viewer && scene) {
    if (onLoad) {
      if (currentListener) {
        viewer.stage().removeEventListener('renderComplete', currentListener)
      }
      currentListener = onLoad
      viewer.stage().addEventListener('renderComplete', onLoad)
    }

    scene.switchTo({ transitionDuration })
  }
}

export type { OnLoadFunc }
export { loadScene, unloadScene, switchScene }
