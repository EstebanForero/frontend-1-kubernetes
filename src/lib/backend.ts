
const axios = require('axios').default;

const backendUrl = "http://localhost:8080"

const ax = axios.create({
  baseUrl: backendUrl,
  timeout: 1000,
})

export function addProduct(productName: string) {
  ax.
}
