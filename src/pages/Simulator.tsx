import { useEffect, useState } from 'react'
import Popup from '../components/Popup'
import Scene from '../components/Scene'

function Simulator() {
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
      <div id="popup" style={{display: popupNum > 0 ? "block" : "none"}}>
        <Popup popupNum={popupNum} setPopup={setPopupNum}/>
      </div>
      <Scene />
    </>
  )
}

export default Simulator
