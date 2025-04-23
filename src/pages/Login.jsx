import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const loginUser = async (data) => {
    console.log("Form Values:", data)
    setLoading(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BACKEND_URL}/api/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      
      const result = await response.json()
      console.log("API Response:", result)

      if (result.accessToken) {
        localStorage.setItem("accessToken", result.accessToken)
        localStorage.setItem("userId", result.data.userId)
        toast.success("Login successful!")
        setTimeout(() => {
          // window.location.href = "/loanRequest" // Using window.location instead of navigate for Next.js
        }, 2000)
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error(error.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex min-h-screen items-center pt-10 md:pt-0 justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full max-w-md rounded-lg border border-purple-200 bg-white shadow-lg">
        <div className="space-y-1 p-6 text-center">
          <h2 className="text-3xl font-bold text-purple-800">Login</h2>
          <p className="text-purple-600">Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit(loginUser)} className="space-y-4 p-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-purple-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-md border border-purple-200 px-3 py-2 placeholder-gray-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-600">Email is required</span>}
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-purple-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-md border border-purple-200 px-3 py-2 pr-10 placeholder-gray-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50"
                {...register("password", { required: true })}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-700"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <span className="text-sm text-red-600">Password is required</span>}
          </div>
          <div className="flex flex-col space-y-4 pt-4">
            <button
              type="submit"
              className="w-full rounded-md bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 font-medium text-white hover:from-purple-700 hover:to-pink-700 disabled:opacity-70"
              disabled={loading}
            >
              {loading ? (
                <span className="flex justify-center space-x-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-white"></span>
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-white"
                    style={{ animationDelay: "0.2s" }}
                  ></span>
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-white"
                    style={{ animationDelay: "0.4s" }}
                  ></span>
                </span>
              ) : (
                "Login"
              )}
            </button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="font-medium text-purple-600 hover:text-pink-600">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
