import React from 'react'
import "@arcgis/map-components/dist/components/arcgis-map"

const Map = ( ) => {
    return(
        <div className="map-container">
        <arcgis-map item-id="066adf91ce554be9843fc6bea7611c10">
            <arcgis-zoom position="top-left"></arcgis-zoom>
            <arcgis-legend position="bottom-left"></arcgis-legend>
            <arcgis-editor position="top-right"></arcgis-editor>
        </arcgis-map>
      </div>
    )
}

export default Map