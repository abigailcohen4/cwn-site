const pop1 = ( ) => {
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
            <p>Routers here... </p>
        </div>
    )
}

const Intro = ({ popupNum }: { popupNum: number }) => {
    return (
        <>
            {popupNum === 1 && pop1()}
            {popupNum === 2 && pop2()}
        </>
    );
}

export default Intro