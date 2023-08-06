import { Outlet } from 'react-router-dom';
import Footer from './components/ui/footer';
import Header from './components/ui/header';

const Lauout = () => {
  return (
    <div className="flex-1 w-full bg-gray-900 flex flex-col">
      <Header />
      <main className="relative isolate flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Lauout;
