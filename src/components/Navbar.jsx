import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "HOME", href: "#", current: true },
  { name: "MENU", href: "#", current: false },
  { name: "KIDS MENU", href: "#", current: false },
  { name: "ABOUT", href: "#", current: false },
  { name: "FRANCHISING", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="images/ranchers.jpg"
                className="h-14 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-50 hover:bg-yellow-500",
                      "rounded-md px-2 py-5 text-sm font-medium font-thunder" 
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

           
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

// import React from "react";

// const Navbar = () => {
//   return (
//    <div>
//   <nav classname="navbar navbar-expand-lg bg-black">
//     <div classname="container-fluid">
//       <a classname="navbar-brand" href="#">
//         <img src="images/ranchers.jpg" alt="Company Logo" width={150} height="auto" />
//       </a>
//       <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//         <span classname="navbar-toggler-icon">
//         </span></button>
//       <div classname="collapse navbar-collapse" id="navbarNavDropdown">
//         <ul classname="navbar-nav">
//           <li classname="nav-item">
//             <a classname="nav-link active text-white" aria-current="page" href="#">
//               HOME
//             </a>
//           </li>
//           <li classname="nav-item group relative">
//             <a classname="nav-link active text-white cursor-pointer" href="#" role="button">
//               MENU
//             </a>
//             <ul classname="dropdown-menu absolute left-0 hidden mt-2 bg-white text-gray-800 shadow-lg group-hover:block">
//               <li>
//                 <a classname="block px-4 py-2 hover:bg-gray-200" href="#">
//                   DEALS
//                 </a>
//               </li>
//               <li>
//                 <a classname="block px-4 py-2 hover:bg-gray-200" href="#">
//                   CHICKEN BURGERS
//                 </a>
//               </li>
//               <li>
//                 <a classname="block px-4 py-2 hover:bg-gray-200" href="#">
//                   BEEF BURGERS
//                 </a>
//               </li>
//               <li>
//                 <a classname="block px-4 py-2 hover:bg-gray-200" href="#">
//                   PIZZA
//                 </a>
//               </li>
//               <li>
//                 <a classname="block px-4 py-2 hover:bg-gray-200" href="#">
//                   FRIES
//                 </a>
//               </li>
//               <li>
//                 <a classname="block px-4 py-2 hover:bg-gray-200" href="#">
//                   DRINKS
//                 </a>
//               </li>
//               <li>
//                 <a classname="block px-4 py-2 hover:bg-gray-200" href="#">
//                   QUICK BITES
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <li classname="nav-item">
//             <a classname="nav-link active text-white" aria-current="page" href="#">
//               KIDS MENU
//             </a>
//           </li>
//           <li classname="nav-item">
//             <a classname="nav-link active text-white" aria-current="page" href="#">
//               ABOUT{'{'}" "{'}'}
//             </a>
//           </li>
//           <li classname="nav-item">
//             <a classname="nav-link active text-white" aria-current="page" href="#">
//               FRANCHISING{'{'}" "{'}'}
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <button classname="btn btn-warning " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Rs 0</button>
//         <div classname="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="{-1}" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
//           <div classname="offcanvas-header">
//             <h5 classname="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
//             <button type="button" classname="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
//             </button></div>
//         </div>
//       </div>
//     </div>
//   </nav>
// </div>

//   );
// };

// export default Navbar;
