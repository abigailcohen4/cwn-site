import React from "react"
import styled from "styled-components"
import Tab from "./Tab"
import { NavLink as Link } from "react-router-dom";


const Styles = {
    Menu: styled.div`
        position: absolute; 
        top: 2vh; 
        left: 0; 
        width: 100vw;
        
        color: white; 
    `,

    Tab: styled.div`
        display: inline-block; 
        align-items: center; 
        width: fit-content; 
        padding: 1vw; 

        a{
            text-decoration: none; 
            color: white; 
            font-weight: bold; 
        }
        a:hover{
            color: lightblue; 
        }
        a:active{
            color: darkblue;
        }
        `
}

const Menu = () => {
    return (
        <Styles.Menu>
            <Styles.Tab> <Link to={"/"} > Home </Link> </Styles.Tab> |
            <Styles.Tab> <Link to={"/CWNsNearby"}>CWNS Nearby</Link> </Styles.Tab> |
            <Styles.Tab> <Link to={"/theory"}>Theoretical Analysis</Link> </Styles.Tab> |
            <Styles.Tab> <Link to="/about">About</Link> </Styles.Tab>
        </Styles.Menu>
    )
}

// const Menu = () => {
//     return (
//         <>
//             <Nav>
//                 <NavMenu>
//                         About
//                     </NavLink>
//                     <NavLink to="/contact" activeStyle>
//                         Contact Us
//                     </NavLink>
//                     <NavLink to="/blogs" activeStyle>
//                         Blogs
//                     </NavLink>
//                     <NavLink to="/sign-up" activeStyle>
//                         Sign Up
//                     </NavLink>
//                 </NavMenu>
//             </Nav>
//         </>
//     );
// };


export default Menu
