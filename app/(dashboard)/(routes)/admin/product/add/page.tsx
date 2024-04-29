"use client";
import Heading from "@/components/heading";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loader from "@/components/loader";
import Input from "@/components/common/Input";
import { useToast } from "@/components/ui/use-toast";

const AddProduct = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const methods = useForm();
  
  // Handle Register submit
  const onSubmit = async (data: any) => {
    console.log(data);
    // setLoading(true);
    try {
      const response = await axios.post("/api/product", data);
      if (response.status === 200) {
        toast({
          description: response.data.message,
        });
        setLoading(false);
      } else {
        console.error("Error:", response.data.message);
        toast({
          description: response.data.message,
        });
        setLoading(false);
      }
    } catch (error) {
      toast({
        description: "Invalid phone or password!",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <Heading
        title="Add A Product"
        description="Add Product Information"
        icon={Plus}
        iconColor="text-green-500"
        bgColor="bg-green-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <section className="grid grid-cols-2 gap-4">
                {/* Model name */}
                <Input
                  className="mb-4"
                  name="model"
                  placeholder="Model"
                  label="Model"
                  defaultValue="AMD RYZEN 5 5600X PROCESSOR"
                  rules={{
                    required: "Model is required",
                  }}
                />
                {/* Title name */}
                <Input
                  className="mb-4"
                  name="title"
                  placeholder="Title"
                  label="Title"
                  defaultValue="amd-ryzen-5-5600X-gaming-pc"
                  rules={{
                    required: "Title is required",
                  }}
                />
                {/* Image Link */}
                <Input
                  className="mb-4"
                  name="image"
                  placeholder="Image URL"
                  label="Image URL"
                  defaultValue="https://live.staticflickr.com/65535/52522584794_4a9898a992_o.jpg"
                  rules={{
                    required: "Image URL is required",
                  }}
                />
                {/* Status */}
                <Input
                  className="mb-4"
                  name="status"
                  placeholder="Status"
                  label="Status"
                  defaultValue="true"
                  type="boolean"
                  rules={{
                    required: "Status is required",
                  }}
                />
                {/* Price */}
                <Input
                  className="mb-4"
                  name="price"
                  placeholder="Price"
                  label="Price"
                  defaultValue="128200"
                  type="number"
                  rules={{
                    required: "Price is required",
                  }}
                />
                {/* Rating */}
                <Input
                  className="mb-4"
                  name="rating"
                  placeholder="Rating"
                  label="Rating"
                  defaultValue="3"
                  type="number"
                  rules={{
                    required: "Rating is required",
                  }}
                />
              </section>

              <Input
                className="mb-4"
                name="keyFeature"
                placeholder="Key Features"
                label="Key Features"
                defaultValue={[
                  "Gigabyte B550M DS3H AM4 AMD Micro ATX Motherboard",
                  "PNY GeForce RTX 3070 8GB UPRISING Dual Fan LHR GDDR6 Graphics Card",
                  "AMD RYZEN 5 5600X PROCESSOR",
                  "16GB 3200MHz DDR4 RAM+ 128GB M.2 PCIe SSD",
                ]}
                rules={{
                  required: "Key Features are required",
                }}
              />
              <Input
                className="mb-4"
                name="spec"
                placeholder="Specifications"
                label="Specifications"
                defaultValue={[
                  { processor: "AMD RYZEN 5 5600X PROCESSOR" },
                  {
                    motherboard:
                      "Gigabyte B550M DS3H AM4 AMD Micro ATX Motherboard",
                  },
                  { ram: "Corsair Vengeance LPX 16GB DDR4 DRAM 3200MHz RAM" },
                  {
                    graphics:
                      "PNY GeForce RTX 3070 8GB UPRISING Dual Fan LHR GDDR6 Graphics Card",
                  },
                  {
                    storage:
                      "Team MP33 128GB M.2 PCIe SSD Toshiba P300 1TB Desktop PC Internal Hard Drive",
                  },
                  { casing: "Antec NX420 Mid Tower ARGB Gaming Case" },
                  {
                    psu: "Antec CUPRUM STRIKE CSK 650W 80 Plus Bronze Power Supply",
                  },
                  { cooler: "Gamdias Boreas M1-610 ARGB CPU Cooler" },
                ]}
                rules={{
                  required: "Specifications are required",
                }}
              />

              <div>
                <p className="text-red-500 text-sm">{errorMessage}</p>
              </div>
              {/* Login Form Submit */}
              <Button
                className="mt-4 w-full flex justify-center items-center background_primary"
                type="submit"
                disabled={loading}
                variant={"premium"}
              >
                {loading ? "Loading" : "Add Product"}
              </Button>
            </form>
          </FormProvider>
          <div className="space-y-4 mt-4">
            {loading && (
              <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                <Loader />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
