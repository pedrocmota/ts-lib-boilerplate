import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Test: React.FunctionComponent = () => {
  return (
    <App/>
  )
}

const App = () => {
  return (
    <div>
      Test
    </div>
  )
}

ReactDOM.render(<Test/>, document.getElementById('root'))