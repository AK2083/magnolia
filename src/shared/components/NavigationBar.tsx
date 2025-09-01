import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  Cog8ToothIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Button, { type ButtonData } from './Button';
import Drawer from './Drawer';
import { useState } from 'react';

const navigation = [{ name: 'Dashboard', href: '#', current: true }];

function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ');
}

const data: ButtonData = {
  type: 'button',
  icon: <Cog8ToothIcon aria-hidden="true" className="size-5" />,
  screenreaderText: 'View notifications',
};

export default function NavigationBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="w-full border-b border-white/10 bg-gray-900"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex shrink-0 items-center">
                  <span className="text-3xl text-slate-800 dark:text-slate-100">
                    Magn<span className="text-amber-300">o</span>lia
                  </span>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'border-indigo-500 text-white'
                          : 'border-transparent text-gray-400 hover:border-white/20 hover:text-gray-200',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Button
                  type={data.type}
                  icon={data.icon}
                  screenreaderText={data.screenreaderText}
                  onClickCallback={() => setIsDrawerOpen(true)}
                />

                <Drawer open={isDrawerOpen} onClose={setIsDrawerOpen}></Drawer>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'border-indigo-500 bg-indigo-600/10 text-indigo-300'
                      : 'border-transparent text-gray-400 hover:border-gray-500 hover:bg-white/5 hover:text-gray-200',
                    'block border-l-4 py-2 pr-4 pl-3 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-4">
                <Button
                  type={data.type}
                  title="Einstellungen"
                  icon={data.icon}
                  screenreaderText={data.screenreaderText}
                  onClickCallback={() => setIsDrawerOpen(true)}
                />
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  );
}
