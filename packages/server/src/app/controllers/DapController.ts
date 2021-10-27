import { Request, Response } from 'express'
import axios from 'axios'
import {AxiosResponse} from 'axios'
export class DapController {
  async getDap(req: Request, res: Response) {
 
    // const cpfTeste = '33414165600'; --> dap valida
    //const cpfTest =  '07581953629'; --> dap invalida

    const connect = axios.create()

    let response: AxiosResponse

    const {cpf} = req.params;

    const path = 'http://smap14.mda.gov.br/extratodap/PesquisarDAP/CarregarExtratoDAP'
  
    const agricultor = {cpf: cpf, numeroControleExterno: ""}

    response = await connect.post(path, agricultor)

    const {data} = response

    const {Titular1DAP, dataEmissao} = data['DAP'][0]

    const _dataTratada = new String(dataEmissao).replace('/Date(', '').replace(')/', '')

    let dataFormatada = new Date()

    dataFormatada.setTime(parseInt(_dataTratada))
    
    console.log(_dataTratada)

    return res.json({titular: Titular1DAP, dataEmissao: dataFormatada, 
      dataUTC: dataFormatada.toLocaleString('pt-BR', {timeZone: 'UTC'}).replace(" 03:00:00", "")});

  }
}
