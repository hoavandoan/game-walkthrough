import {useEffect} from 'react'

import {SceneSpec} from '../types/types'
import {Scene, Viewer} from '../types/marzipano-types'
import {loadScene, switchScene} from '../scenes/sceneLoading'
import { createHotspot } from '../hotspots/hotspotLoading'

function useScenes(viewer: Viewer | null, inputScenes: SceneSpec[], sceneTransitionDuration?: number) {

  useEffect(() => {
    if (viewer === null) return

    inputScenes.forEach((sceneSpec, index) => {
      let scene: Scene | undefined
      if (scene === undefined) {
        scene = loadScene(viewer, sceneSpec)
      }

      if (Boolean(sceneSpec.isCurrent)) {
        switchScene(viewer, scene, sceneTransitionDuration)
        sceneSpec?.hotspots.forEach(sc => {
          // @ts-ignore
          createHotspot(scene.hotspotContainer(), sc.element)
        })
      }
    })
  }, [viewer, inputScenes])
}

export default useScenes
