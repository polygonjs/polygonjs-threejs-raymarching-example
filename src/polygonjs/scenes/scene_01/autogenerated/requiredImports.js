// cop
import { ImageEXRCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { RayMarchingBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/RayMarchingBuilder";
// obj
import { CopNetworkObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/CopNetwork";
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
import { HemisphereLightObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight";
import { PerspectiveCameraObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera";
// sop
import { EventsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { SphereSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere";

export const requiredImports_scene_01 = {
  nodes: [
    ImageEXRCopNode,
    CameraOrbitControlsEventNode,
    RayMarchingBuilderMatNode,
    CopNetworkObjNode,
    GeoObjNode,
    HemisphereLightObjNode,
    PerspectiveCameraObjNode,
    EventsNetworkSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    SphereSopNode,
  ],
  operations: [],
};
