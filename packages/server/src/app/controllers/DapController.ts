import { Request, Response } from 'express'
import axios from 'axios'
import {AxiosResponse} from 'axios'
export class DapController {
  async getDap(req: Request, res: Response) {
 
    // const cpfTeste = '33414165600';

    const connect = axios.create()

    let response: AxiosResponse

    const {cpf} = req.params;

    const path = 'http://smap14.mda.gov.br/extratodap/PesquisarDAP/CarregarExtratoDAP'
  
    const agricultor = {cpf: cpf, numeroControleExterno: ""}

    response = await connect.post(path, agricultor)

    const {data} = response

    const {Titular1DAP, dataEmissao} = data['DAP'][0]

    const _dataTratada = new String(dataEmissao).replace('/Date(', '').replace(')/', '')

    const dataFormatada = new Date()
    
    dataFormatada.setTime(parseInt(_dataTratada))

    console.log(new Date())
    console.log(new Date().getUTCMonth())
    
    return res.json({titular: Titular1DAP, dataEmissao: dataFormatada, 
      dataUTC: dataFormatada.toLocaleString(), dataFT: dataFormatada.getDate() + "/" + dataFormatada.getMonth() + "/" + dataFormatada.getFullYear()});

  }
}
