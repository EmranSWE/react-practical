"use client";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
// import { cn } from "@/lib/utils";
// import { useAuth } from "@clerk/nextjs";
// import { Montserrat } from "next/font/google";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import Cart from "../home/cart";
// import { HiOutlineSearch } from "react-icons/hi";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// const font = Montserrat({ weight: "600", subsets: ["latin"] });

// export const LandingNavbar = () => {
//   const { isSignedIn } = useAuth();

//   return (
    
//     <nav className="w-full mt-5 block ">
//       <div className="h-full  w-full bg-white/60">
//         <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
//           <div>
//             <h1 className={cn("text-2xl font-bold text-black", font.className)}>
//               E-Shop BD
//             </h1>
//           </div>
//           <div>
//             <ul className="flex items-center">
//               <li>
//                 <Button variant="link" asChild>
//                   <Link href="/">Home</Link>
//                 </Button>
//               </li>
//               <li>
//                 <Button variant="link" asChild>
//                   <Link href="/products">Products</Link>
//                 </Button>
//               </li>
//               <li>
//                 <Button variant="link" asChild>
//                   <Link href="/checkout">Checkout</Link>
//                 </Button>
//               </li>
//               <li>
//                 <Button variant="ghost">
//                   <HiOutlineSearch size="25" />
//                 </Button>
//               </li>
//               <li>
//                 <Cart />
//               </li>
//               <li className="ml-5">
//                 <DropdownMenu>
//                   <DropdownMenuTrigger className="outline-none">
//                     <Avatar>
//                       <AvatarImage src="https://github.com/shadcn.png" />
//                       <AvatarFallback>BD</AvatarFallback>
//                     </Avatar>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     <DropdownMenuLabel>Account</DropdownMenuLabel>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem className="cursor-pointer">
//                       Profile
//                     </DropdownMenuItem>
//                     <DropdownMenuItem className="cursor-pointer">
//                       Billing
//                     </DropdownMenuItem>
//                     {/* {!user.email && (
//                       <>
//                         <Link to="login">
//                           <DropdownMenuItem className="cursor-pointer">
//                             Login
//                           </DropdownMenuItem>
//                         </Link>
//                         <Link to="Sign up">
//                           <DropdownMenuItem className="cursor-pointer">
//                             Sign Up
//                           </DropdownMenuItem>
//                         </Link>
//                       </>
//                     )}
//                     {user.email && (
//                       <>
//                         <Link to="logout">
//                           <DropdownMenuItem
//                             onClick={handleLogOut}
//                             className="cursor-pointer"
//                           >
//                             Log Out
//                           </DropdownMenuItem>
//                         </Link>
//                       </>
//                     )} */}
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };


import { useState } from "react"; // Import useState hook
import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi"; // Import hamburger menu icon
import { Button } from "../ui/button";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Cart from "@/app/(landing)/(home)/cart/page";
import { Montserrat } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const font = Montserrat({ weight: "600", subsets: ["latin"] });
export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="w-full mt-5 block">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={cn("text-2xl font-bold text-black", font.className)}>
              E-Shop BD
            </h1>
          </div>
          {/* Hamburger menu for small devices */}
          <div className="md:hidden">
            <button
              className="p-2 focus:outline-none"
              onClick={toggleMenu}
            >
              <HiOutlineMenu size="25" />
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link href="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link href="/products">Products</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost">
                  <HiOutlineSearch size="25" />
                </Button>
              </li>
              <li>
                <Cart />
              </li>
              <li className="ml-5">
              <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                     <Avatar>
                       <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>BD</AvatarFallback>
                     </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                   <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                       Profile
                     </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Billing
                    </DropdownMenuItem>
                     {/* {!user.email && (
//                       <>
//                         <Link to="login">
//                           <DropdownMenuItem className="cursor-pointer">
//                             Login
//                           </DropdownMenuItem>
//                         </Link>
//                         <Link to="Sign up">
//                           <DropdownMenuItem className="cursor-pointer">
//                             Sign Up
//                           </DropdownMenuItem>
//                         </Link>
//                       </>
//                     )}
//                     {user.email && (
//                       <>
//                         <Link to="logout">
//                           <DropdownMenuItem
//                             onClick={handleLogOut}
//                             className="cursor-pointer"
//                           >
//                             Log Out
//                           </DropdownMenuItem>
//                         </Link>
//                       </>
//                     )} */}
                 </DropdownMenuContent>
            </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={isMenuOpen ? "block" : "hidden md:hidden"}>
        <ul className="flex flex-col items-center">
          <li>
            <Button variant="link" asChild>
              <Link href="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/products">Products</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/checkout">Checkout</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <HiOutlineSearch size="25" />
            </Button>
          </li>
          <li>
            <Cart />
          </li>
          <li className="ml-5">
            <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                     <Avatar>
                       <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>BD</AvatarFallback>
                     </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                   <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                       Profile
                     </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Billing
                    </DropdownMenuItem>
                     {/* {!user.email && (
//                       <>
//                         <Link to="login">
//                           <DropdownMenuItem className="cursor-pointer">
//                             Login
//                           </DropdownMenuItem>
//                         </Link>
//                         <Link to="Sign up">
//                           <DropdownMenuItem className="cursor-pointer">
//                             Sign Up
//                           </DropdownMenuItem>
//                         </Link>
//                       </>
//                     )}
//                     {user.email && (
//                       <>
//                         <Link to="logout">
//                           <DropdownMenuItem
//                             onClick={handleLogOut}
//                             className="cursor-pointer"
//                           >
//                             Log Out
//                           </DropdownMenuItem>
//                         </Link>
//                       </>
//                     )} */}
                 </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </nav>
  );
};