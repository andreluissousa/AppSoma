interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  isClear?: boolean;
}

function ButtonComponent({ text, onClick, disabled = false, isClear = false }: ButtonProps) {
  const btnClassName = isClear ? 'btn btn-secondary' : 'btn btn-primary';
  
  return (
    <div className="col-auto">
      <button
        type="button"
        className={btnClassName}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonComponent;
