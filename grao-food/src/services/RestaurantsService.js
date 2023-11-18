import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3333"
})

export class RestaurantsService {
  getAll(){
    return axiosInstance.get("/restaurants")
  }
}