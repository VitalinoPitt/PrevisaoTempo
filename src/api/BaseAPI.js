import axios from 'axios';

export const getClima = (city) => {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${city}`)
            resolve(response.data)
        } catch (error) {
            reject ("Erro no Axios")
        }
    })
}