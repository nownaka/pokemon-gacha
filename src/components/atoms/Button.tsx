type Button = {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = (props: Button) => {
  return <button onClick={props.onClick}>{props.name}</button>;
};

export default Button;
