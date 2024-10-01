type ButtonIconProps = {
  icon: JSX.Element;
  type?: "submit" | "button";
  id?: string;
  classNames?: string;
  onClick?: () => void;
};

function ButtonIcon({ icon, type = "button", id, classNames, onClick }: ButtonIconProps) {
  return (
    <button
      type={type}
      className={`button-icon ${classNames ? classNames : ""}`}
      id={id}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
