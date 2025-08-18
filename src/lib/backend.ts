import type { Axios } from "axios";

import axios from "axios";

//  const backendUrl = "http://localhost:8080"
const backendUrl = "VITE_BACKEND_URL"

const ax: Axios = axios.create({
  baseURL: backendUrl,
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
