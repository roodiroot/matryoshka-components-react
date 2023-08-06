import { Bars3Icon, RocketLaunchIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Logo from './components/logo';
import { Link } from 'react-router-dom';
import img from './assets/main.jpg';
import Button from './components/ui/button';

const Root = () => {
  return (
    <>
      <div
        className="absolute inset-x-0 top-4 -z-10 flex justify-center overflow-hidden  blur-3xl"
        aria-hidden="true">
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-lime-400 to-rose-600 opacity-25"
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
                blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel.
                Mauris varius vulputate et ultrices hac adipiscing egestas.
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
                blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel.
                Mauris varius vulputate et ultrices hac adipiscing egestas.
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
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
            suscipit eaque, iste dolor cupiditate blanditiis.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8">
          <div className="relative pl-9">
            <RocketLaunchIcon className="absolute top-1 left-1 h-5 w-5 text-rose-600" />
            <dt className="inline font-semibold text-white">Be world-class.</dt>
            <dd className="inline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.
            </dd>
          </div>
          <div className="relative pl-9">
            <RocketLaunchIcon className="absolute top-1 left-1 h-5 w-5 text-rose-600" />
            <dt className="inline font-semibold text-white">Be world-class.</dt>
            <dd className="inline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.
            </dd>
          </div>
          <div className="relative pl-9">
            <RocketLaunchIcon className="absolute top-1 left-1 h-5 w-5 text-rose-600" />
            <dt className="inline font-semibold text-white">Be world-class.</dt>
            <dd className="inline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.
            </dd>
          </div>
          <div className="relative pl-9">
            <RocketLaunchIcon className="absolute top-1 left-1 h-5 w-5 text-rose-600" />
            <dt className="inline font-semibold text-white">Be world-class.</dt>
            <dd className="inline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.
            </dd>
          </div>
          <div className="relative pl-9">
            <RocketLaunchIcon className="absolute top-1 left-1 h-5 w-5 text-rose-600" />
            <dt className="inline font-semibold text-white">Be world-class.</dt>
            <dd className="inline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.
            </dd>
          </div>
          <div className="relative pl-9">
            <RocketLaunchIcon className="absolute top-1 left-1 h-5 w-5 text-rose-600" />
            <dt className="inline font-semibold text-white">Be world-class.</dt>
            <dd className="inline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.
            </dd>
          </div>
        </dl>
      </div>
      <div className="relative isolate -z-10 mt-32 sm:mt-40">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt=""
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-[1/1] lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold  tracking-tight text-white sm:text-4xl ">
                Join our team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
                cupiditate veritatis in accusamus quisquam.
              </p>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 leading-7 text-white sm:grid-cols-2">
                <li className="flex gap-3 ">
                  <CheckCircleIcon className="flex-none w-5 h-7" />
                  Competitive salaries
                </li>
                <li className="flex gap-3 ">
                  <CheckCircleIcon className="flex-none w-5 h-7" />
                  Competitive salaries
                </li>
                <li className="flex gap-3 ">
                  <CheckCircleIcon className="flex-none w-5 h-7" />
                  Competitive salaries
                </li>
                <li className="flex gap-3 ">
                  <CheckCircleIcon className="flex-none w-5 h-7" />
                  Competitive salaries
                </li>
                <li className="flex gap-3 ">
                  <CheckCircleIcon className="flex-none w-5 h-7" />
                  Competitive salaries
                </li>
                <li className="flex gap-3 ">
                  <CheckCircleIcon className="flex-none w-5 h-7" />
                  Competitive salaries
                </li>
              </ul>
              <div className="mt-10 flex">
                <Button
                  symbol={<span aria-hidden="true">→</span>}
                  label="See our job postings"
                  variant="link "
                  to="/"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-4 -z-10 flex justify-center overflow-hidden  blur-3xl">
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-lime-400 to-rose-600 opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}></div>
        </div>
      </div>
    </>
  );
};

export default Root;
