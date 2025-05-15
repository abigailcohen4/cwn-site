import { NavLink as Link } from "react-router-dom";
import styled from "styled-components"

const Styles = {
    Content: styled.div`
        position: relative; 
        padding: 0 1.2vw; 
        max-height: 50vh; 
        overflow: scroll; 
        position: relative; 
        padding: 0 1.2vw; 
        max-height: 50vh; 
        overflow: scroll; 
        h3, p{
            color: #213547; 
        }
        ol{
            text-align: left; 
        }
        img{
            width: 50%
        }
    `
}
const intro = ( ) => {
    return(
            <div>
                <h3>Welcome to the Community Wireless Network Simulator!</h3>
                <p>Use this map to model potential community wireless networks. </p>
            </div>
    )
}

const poplegend = ( ) => {
    return(
        <div>
            <h3>LEGEND</h3>
            <p>On the bottom right of your page is the map legend. </p>
            <img src="./assets/legend.png" />
            <p>The layers High Sites, Routers, Wired Access Points, and Mesh Nodes are editable layer on which you will simulate your own CWN. Each of these
                represents a specific device within a mesh network. You can read more about the role and rules of each 
                device on the <Link to={"/How"}>How Does It Work?</Link> page. </p>
            <p>Data Centers view displays data centers in and around Newark and New Brunswick. Zoom out to find the nearest to your town. Click on a data center point to see more information on it. </p>
        </div>
    )
}

const popeditor = ( ) => {
    return(
        <div>
            <h3>FEATURE EDITOR</h3>
            <p>To the left of the legend is the Feature Editor. </p>
            <img src="./assets/featureeditor.png" />
            <p>The Routers layer contains four editable point layers for you to plan your own community wireless network.
            This layer has four editable point layers for you to plan your own community wireless network. 
                To add a feature, select "New Feature" below the type of device you want to set down. To edit or delete a feature, click "Select" under "Edit features." 
            </p>
        </div>
    )
}

const popanalysis = ( ) => {
    return(
        <div>
            <h3>LINE OF SIGHT ANALYSIS</h3>
            <p>On the bottom left of your page is the Line of Sight Analysis widget. </p>
            <img src="./assets/analysiswidget.png" />
            <p>Mesh networks require line of sight between devices. To check if two devices have an unobstructed path, select "New Analysis." 
                The first point you select will be the observer (the starting point) and any point after that will be the target. You can select as many target points as you want.  
                When you ready to check the line of sight, double click on the last target point or press "Done" on the bottom left of the map. If the line is gray, that means one of the two points is not in view, meaning you need to zoom out. 
                If the line is green, the line is unobstructed. Where the line turns red displays the point of obstruction. 
                
            </p>
        </div>
    )
}

const Content = ({ popupNum }: { popupNum: number }) => {
    return (
        <>
        <Styles.Content>
            {popupNum === 1 && intro()}
            {popupNum === 2 && poplegend()}
            {popupNum === 3 && popeditor()}
            {popupNum === 4 && popanalysis()}
        </Styles.Content>
        </>
    );
}

export default Content