import axiosInstance from "@/api/axiosInstance"

export interface Login {
  email : string
  password : string
}

export interface Register {
  name : string
  surname: string
  email    : string
  password : string
  dob: string
}

export function login(user: Login) {
  try {
    const response = axiosInstance.post("/login", user)
    return response
  } catch (error) {
    throw error
  }
}

export function loginGoogle() {
  try {
    const response = axiosInstance.get("/login/google")
    return response
  } catch (error) {
    throw error
  }
}

export function loginGithub() {
  try {
    const response = axiosInstance.get("/login/github")
    return response
  } catch (error) {
    throw error
  }
}

export function register(user: Register) {
  try {
    const response = axiosInstance.post("user/register", user)
    return response
  } catch (error) {
    throw error
  }
}