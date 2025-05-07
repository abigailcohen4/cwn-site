import { use, useEffect, useState } from 'react'
import './App.css'
import Popup from './components/Popup'
import Map from './components/Scene'
import Menu from './components/Menu'


// tutorial - when close popup, choose start tutorial or not 

function App() {
  const [popupNum, setPopupNum] = useState(1)

  useEffect(() => {
      if (popupNum === 0) {
          const popupElement = document.getElementById("popup");
          if (popupElement) {
            popupElement.style.display = "none";
        }
      }
  })

  return (
    <>
      <Menu />
      <div id="popup" style={{display: popupNum > 0 ? "block" : "none"}}>
        <Popup popupNum={popupNum} setPopup={setPopupNum}/>
      </div>
      {/* <div style={{display: tutorial ? "block" : "none"}}> 
        <Tutorial />
      </div> */}
      <Map />
    </>
  )
}

export default App
