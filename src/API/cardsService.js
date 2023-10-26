export default class CardsServices {
    static async getAll() {
        let response = await fetch('https://65394a70e3b530c8d9e83a93.mockapi.io/api/v1/cards')
        return await response.json()
    }
}