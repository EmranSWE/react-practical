// "use client"
// import {
//   HiMinus,
//   HiOutlinePlus,
//   HiOutlineShoppingCart,
//   HiOutlineTrash,
// } from 'react-icons/hi';

// import { addToCart, removeFromCart, removeOne } from '@/app/redux/feature/cart/cartSlice';
// import { Button } from '@/components/ui/button';
// import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

// export default function CartPage() {
//   const { products, total } = useAppSelector((state) => state.cart);
//   const dispatch = useAppDispatch();
//   //! Dummy data

//   // const products: IProduct[] = [];
//   // const total = 0;

//   //! **

//   return (
//     <Sheet>
//       <SheetTrigger>
//         <Button variant="destructive">
//           <HiOutlineShoppingCart size="25" />
//         </Button>
//       </SheetTrigger>
//       <SheetContent className="overflow-auto relative">
//         <SheetHeader>
//           <SheetTitle>Cart</SheetTitle>
//           <h1>Total: {total.toFixed(2)}</h1>
//         </SheetHeader>
//         <div className="space-y-5">
//           {products.map((product) => (
//             <div
//               className="border h-44 p-5 flex justify-between rounded-md"
//               key={product.name}
//             >
//               <div className="border-r pr-5 shrink-0">
//                 <img src={product?.image} alt="" className="h-full" />
//               </div>
//               <div className="px-2 w-full flex flex-col gap-3">
//                 <h1 className="text-2xl self-center">{product?.name}</h1>
//                 <p>Quantity: {product.quantity}</p>
//                 <p className="text-xl">
//                   Total Price: {(product.price * product.quantity!).toFixed(2)}{' '}
//                   $
//                 </p>
//               </div>
//               <div className="border-l pl-5 flex flex-col justify-between">
//                 <Button onClick={() => dispatch(addToCart(product))}>
//                   <HiOutlinePlus size="20" />
//                 </Button>
//                 <Button onClick={() => dispatch(removeOne(product))}>
//                   <HiMinus size="20" />
//                 </Button>
//                 <Button
//                   variant="destructive"
//                   className="bg-red-500 hover:bg-red-400"
//                   onClick={() => dispatch(removeFromCart(product))}
//                 >
//                   <HiOutlineTrash size="20" />
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  HiMinus,
  HiOutlinePlus,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { Button } from "@/components/ui/button";
import { addToCart, removeFromCart, removeOne } from "@/app/redux/feature/cart/cartSlice";
const CartPage = () => {
  const { products, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant="destructive">
            <HiOutlineShoppingCart size="25" />
          </Button>
        </SheetTrigger>
        <SheetContent >
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
            <h1>Total: {total.toFixed(2)}</h1>
          </SheetHeader>
          <div className="space-y-5">
            {products.map((product) => (
              <div
                className="border h-44 p-5 flex justify-between rounded-md"
                key={product.name}
              >
                <div className="border-r pr-5 shrink-0">
                  <img src={product?.image} alt="" className="h-full" />
                </div>
                <div className="px-2 w-full flex flex-col gap-3">
                  <h1 className="text-2xl self-center">{product?.name}</h1>
                  <p>Quantity: {product.quantity}</p>
                  <p className="text-xl">
                    Total Price:{" "}
                    {(product.price * product.quantity!).toFixed(2)} $
                  </p>
                </div>
                <div className="border-l pl-5 flex flex-col justify-between">
                  <Button onClick={() => dispatch(addToCart(product))}>
                    <HiOutlinePlus size="20" />
                  </Button>
                  <Button onClick={() => dispatch(removeOne(product))}>
                    <HiMinus size="20" />
                  </Button>
                  <Button
                    variant="destructive"
                    className="bg-red-500 hover:bg-red-400"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    <HiOutlineTrash size="20" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </SheetContent>
        {/* <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent> */}
      </Sheet>
    </div>
  );
};

export default CartPage;
