import React from "react"
import ItemList from "./ItemList"
import Header from "./Header"

class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <ItemList items={this.props.items}/>
      </div> 
    );
  }
}

export default App
