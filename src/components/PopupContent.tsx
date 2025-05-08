import styled from "styled-components"
const Styles = {
    Content: styled.div`
        h3, p{
        color: #213547; 
        }
    `
}
const intro = ( ) => {
    return(
            <div>
                <h3>Welcome to the Community Wireless Network Simulator!</h3>
                <p>Use this map to model potential community wireless networks. </p>
            </div>
    )
}

const pop2 = ( ) => {
    return(
        <div>
            <h3>POPUP</h3>
            <p>On the bottom right of your page, you'll find a map legend. There are two feature layers on this map. </p>
            <ol>
                <li>Routers</li>
                <li>Data Centers</li>
            </ol>
            <img src="../assets/legend.png" />
        </div>
    )
}

const Intro = ({ popupNum }: { popupNum: number }) => {
    return (
        <>
        <Styles.Content>
            {popupNum === 1 && intro()}
            {popupNum === 2 && pop2()}
            {/* {popupNum > 2 && closePopup()} */}
        </Styles.Content>
        </>
    );
}

export default Intro