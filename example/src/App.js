import React, { Component } from 'react'
import { AzureMP } from 'react-azure-mp'

export default class App extends Component {
  doSomething(player) {
    this.player = player
  }
  render() {
    return (
      <div className="container">
        <AzureMP
          skin="amp-flush"
          src={[{src: "http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest", type: "application/vnd.ms-sstr+xml" }]} />
      </div>
    )
  }
}
