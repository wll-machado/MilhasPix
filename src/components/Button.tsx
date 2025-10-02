import right from "../assets/icons/Rarrow.svg";
import left from "../assets/icons/Larrow.svg";

interface ButtonProps {
    type: "button" | "submit";
    text?: "Prosseguir" | "Voltar" | "Sair";
    className: "buttonForm" | "buttonBackForm";
    iconPosition: "left" | "right";
}
const Button = ({type, text, className,  iconPosition}: ButtonProps) => {
  return (
    <button
        type={type}
        className={className}
      >
        {/* Ícone à esquerda */}
        { iconPosition === "left" && <img src={left} alt="icon" className="w-4 h-4" />}
      
        {text}
      
        {/* Ícone à direita */}
        { iconPosition === "right" && <img src={right} alt="icon" className="w-4 h-4" />}
    </button>
  )
}

export default Button
