import styled from "styled-components"

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
        
        margin: auto;
    `
}

const closePopup = () => { 
    const popupElement = document.getElementById("content")?.parentElement;
    if (popupElement) {
        popupElement.style.display = "none";
    }
}

const Popup = ( ) => {
    return(
        <Styles.Popup> 
            <div id="content">
                <h3>Welcome to the Community Wireless Network Simulator!</h3>
                <p>Use this map to model potential community wireless networks. </p>
                <button onClick={closePopup}> Close </button>
            </div>
        </Styles.Popup>
    )
}

export default Popup