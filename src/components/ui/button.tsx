import { Link } from 'react-router-dom';

interface ButtonProps {
  variant: string;
  label: string;
  to: string;
  className?: string;
  symbol?: any;
}

const Button: React.FC<ButtonProps> = ({ variant, label, symbol, to, className = '' }) => {
  if (variant === 'link') {
    return (
      <Link to={to} className={`text-sm font-semibold leading-6 text-rose-600 ${className}`}>
        {label} {symbol && symbol}
      </Link>
    );
  }
  return <></>;
};

export default Button;
