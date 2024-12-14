import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  function (config: any) {
    const user = localStorage.getItem("user-token")
    
    if (user) {
      const data = JSON.parse(user)      
      config.headers.Authorization = `Bearer ${data.token}`
    }

    return config
  },

  function (error: any) {
    return Promise.reject(error)
  }
)

export default axiosInstance
