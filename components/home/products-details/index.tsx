import CustomTable from "@/components/common/custom-table";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ProductDetailsPage = ({ title }: any) => {
  const productImage = "https://i.ibb.co/s9j40YM/pexels-photo-2047905.webp";
  const products = [
    {
      id: 1,
      name: "Lenovo IdeaPad 1 15AMN7 Ryzen 5 7520U 15.6' FHD Laptop",
      title: "Lenovo-IdeaPad-1-15AMN7-Ryzen-5-7520U-15.6-FHD-Laptop",
      price: "61,000৳",
      regularPrice: "66,000৳",
      status: "In Stock",
      productCode: "33459",
      brand: "Lenovo",
      keyFeatures: ["High Definition (HD) Audio", "Camera Privacy Shutter"],
      image: "https://i.ibb.co/s9j40YM/pexels-photo-2047905.webp", // Replace with the actual image path
      processor: {
        brand: "AMD",
        model: "Ryzen 5 7520U",
        frequency: "2.8 GHz – 4.3 GHz",
        core: 4,
        thread: 8,
      },
      display: {
        size: '15.6"',
        type: "TN",
        resolution: "FHD (1920 x 1080)",
        features: "220nits Anti-glare; 170° Viewing Angle",
      },
      memory: {
        RAM: "8GB (On Board)",
        type: "DDR5",
        busSpeed: "5500MHz",
        totalSlot: 1,
        removable: false,
      },
      storage: {
        type: "NVMe PCIe SSD",
        capacity: "256GB",
        extraSlot: false,
        supportedType: "PCIe NVMe M.2",
        upgradeable: true,
      },
    },
    {
      id: 2,
      name: "Dell Inspiron 15 3000 Series Laptop",
      title: "Dell-Inspiron-15-3000-Series-Laptop",
      price: "55,000৳",
      regularPrice: "60,000৳",
      status: "In Stock",
      productCode: "12345",
      brand: "Dell",
      keyFeatures: [
        "15.6' HD Display",
        "8th Gen Intel Core i5 processor",
        "256GB SSD",
      ],
      image: "https://i.ibb.co/s9j40YM/pexels-photo-2047905.webp",
      processor: {
        brand: "Intel",
        model: "Core i5",
        frequency: "1.6 GHz – 3.9 GHz",
        core: 4,
        thread: 8,
      },
      display: {
        size: '15.6"',
        type: "TN",
        resolution: "HD (1366 x 768)",
        features: "Anti-glare",
      },
      memory: {
        RAM: "8GB DDR4",
        type: "DDR4",
        busSpeed: "2400MHz",
        totalSlot: 2,
        removable: true,
      },
      storage: {
        type: "SSD",
        capacity: "256GB",
        extraSlot: true,
        supportedType: "M.2 SATA",
        upgradeable: true,
      },
    },
    {
      id: 3,
      name: "HP Pavilion x360 Convertible Laptop",
      title: "HP-Pavilion-x360-Convertible-Laptop",
      price: "70,000৳",
      regularPrice: "75,000৳",
      status: "In Stock",
      productCode: "67890",
      brand: "HP",
      keyFeatures: [
        "13.3' FHD Touchscreen",
        "Intel Core i7 processor",
        "512GB SSD",
      ],
      image: "https://i.ibb.co/s9j40YM/pexels-photo-2047905.webp",
      processor: {
        brand: "Intel",
        model: "Core i7",
        frequency: "1.3 GHz – 3.9 GHz",
        core: 4,
        thread: 8,
      },
      display: {
        size: '13.3"',
        type: "IPS",
        resolution: "FHD (1920 x 1080)",
        features: "Touchscreen, 360-degree hinge",
      },
      memory: {
        RAM: "16GB DDR4",
        type: "DDR4",
        busSpeed: "3200MHz",
        totalSlot: 2,
        removable: true,
      },
      storage: {
        type: "SSD",
        capacity: "512GB",
        extraSlot: false,
        supportedType: "M.2 NVMe",
        upgradeable: true,
      },
    },
    {
      id: 4,
      name: "Apple MacBook Air (M1 Chip)",
      title: "Apple-MacBook-Air-(M1-Chip)",
      price: "90,000৳",
      regularPrice: "95,000৳",
      status: "In Stock",
      productCode: "45678",
      brand: "Apple",
      keyFeatures: ["13.3' Retina Display", "Apple M1 chip", "256GB SSD"],
      image: productImage,
      processor: {
        brand: "Apple",
        model: "M1",
        frequency: "Up to 3.2 GHz",
        core: 8,
        thread: 8,
      },
      display: {
        size: '13.3"',
        type: "Retina",
        resolution: "2560 x 1600",
        features: "True Tone technology",
      },
      memory: {
        RAM: "8GB Unified Memory",
        type: "Unified Memory",
        busSpeed: "N/A",
        totalSlot: 1,
        removable: false,
      },
      storage: {
        type: "SSD",
        capacity: "256GB",
        extraSlot: false,
        supportedType: "N/A",
        upgradeable: false,
      },
    },
    {
      id: 5,
      name: "Samsung Galaxy Book Pro 360",
      title: "Samsung-Galaxy-Book-Pro-360",
      price: "85,000৳",
      regularPrice: "90,000৳",
      status: "In Stock",
      productCode: "56789",
      brand: "Samsung",
      keyFeatures: [
        "15.6' Super AMOLED Touchscreen",
        "Intel Core i7 processor",
        "512GB SSD",
      ],
      image: productImage,
      processor: {
        brand: "Intel",
        model: "Core i7",
        frequency: "Up to 4.7 GHz",
        core: 4,
        thread: 8,
      },
      display: {
        size: '15.6"',
        type: "Super AMOLED",
        resolution: "FHD (1920 x 1080)",
        features: "Touchscreen, 360-degree hinge",
      },
      memory: {
        RAM: "16GB LPDDR4x",
        type: "LPDDR4x",
        busSpeed: "4266MHz",
        totalSlot: 1,
        removable: false,
      },
      storage: {
        type: "SSD",
        capacity: "512GB",
        extraSlot: false,
        supportedType: "N/A",
        upgradeable: false,
      },
    },
    {
      id: 6,
      name: "Asus ROG Zephyrus G14",
      title: "Asus-ROG-Zephyrus-G14",
      price: "95,000৳",
      regularPrice: "100,000৳",
      status: "In Stock",
      productCode: "67890",
      brand: "Asus",
      keyFeatures: ["14' QHD Display", "AMD Ryzen 9 processor", "1TB SSD"],
      image: productImage,
      processor: {
        brand: "AMD",
        model: "Ryzen 9",
        frequency: "3.0 GHz – 4.6 GHz",
        core: 8,
        thread: 16,
      },
      display: {
        size: '14"',
        type: "IPS",
        resolution: "QHD (2560 x 1440)",
        features: "Pantone Validated, Adaptive Sync",
      },
      memory: {
        RAM: "32GB DDR4",
        type: "DDR4",
        busSpeed: "3200MHz",
        totalSlot: 2,
        removable: true,
      },
      storage: {
        type: "SSD",
        capacity: "1TB",
        extraSlot: false,
        supportedType: "N/A",
        upgradeable: false,
      },
    },
    {
      id: 7,
      name: "Acer Swift 5",
      title: "Acer-Swift-5",
      price: "75,000৳",
      regularPrice: "80,000৳",
      status: "In Stock",
      productCode: "78901",
      brand: "Acer",
      keyFeatures: [
        "14' FHD Touchscreen",
        "Intel Core i5 processor",
        "512GB SSD",
      ],
      image: productImage,
      processor: {
        brand: "Intel",
        model: "Core i5",
        frequency: "1.0 GHz – 4.2 GHz",
        core: 4,
        thread: 8,
      },
      display: {
        size: '14"',
        type: "IPS",
        resolution: "FHD (1920 x 1080)",
        features: "Touchscreen",
      },
      memory: {
        RAM: "16GB LPDDR4X",
        type: "LPDDR4X",
        busSpeed: "4266MHz",
        totalSlot: 1,
        removable: false,
      },
      storage: {
        type: "SSD",
        capacity: "512GB",
        extraSlot: false,
        supportedType: "N/A",
        upgradeable: false,
      },
    },
    {
      id: 8,
      name: "Microsoft Surface Laptop 4",
      title: "Microsoft-Surface-Laptop-4",
      price: "88,000৳",
      regularPrice: "92,000৳",
      status: "In Stock",
      productCode: "89012",
      brand: "Microsoft",
      keyFeatures: [
        "13.5' PixelSense Display",
        "AMD Ryzen 7 processor",
        "512GB SSD",
      ],
      image: productImage,
      processor: {
        brand: "AMD",
        model: "Ryzen 7",
        frequency: "2.9 GHz – 4.3 GHz",
        core: 8,
        thread: 16,
      },
      display: {
        size: '13.5"',
        type: "PixelSense",
        resolution: "2256 x 1504",
        features: "Touchscreen, Surface Pen support",
      },
      memory: {
        RAM: "16GB LPDDR4x",
        type: "LPDDR4x",
        busSpeed: "3733MHz",
        totalSlot: 1,
        removable: false,
      },
      storage: {
        type: "SSD",
        capacity: "512GB",
        extraSlot: false,
        supportedType: "N/A",
        upgradeable: false,
      },
    },
    {
      id: 9,
      name: "Google Pixelbook Go",
      title: "Google-Pixelbook-Go",
      price: "78,000৳",
      regularPrice: "85,000৳",
      status: "In Stock",
      productCode: "90123",
      brand: "Google",
      keyFeatures: [
        "13.3' Full HD Touchscreen",
        "Intel Core i7 processor",
        "256GB SSD",
      ],
      image: productImage,
      processor: {
        brand: "Intel",
        model: "Core i7",
        frequency: "1.3 GHz – 3.9 GHz",
        core: 4,
        thread: 8,
        cache: {
          L1: "256KB",
          L2: "1MB",
          L3: "8MB",
        },
      },
      display: {
        size: '13.3"',
        type: "IPS",
        resolution: "FHD (1920 x 1080)",
        features: "Touchscreen, Ambient EQ",
      },
      memory: {
        RAM: "16GB LPDDR4",
        type: "LPDDR4",
        busSpeed: "2133MHz",
        totalSlot: 1,
        removable: false,
      },
      storage: {
        type: "SSD",
        capacity: "256GB",
        extraSlot: false,
        supportedType: "N/A",
        upgradeable: false,
      },
    },
  ];
  const product = products.find((product) => product.title === title);
  const displayData = Object.entries(product?.display || {});
  const memoryData = Object.entries(product?.memory || {});
  const storageData = Object.entries(product?.storage || {});
  const processorData = Object.entries(product?.processor || {});

  return (
    <div className="mx-auto max-w-screen-xl h-full bg-white">
      <h1>Product Details Page</h1>
      <main className="grid grid-cols-1 lg:grid-cols-3">
        <section className="flex justify-center items-center w-full">
          <Image
            src={product?.image || ""}
            width={200}
            height={200}
            alt="products"
            className="rounded-md"
          />
        </section>
        <section className="col-span-2 w-full">
          <h1 className="text-xl text_primary font-bold">
            {product?.name || "No name found"}
          </h1>
          <div className="flex gap-5 my-2">
            <p className="bg-gray-200 rounded-lg p-1.5">Price:${product?.price || "Not provided"}</p>
            <p className="bg-gray-200 rounded-lg p-1.5">Regular Price: ${product?.regularPrice || "Not provided"}</p>
            <p className="bg-gray-200 rounded-lg p-1.5">Product Code: ${product?.productCode || "Not provided"}</p>
            <p className="bg-gray-200 rounded-lg p-1.5">Product Status: ${product?.status || "Not provided"}</p>
          </div>
          <div>
            <h1>Key Features</h1>
            {product?.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </div>
          <h1>Brand:{product?.brand || "Not provided"}</h1>
          <h1>Status:{product?.status || "Not provided"}</h1>
          <h1>Code:{product?.productCode || "Not provided"}</h1>
          
          <Button className="mt-5">Buy Now</Button>
        </section>
        <section className="my-2 p-2  col-span-2">
          <h1 className="text-2xl font-bold">Specification</h1>
          <CustomTable title="Display Feature" data={displayData} />
          <CustomTable title="Processor Information" data={processorData} />
          <CustomTable title="Memory Information" data={memoryData} />
          <CustomTable title="Storage Information" data={storageData} />
        </section>
      </main>
    </div>
  );
};

export default ProductDetailsPage;
