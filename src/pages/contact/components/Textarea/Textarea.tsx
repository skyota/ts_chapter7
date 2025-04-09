import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegisterReturn;
  error?: string;
  disabled: boolean;
}

const Textarea = ({ name, register, error, disabled }: Props) => {
  return (
    <div className="w-full max-w-[calc(100%-240px)]">
      <textarea id={name} {...register} disabled={disabled} className="w-full px-4 py-5 border border-gray-300 rounded-md min-h-50 leading-relaxed box-border" />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default Textarea;
