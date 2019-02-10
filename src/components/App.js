import React, { Component } from 'react';
import War from './War'
import Home from './Home'

let update = (array, id, value) => {
  return array.map(d => {
    if(d.id === id) {
      return {...d, ...value}
    } else {
      return d
    }
  })
}

class App extends Component {

  state = {
    dragons: [],
    search: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/dragons')
    .then(res => res.json())
    .then(dragons => this.setState({dragons}))
  }

  patch = (data) => {
    // console.log(data)
    fetch(`http://localhost:3000/dragons/${data.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        atWar: !data.atWar
      })
    })
  }

  war = (dragon) => {
    // console.log(dragon)
    this.setState({
      dragons: update(this.state.dragons, dragon.id, {atWar:true})
    }, () => this.patch(dragon))
    
    
  }

  
  home = (dragon) => {
    this.setState({
      dragons: update(this.state.dragons, dragon.id, {atWar:false})
    }, () => this.patch(dragon))
  }
  
  search = (e) => {
    e.preventDefault()
    this.setState({
      search: e.target.search.value
    })
  }

  
  

  render() {
    // console.log(this.state.dragons.filter(d => d.atWar === true))
    return (
      <div>
        <Home handleSearch={this.search} dragons={this.state.dragons.filter(d => d.name.toLowerCase().includes(this.state.search) && d.atWar === false)} sendToWar={this.war} selectedDragon={this.selectedDragon}/>
        <War dragons={this.state.dragons.filter(d => d.atWar === true)} sendToHome={this.home} />
      </div>
    );
  }
}

export default App;
