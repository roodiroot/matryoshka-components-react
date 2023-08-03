import { Bars3Icon } from '@heroicons/react/24/solid';
import Logo from './components/logo';
import { Link } from 'react-router-dom';
import img from './assets/main.jpg';

const App = () => {
  return (
    <div className="w-full bg-gray-900">
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
              Студия
            </Link>
            <Link to="/" className="text-sm leading-6">
              Компания
            </Link>
            <Link to="/" className="text-sm leading-6">
              Контакты
            </Link>
            <Link to="/" className="text-sm leading-6">
              О нас
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 justify-end">8 800 555 35-35</div>
        </nav>
      </header>
      <main className="relative isolate">
        <div
          className="absolute inset-x-0 top-4 -z-10 flex justify-center overflow-hidden  blur-3xl"
          aria-hidden="true">
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-purple-500 to-pink-500 opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}></div>
        </div>
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Мы создаем сайты</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-7xl px-6 sm:px-8 ">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-4 leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
                  penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                  vitae sed turpis id.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                  blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in
                  vel. Mauris varius vulputate et ultrices hac adipiscing egestas.
                </p>
              </div>
              <div>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
                  penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                  vitae sed turpis id.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                  blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in
                  vel. Mauris varius vulputate et ultrices hac adipiscing egestas.
                </p>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4 ">
              <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                <dt className="leading-7 text-gray-300 ">Business was founded</dt>
                <dd className="text-3xl font-semibold tracking-tight ">2012</dd>
              </div>
              <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                <dt className="leading-7 text-gray-300 ">Business was founded</dt>
                <dd className="text-3xl font-semibold tracking-tight ">2012</dd>
              </div>
              <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                <dt className="leading-7 text-gray-300 ">Business was founded</dt>
                <dd className="text-3xl font-semibold tracking-tight ">2012</dd>
              </div>
              <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                <dt className="leading-7 text-gray-300 ">Business was founded</dt>
                <dd className="text-3xl font-semibold tracking-tight ">2012</dd>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img className="aspect-[9/4] w-full object-cover xl:rounded-3xl" src={img} />
        </div>
      </main>
    </div>
  );
};

export default App;
