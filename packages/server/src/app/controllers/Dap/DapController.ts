import { Request, Response } from 'express'
import axios from 'axios'
import { AxiosResponse } from 'axios'
import DapFunction from './DapFunctions'

const dap = new DapFunction()

export class DapController {

  async getDap(req: Request, res: Response) {

    // const cpfTeste = '33414165600'; --> dap valida
    //const cpfTest =  '07581953629'; --> dap invalida

    const connect = axios.create()

    let response: AxiosResponse

    const { cpf } = req.params;

    const path = 'http://smap14.mda.gov.br/extratodap/PesquisarDAP/CarregarExtratoDAP'

    const agricultor = { cpf: cpf, numeroControleExterno: "" }

    response = await connect.post(path, agricultor)

    const { data } = response

    console.log(data)

    if (data['DAP'] == null) {

      return res.json({
        error: true,
        message: data['DescMensagem'],
        dap: '',
        dataEmissao: ''
      });

    } else {
      const { Titular1DAP, dataEmissao } = data['DAP'][0]

      const dataFormatada = dap.formatData(dataEmissao)

      return res.json({
        error: false,
        message: '',
        dap: data['DAP'][0],
        dataEmissao: dataFormatada
      });
    }



  }
}
