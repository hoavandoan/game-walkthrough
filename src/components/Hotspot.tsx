import React from 'react';
import {HotspotElementProps} from "../types/types";
import {IconNext} from "./icons";

const Hotspot = (props: HotspotElementProps) => {
  return (
    <div
      className="w-1 h-1 bg-green-200 cursor-pointer overflow-hidden flex items-center justify-center rounded-full"
      {...props}
    >
      <IconNext />
    </div>
  );
};

export default Hotspot;
