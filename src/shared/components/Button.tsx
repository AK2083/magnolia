import type { JSX } from 'react';
import './Button.css';

export type ButtonData = {
  title?: string;
  type: 'button' | 'submit' | 'reset';
  icon?: JSX.Element;
  screenreaderText: string;
};

interface ButtonProps extends ButtonData {
  onClickCallback: () => void;
}

export default function Button({
  title,
  type,
  icon,
  screenreaderText,
  onClickCallback,
}: ButtonProps) {
  return (
    <>
      <button
        type={type}
        className={icon && title ? "icon-text-button" : "icon-button"}
        onClick={onClickCallback}
      >
        {icon}
        <span className="absolute -inset-1.5" />
        <span className="sr-only">{screenreaderText}</span>
        {title && <span className="px-1">{title}</span>}        
      </button>
    </>
  );
}
