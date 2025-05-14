import { NavLink as Link } from "react-router-dom";
import styled from "styled-components"
const Styles = {
    Content: styled.div`
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
            <p>On the bottom right of your page, you'll find a map legend. </p>
            <img src="cwn-site/src/assets/legend.png" />
            <p>The layers High Sites, Routers, Wired Access Points, and Mesh Nodes are editable layer on which you will simulate your own CWN. Each of these
                represents a specific device within a mesh network. You can read more about the role and rules of each 
                device on the <Link to={"/How"}>How Does It Work?</Link> page. </p>
            <p>Data Centers maps data centers in and around Newark and New Brunswick. Zoom out to find the nearest to your town. Click on a data center point to see more information on it. </p>
        </div>
    )
}

const popeditor = ( ) => {
    return(
        <div>
            <h3>FEATURE EDITOR</h3>
            <p>To the left of the legend is the Feature Editor. </p>
            <img src="cwn-site/src/assets/legend.png" />
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
            <p>To the left of the legend is the Feature Editor. </p>
            <img src="cwn-site/src/assets/legend.png" />
            <p>The Routers layer contains four editable point layers for you to plan your own community wireless network.
            This layer has four editable point layers for you to plan your own community wireless network. 
                To add a feature, select "New Feature" below the type of device you want to set down. To edit or delete a feature, click "Select" under "Edit features." 
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