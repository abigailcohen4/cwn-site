import { useEffect } from "react";
import SceneView from "@arcgis/core/views/SceneView.js";
import WebScene from "@arcgis/core/WebScene.js";

import LineOfSight from "@arcgis/core/widgets/LineOfSight.js";
import LineOfSightAnalysis from "@arcgis/core/analysis/LineOfSightAnalysis.js";

import Legend from "@arcgis/core/widgets/Legend.js";
import Editor from "@arcgis/core/widgets/Editor.js";

import styled from "styled-components";

const Styles = {
    Scene: styled.div`
        .map-container {
            width: 100vw;
            height: 90vh;
            bottom: 0;
            left: 0;
            right: 0;
        }
    `
};

const Scene = () => {
    useEffect(() => {
        // Initialize the WebScene and SceneView after the component mounts
        const scene = new WebScene({
            portalItem: {
                id: "4700fecae9b14f5ca640957514ce9d31"
            }
        });

        const view = new SceneView({
            map: scene,
            container: "scene-container",
            analyses: [ new LineOfSightAnalysis() ]
        });

        const lineOfSight = new LineOfSight({
            view: view
          });
          view.ui.add(lineOfSight, { position: "bottom-left" });

          let legend = new Legend({ view: view });  
          view.ui.add(legend, "bottom-right");

          let editor = new Editor({ view: view });
          view.ui.add(editor, "bottom-right");
          
        //   let widgetNode = document.createElement("div")
        //   let widgetRoot = createRoot(widgetNode)
        //   view.ui.add(widgetNode, "bottom-left")
        //   widgetRoot.render(<LOSanalysis />)

        // Cleanup function to destroy the view when the component unmounts
        return () => {
            if (view) {
                view.destroy();
            }
        };
    }, []); // Empty dependency array ensures this runs only once after mount

    // const async function analysisView = await view.whenAnalysisView(analysis)
    //     .then(function(view) {
    //     // The layerview for the layer
    //     })
    //     .catch(function(error) {
    //     // An error occurred during the layerview creation
    //     });

    return (
        <Styles.Scene>
            <div id="scene-container" className="map-container"></div>
        </Styles.Scene>
    );
};

export default Scene;