import { Link } from 'react-router-dom';
import Logo from '../logo';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex flex-1">
          <Logo size={150} fill="#ffffff" />
        </div>
        <div className="lg:hidden flex">
          <button className="-m-3 p-3 inline-flex items-center justify-center rounded-md text-gray-400">
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm leading-6">
            Главная
          </Link>
          <Link to="/services" className="text-sm leading-6">
            Услуги
          </Link>
          <Link to="/blogs" className="text-sm leading-6">
            Блог
          </Link>
          <Link to="/" className="text-sm leading-6">
            Контакты
          </Link>
          <Link to="/drop" className="text-sm leading-6">
            О нас
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 justify-end">8 800 555 35-35</div>
      </nav>
    </header>
  );
};

export default Header;
