
"use client"
import React, { useEffect, useState } from "react";
import productImage from "../../../assets/car.png";
import CustomCard from "@/components/common/custom-card";
const CheckoutPage = () => {
  // Fetching the products data, from backend
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
        cache: {
          L1: "256KB",
          L2: "2MB",
          L3: "4MB",
        },
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
        cache: {
          L1: "256KB",
          L2: "1MB",
          L3: "6MB",
        },
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
        cache: {
          L1: "192KB",
          L2: "12MB",
        },
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
        cache: {
          L1: "512KB",
          L2: "8MB",
          L3: "12MB",
        },
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
        cache: {
          L1: "512KB",
          L2: "4MB",
          L3: "16MB",
        },
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
        cache: {
          L1: "256KB",
          L2: "1MB",
          L3: "6MB",
        },
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
        cache: {
          L1: "512KB",
          L2: "4MB",
          L3: "16MB",
        },
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
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <h1 className="text-xl font-bold mt-5 mx-2">Shop All Products</h1>
      <div className="grid grid-cols-4 gap-8">
      {products.map((data) => (
        <div key={data.id} >
         <CustomCard data={data}/>
        </div>
      ))}
      </div>
    
    </div>
  );
};

export default CheckoutPage;
