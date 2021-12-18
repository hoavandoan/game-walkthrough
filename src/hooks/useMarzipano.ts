import React, { useEffect, useState, useRef } from 'react'
// @ts-ignore
import { Viewer as ViewerConstructor } from 'marzipano'

import {HotspotSpec, SceneSpec} from '../types/types'
import { Scene, Viewer } from '../types/marzipano-types'
import { useScenes } from '../scenes'


export interface ViewerOpts {
  controls?: {
    mouseViewMode?: 'drag' | 'qtvr',
    dragMode?: 'pan' | 'pinch',
    scrollZoom?: boolean,
  },
  stage?: {
    antialias?: boolean,
    preserveDrawingBuffer?: boolean,
    generateMipmaps?: boolean,
  },
  cursors?: {
    drag?: {
      active?: string,
      inactive?: string,
      disabled?: string,
    },
  },
}

export interface UseMarzipanoProps {
  viewerOpts?: ViewerOpts,
  scenes: SceneSpec[],
  hotspotSpec?: HotspotSpec[]
}

export interface UseMarzipanoResult {
  viewerCanvas: React.RefObject<HTMLDivElement>,
}

const defaultViewerOpts = {
  controls: {
    mouseViewMode: 'drag',
  },
}

function useMarzipano({ viewerOpts, scenes: sceneSpecs }: UseMarzipanoProps): UseMarzipanoResult {
  const viewerCanvasRef = useRef<HTMLDivElement>(null)

  const [viewer, setViewer] = useState<Viewer | null>(null)
  useEffect(() => {
    if (viewerCanvasRef.current !== null) {
      const viewer = new ViewerConstructor(viewerCanvasRef.current, viewerOpts ?? defaultViewerOpts)
      setViewer(viewer)
    }
  }, [viewerCanvasRef])

  // Scene Loading
  useScenes(viewer, sceneSpecs)

  return { viewerCanvas: viewerCanvasRef }
}

export default useMarzipano
