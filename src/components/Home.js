import React, { Component } from 'react'

class Home extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        // console.log(this.props.dragons)
        return (
            


        <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
        <form onSubmit={(e) => this.props.handleSearch(e)}>
                <input type="text" name="search"></input>
            </form>
            <h1>Home</h1>
            {this.props.dragons.map(dragon => (
                <div onClick={() => this.props.sendToWar(dragon)} selectedDragon={dragon}>
                <div>{dragon.name}</div>
                <img src={dragon.image} width="300" height="300"></img>
                </div>
            ))}
        </div>
        )
    }

}

export default Home