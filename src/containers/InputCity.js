import React from 'react' ;

export default class InputCity extends React.Component {
    state={
        city : ''
    }

    handleChange = event => {
        this.setState({
            city : event.target.value
        })
    }
    render(){
        return(
            <div style={{textAlign : 'center',
                        marginTop : '100px',
                        backgroundColor: '#FFFFFFFF',
                        

        }}>
                <input style={{margin: '5px',
                            padding: '5px',
                            fontSize:'20px',
                            borderRadius: '5px'}} 
                            type="text" 
                            placeholder="City Name"
                            value={this.state.city}
                onChange={this.handleChange} /> <br></br>
                <button style={{margin: '5px',
                    padding: '5px',
                    fontSize:'20px',
                    borderRadius: '5px',
                    backgroundColor: '#084d52',
                    color: 'white',
                    cursor: 'pointer'
            }} onClick={()=>{this.props.getTemperature(this.state.city)}}>Get Temperature</button>
            </div>
        );
    }
}