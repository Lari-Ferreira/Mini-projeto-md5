import React from 'react'
import './Formulario.css'
import Button from '../Button/Button'

function FormularioAmg() {
  return (
    <div className='form-amigo'>
      <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
      <div>
        <div>
          <p>Nome do seu amigo:</p>
          <input type="text" />
        </div>
        <div>
          <p>E-mail:</p>
          <input type="text" />
        </div>
      </div>
      <Button texto={'Enviar agora'} borda={"#888888 solid 1px"} classe={"button-amigo"} />
    </div>
  )
}

export default FormularioAmg