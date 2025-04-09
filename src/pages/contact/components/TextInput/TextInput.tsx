import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  name: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: string;
  disabled: boolean;
}

const TextInput = ({ name, type, register, error, disabled }: Props) => {
  return (
    <div className="w-full max-w-[calc(100%-240px)]">
      <input id={name} type={type} {...register} disabled={disabled} className="w-full px-4 py-5 border border-gray-300 rounded-md min-h-50 box-border" />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default TextInput;
