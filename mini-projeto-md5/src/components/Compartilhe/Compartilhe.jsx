import Formulario from '../Formularios/Formulario'
import TituloSection from '../Titulo/TituloSection'
import './Compartilhe.css'

function SectionCompartilhe(){
    return (
        <div className='Secao-Compartilhe' id='Secao-Compartilhe'>
            <TituloSection texto={'Compartilhe a novidade'} />
            <Formulario />
        </div>
    )
}

export default SectionCompartilhe