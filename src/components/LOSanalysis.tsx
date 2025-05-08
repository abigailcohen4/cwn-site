import React from "react" 

export default class LOSanalysis extends React.Component{
    state = {
        open: false
    }

    toggleOpen = () =>  this.setState((state, _) => ({ open: !this.state.open }))

    render() {
        return (
            <div>
                <button onClick={this.toggleOpen} style={{marginRight: '100%'}}> Widget</button> 
                {this.state.open && (
                    <div 
                        style={{
                            backgroundColor: 'white', 
                            padding: '20px', 
                            fontWeight: 'bold'
                        }}
                    >
                        Line of Sight Analysis Widget!
                    </div>
                )}
            </div>
        )
    }
}