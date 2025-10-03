import right from "../assets/icons/Rarrow.svg";
import left from "../assets/icons/Larrow.svg";

interface ButtonProps {
    type: "button" | "submit";
    text?: "Prosseguir" | "Voltar" | "Sair";
    className: "buttonForm" | "buttonBackForm";
    iconPosition: "left" | "right";
    navigate?: () => void
}
const Button = ({navigate, type, text, className,  iconPosition}: ButtonProps) => {
  return (
    <button
        onClick={navigate}
        type={type}
        className={className}
      >
        {/* Ícone à esquerda */}
        { iconPosition === "left" && <img src={left} alt="icon" className="w-4 h-4" />}
      
        { iconPosition === "left" ? <p className="md:block hidden ">{text}</p>  : text}
      
        {/* Ícone à direita */}
        { iconPosition === "right" && <img src={right} alt="icon" className="w-4 h-4" />}
    </button>
  )
}

export default Button
