import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        (props.colaboradoress.length > 0) ? 
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderBottomColor: props.corPrimaria, color: props.corPrimaria }}> {props.nome} </h3>
            <div className='colaboradores'>
                {props.colaboradoress.map(a => 
                    <Colaborador 
                        nome={a.nome} 
                        cargo={a.cargo} 
                        imagem={a.imagem}
                        key={a.nome} />
                )}
            </div> 
        </section>
        : ''
    )
}

export default Time