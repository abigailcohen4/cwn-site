import React from "react"
import styled from "styled-components"
import Tab from "./Tab"

const Styles = {
    Menu: styled.div`
        position: absolute; 
        top: 2vh; 
        left: 0; 
        width: 100vw;
        
        color: white; 
    `
};

const Menu = () => {
    return (
        <Styles.Menu>
            <div>
                <Tab link={"/"} text="Home" /> |
                <Tab link={"../pages/CWNsNearby.tsx"} text="CWNs Nearby" /> |
                <Tab link={"../pages/Theory.tsx"} text="Theoretical Analysis" />
            </div>
        </Styles.Menu>
    )
}

export default Menu
