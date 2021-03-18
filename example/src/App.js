import React, { useMemo, useState } from 'react'
import { AzureMP } from 'react-azure-mp'

const App = () => {
  const [counter, setCounter] = useState(1)
  const src = useMemo(() => [{src: "http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest", type: "application/vnd.ms-sstr+xml" }], [])
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <div className="container">
        <AzureMP
          skin="amp-flush"
          src={src} />
      </div>
    </div>
  )
}

export default App