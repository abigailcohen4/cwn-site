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
        `,
    Img: styled.a`
        float: right;
        text-decoration: none;
        padding: 1vw; 
        img{
            width: 2vw;
        }
    `
}

const Menu = () => {
    return (
        <Styles.Menu>
            <Styles.Tab> <Link to={"/"} > Home </Link> </Styles.Tab> |
            <Styles.Tab> <Link to="/about">About</Link> </Styles.Tab> |
            <Styles.Tab> <Link to={"/how"}>How Does It Work?</Link> </Styles.Tab> |
            <Styles.Tab> <Link to={"/theory"}>Theoretical Analysis</Link> </Styles.Tab> |
            <Styles.Tab> <Link to={"/resources"}>Resources</Link> </Styles.Tab> 
            <Styles.Img href="https://github.com/abigailcohen4/cwn-site"> <img src="./assets/github-mark-white.png" /> </Styles.Img>
        </Styles.Menu>
    )
}


export default Menu
