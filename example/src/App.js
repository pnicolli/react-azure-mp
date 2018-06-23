import React, { Component } from 'react'
import { AzureMP } from 'react-azure-mp'
import styles from './index.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: [
        {
          src:
            'https://pobble.streaming.mediaservices.windows.net/d5aa7dd9-edd6-4c04-8560-6c5bf5f06460/0 Introduction - DRAFT.ism/manifest',
          type: 'application/vnd.ms-sstr+xml'
        }
      ]
    }
  }
  doSomething(player) {
    player.addEventListener('ended', () =>
      this.setState({
        src: [
          {
            src:
              'http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest',
            type: 'application/vnd.ms-sstr+xml'
          }
        ]
      })
    )
  }
  render() {
    return (
      <div className="container">
        <AzureMP
          key={this.state.src[0].src}
          skin="amp-flush"
          onInstanceCreated={player => this.doSomething(player)}
          src={this.state.src}
        />
      </div>
    )
  }
}
