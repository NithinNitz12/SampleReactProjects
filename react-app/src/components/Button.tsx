import React from "react";

interface buttonProps{
    children: string;
    color?: 'primary' | 'secondary' | 'danger' | 'info';
    onClick: () => void;
}

const Button = ({ children, onClick, color='primary' }: buttonProps) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children} </button>
  )
}

export default Button;