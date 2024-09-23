type ButtonIconProps = {
  icon: JSX.Element;
  id?: string;
  classNames?: string;
  onClick?: () => void;
};

function ButtonIcon({ icon, id, classNames, onClick }: ButtonIconProps) {
  return (
    <button
      type="button"
      className={`button-icon ${classNames}`}
      id={id}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
