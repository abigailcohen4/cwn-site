import styled from "styled-components"
import Content from "./PopupContent"

const Styles = {
    Popup: styled.div`
        position: absolute; 
        left: 0; 
        right: 0; 
        top: 15vh;
        height: fit-content;
        max-height: 70vh; 

        width: 30vw;
        margin-inline: auto; 
      
        border-style: solid; 
        border-color: darkgray;
        border-width: 0.5vw;
        padding: 1vw;

        background-color: whitesmoke;
      
        z-index: 10; 
      
        vertical-align: middle;

        margin: auto;

        text-align: center;
        a{
            color: #213547; 
        }
    `
}

const closePopup = ( setPopup : ( num: number ) => void ) => { 
    setPopup(0)
}

interface PopupProps {
    popupNum: number; 
    setPopup: (num: number ) => void; 
}

const Popup = ({ popupNum, setPopup }: PopupProps) => {
    return(
        <Styles.Popup> 
            <Content popupNum={popupNum} />
            { popupNum === 1 && <button onClick={() => setPopup((popupNum+1))}> Start Tutorial </button>}
            { popupNum >1 && popupNum <4 && <button onClick={() => setPopup((popupNum+1))}> Next </button>}
            <button onClick={() => (closePopup(setPopup))}> Close </button>
        </Styles.Popup>
    )
}

export default Popup