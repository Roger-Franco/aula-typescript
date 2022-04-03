import { createContext, useCallback, useEffect, useState } from 'react';


interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logOut: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({ children }) => {
  const [nome, setNome] = useState('Roger')

  useEffect(() => {
    setTimeout(() => {
      console.log(nome, 'first');
      setNome('Roger Frank')
      console.log(nome);
    }, 3000)
  })

  const handleLogOut = useCallback(() => {
    console.log('logOut executou');

  }, [])

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logOut: handleLogOut }}>
      {children}
    </UsuarioLogadoContext.Provider>
  )
}