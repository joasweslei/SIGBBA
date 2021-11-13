export default class DapFunction {
    formatData(dataEmissao: String): String {
        const _dataTratada = new String(dataEmissao).replace('/Date(', '').replace(')/', '')

        let dataFormatada = new Date()

        dataFormatada.setTime(parseInt(_dataTratada))

        return dataFormatada.toLocaleString('pt-BR', { timeZone: 'UTC' }).replace(" 03:00:00", "")
    }
}