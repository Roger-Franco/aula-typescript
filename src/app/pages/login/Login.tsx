import { useCallback, useContext, useMemo, useRef, useState } from 'react'
import { UsuarioLogadoContext } from '../../shared/contexts'
import { ButtonLogin } from './components/ButtonLogin'
import { InputLogin } from './components/InputLogin'
// import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null)

  const usuarioLogadoContext = useContext(UsuarioLogadoContext)

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const emailLength = useMemo(() => {
    console.log('executou');

    return email.length * 100;
  }, [email.length])

  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/pagina-inicial')
  // }
  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(senha);

    if (inputPasswordRef.current !== null) {
      inputPasswordRef.current.focus()
    }

  }, [email, senha]) // com o useCallback, as funcões dentro dela não são reconstruídas até que as dependencias serem chamadas;
  // const handleEntrar = () => {
  //   console.log(email);
  //   console.log(senha);
  // }
  return (
    <div>
      <form action="">
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <p>{usuarioLogadoContext.nomeDoUsuario}</p>

        <InputLogin
          label='Email'
          value={email}
          onChange={newValue => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        <InputLogin
          type='password'
          label='Senha'
          value={senha}
          ref={inputPasswordRef}
          onChange={newValue => setSenha(newValue)}
        />
        {/* <label htmlFor="">
          <span>Email:</span>
          <input 
          onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined} 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          />
        </label> */}
        {/* <label htmlFor="">
          <span>Senha:</span>
          <input
            ref={inputPasswordRef}
            value={senha}
            onChange={(e) => setSenha(e.target.value)} 
            type="password"
          /> */}
        {/* </label> */}
        <ButtonLogin onClick={handleEntrar} type='button'>Entrar</ButtonLogin>
        <ButtonLogin onClick={handleEntrar} type='button'>Cadastrar</ButtonLogin>
        {/* <button onClick={handleEntrar} type='button'>Entrar</button> */}
      </form>
    </div >
  )
}