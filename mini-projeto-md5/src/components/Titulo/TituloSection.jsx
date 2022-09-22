import './TituloSection.css'

function TituloSection({texto}){
    return (
        <div className='titulo-section'>
        <hr />
        <h4>{texto}</h4>
        <hr />
    </div>
    )
}

export default TituloSection