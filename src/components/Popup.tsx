import styled from "styled-components"

const Styles = {
    Popup: styled.div`{
        position: absolute; 
        left: 0; 
        right: 0; 
        margin-inline: auto; 
        width: fit-content;
      
        border-style: solid; 
        border-color: whitesmoke;
        border-width: 10px;
        background-color: whitesmoke;
      
        z-index: 10; 
      
        display: flex;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
      }`
}

const closePopup = () => { 
    const pup = document.getElementById("Popup");
    if (pup) {
        pup.style.display = "none";
    }
  }

const Popup = ( ) => {
    return(
        <Styles.Popup> 
            <div id="myPopup">
                <h3>Welcome to the Community Wireless Network Simulator!</h3>
                <p>Use this map to model potential community wireless networks. </p>
                <button onClick={closePopup}> Close </button>
            </div>
        </Styles.Popup>
    )
}

export default Popup