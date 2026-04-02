import axios from 'axios'

const apiBase = import.meta.env.VITE_API_URL
const host = typeof window !== 'undefined' ? window.location.hostname : ''
let resolvedBase

if (apiBase) {
  resolvedBase = apiBase.endsWith('/api') ? apiBase : `${apiBase.replace(/\/+$/, '')}/api`
} else if (host.endsWith('vercel.app')) {
  // For Vercel deployment, use the backend URL
  resolvedBase = 'https://task-manager-backend-mern.vercel.app/api'
} else if (host.endsWith('onrender.com')) {
  resolvedBase = 'https://task-manager-backend-mern.vercel.app/api'
} else {
  resolvedBase = '/api'
}

const api = axios.create({
  baseURL: resolvedBase,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add request interceptor to include token
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Add response interceptor for error handling
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401 || error.response?.status === 422) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
