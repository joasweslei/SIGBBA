class DapController {
  async getDap() {
    const path =
      'http://smap14.mda.gov.br/extratodap/PesquisarDAP/CarregarExtratoDAP'
    console.log(path)
  }
}

export default new DapController()
