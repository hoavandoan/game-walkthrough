import React, {useState} from 'react';
import Marzipano from "./components/Marzipano";
import {SceneSpec} from "./types/types";
import Hotspot from "./components/Hotspot";
import {IconLeft, IconRight} from "./components/icons";
import IconButton from "./components/IconButton";
import useMarzipano from "./hooks/useMarzipano";


function App() {
  const [currentId, setId] = useState(0)

  const scenes: SceneSpec[] = [{
    key: "1",
    isCurrent: currentId === 0,
    hotspots: [{
        element: <Hotspot
          onClick={() => setId(1)}
          transform={{coords: {yaw: -1.7, pitch: -1, radius: 100}}}/>
      }],
    imageUrl: require('./assets/images/20201102_152648.jpg'),
    type: 'equirect'
  },
    {
      key: "2",
      isCurrent: currentId === 1,
      hotspots: [{
          element: <Hotspot
            onClick={() => setId(2)}
            transform={{coords: {yaw: -1.55, pitch: -1.1, radius: 100}}}/>
        },{
          element: <Hotspot
            onClick={() => setId(0)}
            transform={{coords: {yaw: 0.75, pitch: 0.75, radius: 100}}}/>
        }],
      imageUrl: require('./assets/images/20201102_152507.jpg'),
      type: 'equirect'
    },
    {
      key: "3",
      isCurrent: currentId === 2,
      hotspots: [{
          element: <Hotspot
            onClick={() => setId(3)}
            transform={{coords: {yaw: -2.6, pitch: -1, radius: 100}}}/>
        },{
          element: <Hotspot
            onClick={() => setId(1)}
            transform={{coords: {yaw: 1.65, pitch: 0, radius: 100}}}/>
        }],
      imageUrl: require('./assets/images/20201102_152112.jpg'),
      type: 'equirect'
    },
    {
      key: "4",
      isCurrent: currentId === 3,
      hotspots: [],
      imageUrl: require('./assets/images/20201102_151819.jpg'),
      type: 'equirect'
    }]

  const { viewerCanvas } = useMarzipano({ scenes })

  const handleButton = (position: 'left' | 'right') => {
    //TODO
  }

  return (
    <Marzipano ref={viewerCanvas}>
      <div className="absolute z-10 flex items-center bottom-[50px] left-10">
        <IconButton onClick={() => handleButton('left')} icon={<IconLeft width={30} height={30} />} />
      </div>
      <div className="absolute z-10 flex items-center bottom-[50px] right-10">
        <IconButton onClick={() => handleButton('right')} icon={<IconRight width={30} height={30} />} />
      </div>
    </Marzipano>
  );
}

export default App;
