import React, { Component } from 'react'

import ReactTips from 'react-tips'

export default class App extends Component {
  render () {

      const tips = ["tip 1: Showing helptips 1", "tip 2: Showing helptips 2", "tip 3: Showing helptips 3"]

    return (
      <div>
        <ReactTips style={{color:'red'}} tips={tips} interval={1000}/>
      </div>
    )
  }
}
