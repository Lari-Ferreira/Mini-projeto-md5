import React from 'react'
import Button from '../Button/Button'
import './Header.css'
import triangule from '../../assets/triangule.png'


function Header() {
  return (
    <header>
      <h2>uma seleção de produtos</h2>
      <h1>especial para você</h1>
      <p>todos os produtos desta lista foram selecionadas a partir da sua navegação. Aproveite!</p>
        <div>
          <div>
            <Button 
              texto="Conheça a Linx" 
              borda={"none"} 
              classe={"header-button"} 
              link={'https://www.linx.com.br/'} 
              target={'blank'}  
            />
            <Button 
              texto="Ajude o algorítimo" 
              borda={"none"} 
              classe={"header-button"}
              link={'#algoritimo'}
            />
          </div>
          <div>
            <Button 
              texto="Seus produtos" 
              borda={"none"} 
              classe={"header-button"}
              link={'#Selection'} 
            />
            <Button 
              texto="Compartilhe" 
              borda={"none"} 
              classe={"header-button"}
              link={"#Section-Compartilhe"}
            />
          </div>
        </div>
            <img src={ triangule } alt="" />
    </header>
  )
}

export default Header