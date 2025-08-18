import type { Axios } from "axios";

const axios = require('axios').default;

const backendUrl = "http://localhost:8080"

const ax: Axios = axios.create({
  baseUrl: backendUrl,
  timeout: 1000,
})

export function addProduct(productName: string) {
  ax.post('/product', {
    name: productName
  })
}

export type Product = {
  name: string,
  id: string
}

export async function getProducts() {
  const response = await ax.get<Product[]>('/product')

  return response
}
