import React, { Component } from 'react'

class War extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        console.log(this.props.dragons)
        return (
            <div style={{float:'left', width:'40%', padding:'5%', backgroundColor:'#f98181'}}>
                <h1>War</h1>
                {this.props.dragons.map(dragon => (
                <div onClick={() => this.props.sendToHome(dragon)}>
                <div>{dragon.name}</div>
                <img src={dragon.image} width="300" height="300"></img>
                </div>
            ))}
            </div>
        )
    }

}

export default War