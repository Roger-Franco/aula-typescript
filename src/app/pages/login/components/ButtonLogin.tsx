
interface IbuttonLoginProps {
  type?: "button" | "submit" | "reset"
  onClick: () => void
}

export const ButtonLogin: React.FC<IbuttonLoginProps> = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}