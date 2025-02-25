import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {

  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const onLogin = async () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    await login('Usuario')
    navigate(lastPath , { replace: true })
  }

  return (
    <div className="mx-20 my-14">
      <h1 className="text-3xl font-semibold mb-2">Login</h1>
      <hr />

      <button onClick={onLogin} className="cursor-pointer hover:bg-blue-700 bg-blue-500 px-4 py-2 mt-3 rounded text-white ">
        Login
      </button>

    </div>

  )
}
