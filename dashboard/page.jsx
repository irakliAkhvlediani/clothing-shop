
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="">
        <h1 className='flex justify-center align-center mt-20 text-4xl font-bold font-serif'>Choose Item</h1>
    <Menu as="div" className=" flex justify-center align-center mt-14">
        <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-44 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Brands
            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
        </div>

        <MenuItems
            transition
            className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
            <div className="py-1">
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Adidas
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Nike
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Mango
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Lacoste
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Levis
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Polo
                </a>
            </MenuItem>
            <form action="#" method="POST">
                <MenuItem>
                <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                    Puma
                </button>
                </MenuItem>
            </form>
            </div>
        </MenuItems>
    </Menu>
    <Menu as="div" className=" flex justify-center align-center mt-14">
        <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-44 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Category
            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
        </div>

        <MenuItems
            transition
            className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
            <div className="py-1">
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                T-shirt
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Shirt
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                 Jacket
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Sweater
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Pants
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Shorts
                </a>
            </MenuItem>
            <form action="#" method="POST">
                <MenuItem>
                <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                    Coat
                </button>
                </MenuItem>
            </form>
            </div>
        </MenuItems>
    </Menu>
    <Menu as="div" className=" flex justify-center align-center mt-14">
        <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-44 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Gender
            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
        </div>

        <MenuItems
            transition
            className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
            <div className="py-1">
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                 Men
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Women
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                 Children
                </a>
            </MenuItem>
            <form action="#" method="POST">
            </form>
            </div>
        </MenuItems>
        </Menu>
    <Menu as="div" className=" flex justify-center align-center mt-14">
        <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-44 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Prising
            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
        </div>

        <MenuItems
            transition
            className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
            <div className="py-1">
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                 Min - Max
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                Max - Min
                </a>
            </MenuItem>
            <form action="#" method="POST">
            </form>
            </div>
        </MenuItems>
        </Menu>
        <Menu as="div" className=" flex justify-center align-center mt-14">
        <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-44 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            S I Z E
            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
        </div>

        <MenuItems
            transition
            className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
            <div className="py-1">
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                S
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                M
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                L
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                XL
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                2XL
                </a>
            </MenuItem>
            <form action="#" method="POST">
                <MenuItem>
                <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                    XS
                </button>
                </MenuItem>
            </form>
            </div>
        </MenuItems>
    </Menu>
    <Menu as="div" className=" flex justify-center align-center mt-48">
        <div>
            <MenuButton className="bg-slate-500 inline-flex w-full justify-center gap-x-1.5 rounded-md  px-44 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
            F I L T E R
            </MenuButton>
        </div>
    </Menu>
</div>
  )
}
