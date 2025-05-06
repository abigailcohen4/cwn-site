import React from 'react'

const closePopup = () => { 
    const pup = document.getElementById("Popup");
    if (pup) {
        pup.style.display = "none";
    }
  }

const Popup = ( ) => {
    return(
        <div className="popup" id="myPopup">
          <span className="popuptext">
          <h3>Welcome to the Community Wireless Network Simulator!</h3>
          <p>Use this map to model potential community wireless networks. </p>
          <button onClick={closePopup}> Close </button>
          </span>
        </div>
    )
}

export default Popup