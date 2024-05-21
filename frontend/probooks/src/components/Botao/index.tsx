import React from 'react';
import style from './Botao.module.scss';

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  children?: React.ReactNode
  id?:string;
}

function Botao({ onClick, id, type, children }: Props) {
  return (
    <button
      onClick={onClick} 
      type={type}
      className={ id==="voltar" ? style.voltar : style.botao}
    >
      {children}
    </button>
  )
}

export default Botao;