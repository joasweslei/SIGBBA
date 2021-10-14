import { Request, response, Response, Router } from 'express'
import axios from 'axios'
import {AxiosResponse} from 'axios'
class DapController {
  async getDap(req: Request, res: Response) {
    
    const connect = axios.create()

    let response: AxiosResponse

    const {cpf} = req.params;

    const path = 'http://smap14.mda.gov.br/extratodap/PesquisarDAP/CarregarExtratoDAP'
  
    const agricultor = {cpf: cpf, numeroControleExterno: ""}

    response = await connect.post(path, agricultor)

    const {data} = response

    return res.json(data)

  }
}

export default new DapController()
