"use client";
import Input from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import register from "../../../assets/Ecommerce web page-amico.png";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { usePathname, useRouter } from "next/navigation";
const RegisterPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading,setLoading]=useState(false)
  const methods = useForm();


  // Handle Register submit
  const onSubmit = async (data: any) => {
    setLoading(true)
    try {
      const response = await axios.post("/api/register", data);
      if (response.status === 200) {
        toast({
          description: response.data.message,
        });
        setLoading(false)
        router.push("/login");
      } else {
        console.error("Error:", response.data.message);
        toast({
          description: response.data.message,
        });
        setLoading(false)
      }
    } catch (error) {
      toast({
        description: "User creation failed!",
      });
      setLoading(false)
    }
  };

  return (
    <main className="w-full max-w-screen-2xl mx-auto">
      <section className="h-screen grid grid-cols-1 lg:grid-cols-4">
        <section className="col-span-3 flex items-center justify-center bg-gray-200">
          <Image src={register} width={500} alt="e-commerce image"></Image>
        </section>
        <section className=" flex items-center justify-center ">
          <main>
            <h1 className="text-2xl font-bold text-center">
              E-Shop <span className="text_primary">BD</span>{" "}
            </h1>
            <h1 className="text-md font-medium text-center">
              Register your account
            </h1>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input
                  className="mb-4"
                  name="phone"
                  placeholder="Phone"
                  label="Phone"
                  defaultValue="+88"
                  rules={{
                    required: "Phone is required",
                    pattern: {
                      value: /^(\+?88)?01[0-9]{9}$/,
                      message: "Invalid phone number",
                    },
                  }}
                />
                <Input
                  className="mb-4"
                  name="password"
                  placeholder="Password"
                  label="Password"
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  }}
                />
                <div>
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                </div>
                {/* Login Form Submit */}
                <Button
                  className="mt-4 w-full flex justify-center items-center background_primary"
                  type="submit"
                  variant={"premium"}
                  disabled={loading}
                >
                  {loading ? "Loading":"Register"}
                </Button>
              </form>
            </FormProvider>
            {/* Login Form bottom information */}
            <section className="my-2">
              <div className="lg:flex lg:justify-between">
                <div>
                  <Link href={`/login`}>
                    Already register to E-Shop BD?{" "}
                    <span  className="text-[#B968C5] font-bold">Login Now</span>
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </section>
      </section>
    </main>
  );
};

export default RegisterPage;
