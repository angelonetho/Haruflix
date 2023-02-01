import { useEffect, useState } from "react"
import api from "../../services/api"

function Home() {

    const[filmes, setFilmes] = useState([])

    useEffect(()=> {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language: "pt-BR",
                    page: 1
                }
            })

            console.log(response.data.results)
        }

        loadFilmes()
    }, [])


    return(
        <div>
            <h1>Bem vindo a home</h1>
        </div>
    )
}

export default Home