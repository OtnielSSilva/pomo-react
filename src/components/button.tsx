interface Props {
  text: string;
  onClick: () => void;
  classeName: string;
}

export function Button(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.classeName}>
      {props.text}
    </button>
  );
}
