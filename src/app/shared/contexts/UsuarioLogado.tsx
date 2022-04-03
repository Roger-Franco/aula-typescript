import { createContext, useCallback } from 'react';


interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logOut: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({ children }) => {

  const handleLogOut = useCallback(() => {
    console.log('logOut executou');

  }, [])

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Roger Frank', logOut: handleLogOut }}>
      {children}
    </UsuarioLogadoContext.Provider>
  )
}