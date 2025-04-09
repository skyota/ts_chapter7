type Props = {
  name: string;
  label: string;
}

const Label = ({ name, label }: Props) => {
  return <label htmlFor={name} className="w-60">{label}</label>
};

export default Label;
