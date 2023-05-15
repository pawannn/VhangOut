import WhoAmI from './main-components/whoami'
import Aboutdev from './main-components/aboutdev'
import Otherhumans from './main-components/otherhumans'
import Postsomething from './main-components/postsomething'
import Livefeed from './main-components/livefeed'
import './style/style.scss'
import React from 'react'

const App = (): React.ReactElement => {
  return(
    <div className = "container">
      <div className="box"><WhoAmI /></div>
      <div className="box"><Aboutdev /></div>
      <div className="box"><Otherhumans /></div>
      <div className="box livefeed"><Livefeed /></div>
      <div className="box"><Postsomething /></div>
    </div>
  )
}

export default App