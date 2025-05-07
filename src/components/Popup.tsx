import styled from "styled-components"
import Intro from "./PopupContent"

const Styles = {
    Popup: styled.div`
        position: absolute; 
        left: 0; 
        right: 0; 
        top: 30vh;
        height: fit-content;
        width: 50vw;
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
            <div id="content">
                <Intro popupNum={popupNum} />
                {/* {popupNum === 1 && <Intro />}
                {popupNum === 2 && <PopupOne />} */}
                {/* {popupNum === 3 && <PopupTwo />} */}
                <button onClick={() => setPopup((popupNum+1))}> Start Tutorial </button>
                <button onClick={() => (closePopup(setPopup))}> Close </button>
            </div>
        </Styles.Popup>
    )
}

export default Popup