import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3333/restaurants"
})

export class ProductsService {
  getAll(id){
    return axiosInstance.get(`/${id}/products`)
  }
}