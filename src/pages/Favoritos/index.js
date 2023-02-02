import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './favoritos.css'

function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("@haruflix")
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem("@haruflix", JSON.stringify(filtroFilmes))
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus favoritos</h1>

            {filmes.length === 0 && <span>Sua lista está vazia..</span>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos