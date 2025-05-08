import LineOfSight from "@arcgis/core/widgets/LineOfSight.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import type SceneView from "@arcgis/core/views/SceneView";
import Graphic from "@arcgis/core/Graphic.js";
import Point from "@arcgis/core/geometry/Point.js";
import Expand from "@arcgis/core/widgets/Expand.js"
import styled from "styled-components";

const Styles = {
    CustomLOS: styled.div`
    html,
      body,
      #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
      }
      #menu {
        padding: 1em;
      }
    `
}

interface coords {
    latitude: number, 
    longitude: number,
    z: number 
  }

interface CustomLOSProps {
    view: SceneView, 
    userObserver: coords, 
    userTargets: coords[]
}

const CustomLOS = ( { view, userObserver, userTargets  } : CustomLOSProps ) => {
    const lineOfSight = new LineOfSight({
        view: view,
        container: "losWidget"
      });
    
      const viewModel = lineOfSight.viewModel;
    
      // watch when observer location changes
      reactiveUtils.watch(() => viewModel.observer, () => {
          setIntersectionMarkers();
      });
    
      // watch when a new target is added or removed
      viewModel.targets.on("change", (event) => {
        event.added.forEach((target) => {
          setIntersectionMarkers();
          // for each target watch when the intersection changes
          reactiveUtils.watch(() => target.intersectedLocation, () => {
            setIntersectionMarkers();
          });
        });
        event.removed.forEach(() => {
          // remove intersection markers for removed targets (remove with right click on target)
          setIntersectionMarkers();
        });
      });
    
      // an inverted cone marks the intersection that occludes the view
      const intersectionSymbol = {
        type: "point-3d",
        symbolLayers: [{
          type: "object",
          resource: { primitive: "inverted-cone"},
          material: { color: [255, 100, 100] },
          height: 10,
          depth: 10,
          width: 10,
          anchor: "relative",
          anchorPosition: { x: 0, y: 0, z: -0.7 }
        }]
      };
    
      function setIntersectionMarkers() {
        view.graphics.removeAll();
        viewModel.targets.forEach((target) => {
          if (target.intersectedLocation) {
            const graphic = new Graphic({
              symbol: {
                type: "point-3d",
                symbolLayers: [{
                    type: "object",
                    resource: { primitive: "inverted-cone"},
                    material: { color: [255, 100, 100] },
                    height: 10,
                    depth: 10,
                    width: 10,
                    anchor: "relative",
                    anchorPosition: { x: 0, y: 0, z: -0.7 }
                }]
              },
              geometry: target.intersectedLocation
            });
            view.graphics.add(graphic);
          }
        });
      }
    
      /**************************************
       * Create an analysis by setting
       * the initial observer and four targets
       **************************************/
    
    //   viewModel.observer = new Point({
    //     latitude: 42.3521,
    //     longitude:  -71.0564,
    //     z: 139
    //   });
    
    //   viewModel.targets = [
    //     createTarget(42.3492, -71.0529),
    //     createTarget(42.3477, -71.0542),
    //     createTarget(42.3485, -71.0533),
    //     createTarget(42.3467, -71.0549)
    //   ];

    viewModel.observer = new Point({ 
        latitude: userObserver.latitude, 
        longitude: userObserver.longitude, 
        z: userObserver.z })
    viewModel.targets = userTargets.map((target) => {
        return createTarget(target.latitude, target.longitude, target.z);
    });
    
      function createTarget(lat: number, lon: number, z: number) {
        return {
          location: new Point({
            latitude: lat,
            longitude: lon,
            z: z || 0
          })
        };
      }
    
      // add an Expand widget to make the menu responsive
      const expand = new Expand({
        expandTooltip: "Expand line of sight widget",
        view: view,
        content: document.getElementById("menu") || undefined,
        expanded: true
      });
    
      view.ui.add(expand, "top-right");

      return (
        <Styles.CustomLOS>
            <div id="viewDiv">
                <div id="menu" className="esri-widget">
                    <h3>Line of sight analysis</h3>
                    <input type="checkbox" id="layerVisibility" checked /><label htmlFor="layerVisibility">Show development layer</label>
                    <div id="losWidget"></div>
                </div>
            </div>
        </Styles.CustomLOS>
    )
}

export default CustomLOS

