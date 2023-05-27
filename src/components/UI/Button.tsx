type Props = {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  variant?: string;
  form?: string;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  type,
  variant = 'default',
  disabled,
  form,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      form={form}
      className="bg-amber-900 w-full max-w-[480px] my-4 h-11 text-white shadow-md  hover:bg-white hover:text-amber-900 hover:font-bold hover:border-2 border-amber-900"
    >
      {children}
    </button>
  );
};

export default Button;
