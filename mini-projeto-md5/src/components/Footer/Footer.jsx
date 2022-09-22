import React from 'react'
import triangule from '../../assets/triangule.png'
import './Footer.css'

function Footer() {
  return(
    <footer>
      <img src={triangule} alt="" />
      <p>
        Testando suas habilidades em HTML, CSS e JS. <br />
        Linx Impulse <br />
          {new Date().getFullYear()}.
      </p>
    </footer>
  )
}

export default Footer