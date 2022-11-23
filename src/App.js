import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Feedback from './Feedback'

export default function App(e) {
  const [youLike, youDontLike] = useState(false)
  return (
    <div className="App">
      <button onClick={() => youDontLike(!youLike)}>
        <i className="fas fa-thumbs-up"></i>
      </button>
      {youLike ? <Feedback /> : <p>Hit the like!</p>}
      <NavBar />
    </div>
  )
}
