import { useCallback, useState } from 'react'

interface Itarefa {
  id: number
  title: string;
  isCompleted: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<Itarefa[]>([])

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value

      e.currentTarget.value = ''

      setLista((oldlista) => {

        if (oldlista.some((listItem) => listItem.title === value)) return oldlista;

        return [
          ...oldlista,
          {
            id: oldlista.length,
            title: value,
            isCompleted: false,
          }
        ];
      })
    }
  }, [])

  return (
    <div>
      <p>Lista</p>
      <input onKeyDown={handleInputKeyDown} />
      <p>{lista.filter((listeItem) => listeItem.isCompleted).length}</p>
      <ul>
        {lista.map((listItem) => {
          return (
            <li key={listItem.id}>
              <input
                type="checkbox"
                checked={listItem.isCompleted}
                onChange={() => {
                  setLista(oldLista => {
                    return oldLista.map(oldListItem => {
                      const newIsCompleted = oldListItem.title === listItem.title
                        ? !oldListItem.isCompleted
                        : oldListItem.isCompleted
                      return {
                        ...oldListItem,
                        isCompleted: newIsCompleted
                      }
                    })
                  })
                }}
              />
              {listItem.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}