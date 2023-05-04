type Props = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string;
  size?: string;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  disabled,
}) => {
  return (
    <button className="bg-amber-900 w-full max-w-[480px] my-4 h-11 text-white shadow-md  hover:bg-white hover:text-amber-900 hover:font-bold hover:border-2 border-amber-900">
      {children}
    </button>
  );
};

export default Button;
