import { useState } from "react";
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
import { ReactLenis, useLenis } from 'lenis/react';


const Index = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [currentProduct, setCurrentProduct] = useState<{ name: string; image: string; price: string } | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

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

  const selectedProductsData = products.filter((p) => selectedProducts.includes(p.name));

  return (
    <div className="min-h-screen">
        <ReactLenis root />
        {}
      <Navbar onJoinWaitlist={handleOpenWaitlist} />
      <Hero onJoinWaitlist={handleOpenWaitlist} />

      <About />
      <Products 
        selectedProducts={selectedProducts}
        onProductClick={handleProductClick}
      />
      <Features />
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
      />

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
        selectedProducts={selectedProductsData}
        onSuccess={handleWaitlistSuccess}
      />

      <WaitlistBanner
        selectedCount={selectedProducts.length}
        onOpenWaitlist={handleOpenWaitlist}
      />
    </div>
  );
};

export default Index;
