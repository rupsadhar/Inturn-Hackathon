import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return(
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large"></h1>
          <p className="lead">
            
          </p>
          <div className="buttons">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/register" class="btn btn-primary">Sign Up</Link>
            <Link to="/login" class="btn btn-primary">Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Landing