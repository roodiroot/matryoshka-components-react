import {
  Bars3Icon,
  RocketLaunchIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import Logo from "./components/logo";
import { Link } from "react-router-dom";
import img from "./assets/main.jpg";

const App = () => {
  return (
    <div className='w-full bg-gray-900'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
          <div className='flex flex-1'>
            <Logo size={150} fill='#ffffff' />
          </div>
          <div className='lg:hidden flex'>
            <button className='-m-3 p-3 inline-flex items-center justify-center rounded-md text-gray-400'>
              <Bars3Icon className='w-6 h-6' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            <Link to='/' className='text-sm leading-6'>
              Студия
            </Link>
            <Link to='/' className='text-sm leading-6'>
              Компания
            </Link>
            <Link to='/' className='text-sm leading-6'>
              Контакты
            </Link>
            <Link to='/' className='text-sm leading-6'>
              О нас
            </Link>
          </div>
          <div className='hidden lg:flex lg:flex-1 justify-end'>
            8 800 555 35-35
          </div>
        </nav>
      </header>
      <main className='relative isolate'>
        <div
          className='absolute inset-x-0 top-4 -z-10 flex justify-center overflow-hidden  blur-3xl'
          aria-hidden='true'
        >
          <div
            className='aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-lime-400 to-rose-600 opacity-25'
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          ></div>
        </div>
        <div className='px-6 pt-14 lg:px-8'>
          <div className='mx-auto max-w-2xl pt-24 text-center sm:pt-40'>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              Мы создаем сайты
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
        <div className='mx-auto mt-20 max-w-7xl px-6 sm:px-8 '>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='grid max-w-xl grid-cols-1 gap-4 leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2'>
              <div>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p className='mt-8'>
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas.
                </p>
              </div>
              <div>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p className='mt-8'>
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas.
                </p>
              </div>
            </div>
            <div className='mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4 '>
              <div className='flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6'>
                <dt className='leading-7 text-gray-300 '>
                  Business was founded
                </dt>
                <dd className='text-3xl font-semibold tracking-tight '>2012</dd>
              </div>
              <div className='flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6'>
                <dt className='leading-7 text-gray-300 '>
                  Business was founded
                </dt>
                <dd className='text-3xl font-semibold tracking-tight '>2012</dd>
              </div>
              <div className='flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6'>
                <dt className='leading-7 text-gray-300 '>
                  Business was founded
                </dt>
                <dd className='text-3xl font-semibold tracking-tight '>2012</dd>
              </div>
              <div className='flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6'>
                <dt className='leading-7 text-gray-300 '>
                  Business was founded
                </dt>
                <dd className='text-3xl font-semibold tracking-tight '>2012</dd>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
          <img
            className='aspect-[9/4] w-full object-cover xl:rounded-3xl'
            src={img}
          />
        </div>
        <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Our values
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis.
            </p>
          </div>
          <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8'>
            <div className='relative pl-9'>
              <RocketLaunchIcon className='absolute top-1 left-1 h-5 w-5 text-rose-600' />
              <dt className='inline font-semibold text-white'>
                Be world-class.
              </dt>
              <dd className='inline'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id
                magna.
              </dd>
            </div>
            <div className='relative pl-9'>
              <RocketLaunchIcon className='absolute top-1 left-1 h-5 w-5 text-rose-600' />
              <dt className='inline font-semibold text-white'>
                Be world-class.
              </dt>
              <dd className='inline'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id
                magna.
              </dd>
            </div>
            <div className='relative pl-9'>
              <RocketLaunchIcon className='absolute top-1 left-1 h-5 w-5 text-rose-600' />
              <dt className='inline font-semibold text-white'>
                Be world-class.
              </dt>
              <dd className='inline'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id
                magna.
              </dd>
            </div>
            <div className='relative pl-9'>
              <RocketLaunchIcon className='absolute top-1 left-1 h-5 w-5 text-rose-600' />
              <dt className='inline font-semibold text-white'>
                Be world-class.
              </dt>
              <dd className='inline'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id
                magna.
              </dd>
            </div>
            <div className='relative pl-9'>
              <RocketLaunchIcon className='absolute top-1 left-1 h-5 w-5 text-rose-600' />
              <dt className='inline font-semibold text-white'>
                Be world-class.
              </dt>
              <dd className='inline'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id
                magna.
              </dd>
            </div>
            <div className='relative pl-9'>
              <RocketLaunchIcon className='absolute top-1 left-1 h-5 w-5 text-rose-600' />
              <dt className='inline font-semibold text-white'>
                Be world-class.
              </dt>
              <dd className='inline'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id
                magna.
              </dd>
            </div>
          </dl>
        </div>
        <div className='relative isolate -z-10 mt-32 sm:mt-40'>
          <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 '>
            <div className='mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20'>
              <img
                src='https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
                alt=''
                className='h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-[1/1] lg:h-auto lg:max-w-sm'
              />
              <div className='w-full flex-auto'>
                <h2 className='text-3xl font-bold  tracking-tight text-white sm:text-4xl '>
                  Join our team
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-300'>
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
                <ul className='mt-10 grid grid-cols-1 gap-x-8 gap-y-3 leading-7 text-white sm:grid-cols-2'>
                  <li className='flex gap-3 '>
                    <CheckCircleIcon className='flex-none w-5 h-7' />
                    Competitive salaries
                  </li>
                  <li className='flex gap-3 '>
                    <CheckCircleIcon className='flex-none w-5 h-7' />
                    Competitive salaries
                  </li>
                  <li className='flex gap-3 '>
                    <CheckCircleIcon className='flex-none w-5 h-7' />
                    Competitive salaries
                  </li>
                  <li className='flex gap-3 '>
                    <CheckCircleIcon className='flex-none w-5 h-7' />
                    Competitive salaries
                  </li>
                  <li className='flex gap-3 '>
                    <CheckCircleIcon className='flex-none w-5 h-7' />
                    Competitive salaries
                  </li>
                  <li className='flex gap-3 '>
                    <CheckCircleIcon className='flex-none w-5 h-7' />
                    Competitive salaries
                  </li>
                </ul>
                <div className='mt-10 flex'>
                  <Link
                    to='/'
                    className='text-sm font-semibold leading-6 text-rose-600'
                  >
                    See our job postings <span aria-hidden='true'>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute inset-x-0 top-4 -z-10 flex justify-center overflow-hidden  blur-3xl'>
            <div
              className='aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-lime-400 to-rose-600 opacity-25'
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            ></div>
          </div>
        </div>
        <footer className='relative mt-32 sm:mt-40'>
          <h2 className='sr-only'>Footer</h2>
          <div className='mx-auto max-w-7xl px-6 pb-8 lg:px-8'>
            <div className='xl:grid xl:grid-cols-3 xl:gap-4'>
              <div className='space-y-8'>
                <Logo size={150} fill='#ffffff' />
                <div className='text-sm leading-6 text-gray-300 '>
                  Est error fuga modi error. Laborum eum nobis porro cupiditate
                  et quo.
                </div>
                <div className='flex space-x-6'>
                  <a href='' className='text-gray-500 '>
                    <span className='sr-only'>Facebook</span>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      className='w-6 h-6'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </a>
                  <a href='' className='text-gray-500 '>
                    <span className='sr-only'>Instagram</span>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      className='w-6 h-6'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </a>
                  <a href='' className='text-gray-500 '>
                    <span className='sr-only'>GitHub</span>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      className='w-6 h-6'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className='grid grid-cols-2 mt-16 gap-8 xl:col-span-2 xl:mt-0'>
                <div className='md:grid md:grid-cols-2 md:gap-8'>
                  <div>
                    <h3 className='text-sm font-semibold leading-6 text-white'>
                      Solutions
                    </h3>
                    <ul className='mt-6 space-y-4'>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='mt-10 md:mt-0'>
                    <h3 className='text-sm font-semibold leading-6 text-white'>
                      Solutions
                    </h3>
                    <ul className='mt-6 space-y-4'>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='md:grid md:grid-cols-2 md:gap-8'>
                  <div>
                    <h3 className='text-sm font-semibold leading-6 text-white'>
                      Solutions
                    </h3>
                    <ul className='mt-6 space-y-4'>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='mt-10 md:mt-0'>
                    <h3 className='text-sm font-semibold leading-6 text-white'>
                      Solutions
                    </h3>
                    <ul className='mt-6 space-y-4'>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href='' className='text-sm leading-6 text-gray-300'>
                          Marketing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
              <p className='text-xs leading-5 text-gray-400'>
                © 2023 Your Company, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
