// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';


// const CustomCard = (data:any) => {
//     console.log(data.data)
//     return (
//         <Card >
//             <CardHeader>
//               <CardTitle>Create project</CardTitle>
//               <CardDescription>
//                 Deploy your new project in one-click.
//                 <h1>{data.data.name}</h1>
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//                 <Image src={data.data.image} width={200} height={200} alt="products"></Image>
//             </CardContent>
//             <CardFooter className="flex justify-between">
              
//               <Link href={`/products/${data.data.title}`}><Button>Detail</Button></Link>
//             </CardFooter>
//           </Card>
//     );
// };

// export default CustomCard;



import { addToCart } from "@/app/redux/feature/cart/cartSlice";
import { useAppDispatch } from "@/app/redux/hooks";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link";



export default function CustomCard({ product }:any) {
  const { toast } = useToast()
  const dispatch = useAppDispatch();
  const handleAddProduct = (product:any) => {
    dispatch(addToCart(product));
    toast({
      description: 'Product Added',
    });
  };
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link href={`/products/${product._id}`} className="w-full">
          <img src={product?.image} alt="product" />
          <h1 className="text-xl font-semibold">{product?.name}</h1>
        </Link>
        <p>Rating: {product?.rating}</p>
        <p className="text-sm">
          Availability: {product?.status ? 'In stock' : 'Out of stock'}
        </p>
        <p className="text-sm">Price: {product?.price}</p>
        <Button variant="default" onClick={() => handleAddProduct(product)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
