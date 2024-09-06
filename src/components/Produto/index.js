import '../../index.css'; 
import {MdDelete} from 'react-icons/md'; 
import axios from 'axios'; 

const Produto = ({valor, carregaProdutos}) => {

    return (
        <div className='card'> 
            <h3 className='titulo'>{valor.nome}</h3>
            <p className='subtitulo'>Preço: {valor.preco}</p>
            <p className='descricao'>{valor.descricao}</p>
            <img src={valor.foto} alt='imagem do produto' 
             className='imagem'></img>
             <MdDelete className="icone" onClick={()=>remover(valor.id)}></MdDelete>
        </div> 
    ); 

    function remover(id) {
        let api = 'https://app-api-tapwm.onrender.com/api/produtos'
        axios.delete(`${api}/${id}`)
            .then(()=>{
                carregaProdutos(); 
            })
    
        ;
    }

}

export default Produto;
