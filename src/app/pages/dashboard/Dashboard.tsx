import { useCallback, useState } from 'react'

interface IListeItem {
  title: string;
  isSelected: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<IListeItem[]>([])

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
            title: value,
            isSelected: false,
          }
        ];
      })
    }
  }, [])

  return (
    <div>
      <p>Lista</p>
      <input onKeyDown={handleInputKeyDown} />
      <p>{lista.filter((listeItem) => listeItem.isSelected).length}</p>
      <ul>
        {lista.map((listItem) => {
          return (
            <li key={listItem.title}>
              <input
                type="checkbox"
                checked={listItem.isSelected}
                onChange={() => {
                  setLista(oldLista => {
                    return oldLista.map(oldListItem => {
                      const newIsSelected = oldListItem.title === listItem.title
                        ? !oldListItem.isSelected
                        : oldListItem.isSelected
                      return {
                        ...oldListItem,
                        isSelected: newIsSelected
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