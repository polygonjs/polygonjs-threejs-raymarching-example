import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1666558610137",
  root: "1666558610137",
  nodes: {
    perspectiveCamera1: "1666557987353",
    "perspectiveCamera1/events1": "1666557987353",
    raymarchedObject: "1666558610137",
    "raymarchedObject/MAT": "1666558610137",
    "raymarchedObject/MAT/rayMarchingBuilder1": "1666558610137",
    COP: "1666558610137",
  },
  shaders: {
    "/raymarchedObject/MAT/rayMarchingBuilder1": {
      vertex: "1666558610137",
      fragment: "1666558610137",
      "customDepthMaterial.vertex": "1666558610137",
      "customDepthMaterial.fragment": "1666558610137",
      "customDistanceMaterial.vertex": "1666558610137",
      "customDistanceMaterial.fragment": "1666558610137",
    },
  },
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
