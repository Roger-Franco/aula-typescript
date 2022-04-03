import { useContext } from 'react'
import { UsuarioLogadoContext } from '../../../shared/contexts'

interface IbuttonLoginProps {
  type?: "button" | "submit" | "reset"
  onClick: () => void
}

export const ButtonLogin: React.FC<IbuttonLoginProps> = ({ type, onClick, children }) => {

  const usuarioLogadoContext = useContext(UsuarioLogadoContext)
  // const {nomeDoUsuario} = useContext(UsuarioLogadoContext) // dessa forma eu diminuo codigo, desestruturando.

  return (
    <button type={type} onClick={onClick}>
      {usuarioLogadoContext.nomeDoUsuario} {children}
    </button>
  )
}