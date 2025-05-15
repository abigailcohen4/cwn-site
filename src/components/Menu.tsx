import styled from "styled-components"
import { NavLink as Link } from "react-router-dom";


const Styles = {
    Menu: styled.div`
        margin-top: 2vh; 
        width: 100vw;
        
        color: white; 
    `,

    Tab: styled.div`
        display: inline-block; 
        align-items: center; 
        width: fit-content; 
        padding: 1vw; 
        font-size: 1.5em;

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
            <Styles.Tab> <Link to="/about">About</Link> </Styles.Tab> |
            <Styles.Tab> <Link to={"/How"}>How Does It Work?</Link> </Styles.Tab> |
            <Styles.Tab> <Link to={"/theory"}>Theoretical Analysis</Link> </Styles.Tab> |
            <Styles.Tab> <Link to={"/CWNsNearby"}>CWNS Nearby</Link> </Styles.Tab> |
        </Styles.Menu>
    )
}


export default Menu
