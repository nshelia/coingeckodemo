import coinGeckoClient from './clients/coinGeckoClient'

export default class Coingecko {
  async checkServerStatus() {
    return coinGeckoClient.get(`/ping`, {}, {})
  }

  async fetchCoins({ order, perPage }) {
    return coinGeckoClient.get(
      `/coins/markets`,
      {
        order,
        per_page: perPage,
        vs_currency: 'eur',
      },
      {},
    )
  }
}
