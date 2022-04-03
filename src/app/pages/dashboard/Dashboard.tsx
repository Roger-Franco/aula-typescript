import { useCallback, useState } from 'react'

export const Dashboard = () => {
  const [lista, setLista] = useState<string[]>(['lista1', 'lista2'])
  const [nome, setNome] = useState<string[]>(['lista1', 'lista2', 'qualquer', 'teste'])

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.trim().length === 0) return;

      // setLista([...lista, e.currentTarget.value]) // ou mais correto - nesse caso precisa 
      // do lista em dependencias no useEffect
      const value = e.currentTarget.value

      e.currentTarget.value = ''

      setLista((oldlista) => {

        if (oldlista.includes(value)) return oldlista;

        return [...oldlista, value]
      })
    }
  }, [])

  return (
    <div>
      <p>Lista</p>
      <input onKeyDown={handleInputKeyDown} />
      <ul>
        {lista.map((value) => {
          return <li key={value}>{value}</li>
        })}
      </ul>
    </div>
  )
}