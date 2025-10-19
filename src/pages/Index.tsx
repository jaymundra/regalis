"use client";

import { useState ,useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products, { products } from "@/components/Products";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import WaitlistModal from "@/components/WaitlistModal";
import WaitlistBanner from "@/components/WaitlistBanner";
import AnnouncementBar from "@/components/AnnouncementBar";
import Lenis from 'lenis';
import { ReactLenis, useLenis, type LenisRef  } from 'lenis/react';


const Index = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [currentProduct, setCurrentProduct] = useState<{ name: string; image: string; price: string } | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     lerp: 0.1,
  //   });
  //   function raf (time: any) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }
  //   requestAnimationFrame(raf)
  // }, []);

  const handleProductClick = (product: { name: string; image: string; price: string }) => {
    setCurrentProduct(product);
    setIsProductModalOpen(true);
  };

  const handleToggleSelect = () => {
    if (!currentProduct) return;

    if (selectedProducts.includes(currentProduct.name)) {
      setSelectedProducts(selectedProducts.filter((name) => name !== currentProduct.name));
    } else if (selectedProducts.length < 2) {
      setSelectedProducts([...selectedProducts, currentProduct.name]);
    }
  };

  const handleOpenWaitlist = () => {
    if (selectedProducts.length === 0) {
      setIsWaitlistModalOpen(true);
    } else {
      setIsWaitlistModalOpen(true);
    }
  };

  const handleWaitlistSuccess = () => {
    setSelectedProducts([]);
  };

    const handleRemoveProduct = (productName: string) => {
    setSelectedProducts(selectedProducts.filter((name) => name !== productName));
  };

  const selectedProductsData = products.filter((p) => selectedProducts.includes(p.name));

  return (
      //       <>
      //   <ReactLenis 
      //     className="wrapper"
      //     root="asChild"
      //     ref={lenisRef}
      // >
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar onJoinWaitlist={handleOpenWaitlist} selectedCount={selectedProducts.length} />
      <Hero onJoinWaitlist={handleOpenWaitlist} />

      <About />
      <Products 
        selectedProducts={selectedProducts}
        onProductClick={handleProductClick}
      />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      <CTA onJoinWaitlist={handleOpenWaitlist} />
      {/* <Footer /> */}

      <ProductModal
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        product={currentProduct}
        isSelected={currentProduct ? selectedProducts.includes(currentProduct.name) : false}
        onToggleSelect={handleToggleSelect}
        canSelect={selectedProducts.length < 2}
        onOpenWaitlist={handleOpenWaitlist}
      />

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
        selectedProducts={selectedProductsData}
        onSuccess={handleWaitlistSuccess}
        onRemoveProduct={handleRemoveProduct}
      />

        <WaitlistBanner
          selectedCount={selectedProducts.length}
          onOpenWaitlist={handleOpenWaitlist}
        />

    </div>
      //     </ReactLenis>
      // </>
  );
};

export default Index;
