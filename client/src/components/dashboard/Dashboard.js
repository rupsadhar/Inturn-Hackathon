import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return(
    <section >
      
          <div className="buttons">
            <Link to="/otp" class="btn btn-primary">otp</Link>
          </div>
          <p>
                    hi
          </p>
          <div className="buttons">
            <Link to="/otpqr" class="btn btn-primary">qr code</Link>
          </div>
    </section>
  )
}
export default Landing