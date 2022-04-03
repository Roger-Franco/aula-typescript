import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
// import { UsuarioLogadoContext } from '../../shared/contexts'
import { useUsuarioLogado } from '../../shared/hooks'

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 })

  const { nomeDoUsuario, logOut } = useUsuarioLogado()
  // Usando aqui um react hook customizado 

  // const usuarioLogadoContext = useContext(UsuarioLogadoContext)

  return (
    <>
      <h1>Dashboard</h1>
      <p>{nomeDoUsuario}</p>
      <p>Contador: {counterRef.current.counter}</p>

      <button onClick={() => counterRef.current.counter++}>Somar</button>
      <button onClick={() => console.log(counterRef.current.counter)}>Somar</button>
      <button onClick={logOut}>logOut</button>
      <Link to="/entrar" >Login</Link>
    </>
  )
}