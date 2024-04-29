"use client";
import { useGetProductsQuery } from "@/app/redux/feature/products/productApi";
import { setPriceRange, toggleState } from "@/app/redux/feature/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import CustomCard from "@/components/common/custom-card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export default function ProductPage() {
  const { data, isLoading } = useGetProductsQuery(undefined);
  // const { toast } = useToast();

  const { priceRange, status } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const handleSlider = (value: number[]) => {
    dispatch(setPriceRange(value[0]));
  };

  let productsData;

  if (status) {
    productsData = data?.data?.filter(
      (item: { status: boolean; price: number }) =>
        item.status === true && item.price < priceRange
    );
  } else if (priceRange > 0) {
    productsData = data?.data?.filter(
      (item: { price: number }) => item.price < priceRange
    );
  } else {
    productsData = data;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto relative">
      {/* Filtering Section */}
      <div className="lg:col-span-3 md:my-5 lg:my-0 z lg:mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 lg:h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div
            onClick={() => dispatch(toggleState())}
            className="flex items-center space-x-2 mt-3 cursor-pointer"
          >
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">
            <Slider
              defaultValue={[150]}
              max={150}
              min={0}
              step={1}
              onValueChange={(value) => handleSlider(value)}
            />
          </div>
          <div>From 0$ To {priceRange}$</div>
        </div>
      </div>

      {/* Product Section */}
      <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
        {productsData?.map((product: { id: any; }) => (
          <CustomCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}