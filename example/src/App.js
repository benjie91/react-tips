import React, { Component } from 'react'

import ReactTips from 'react-tips'

export default class App extends Component {
  render () {

      const tips = ["tip 1: abcdef", "tip 2: ghijkl"]

    return (
      <div>
        <ReactTips tips={tips} interval={1000}/>
      </div>
    )
  }
}
