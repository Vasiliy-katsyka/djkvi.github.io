import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Product {
  name: string;
  type: string;
  collection: string;
  images: string[];
  price: string;
}

const MerchSection = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const products: Product[] = [
    {
      name: "Last Thing I See Hoodie",
      type: "Hoodie",
      collection: "Last Thing I See",
      images: [
        "https://i.ibb.co/k0czWWm/download-9.png",
        "https://i.ibb.co/cXcvXGj/download-10.png"
      ],
      price: "$59.99"
    },
    {
      name: "Last Thing I See T-Shirt",
      type: "T-Shirt",
      collection: "Last Thing I See",
      images: [
        "https://i.ibb.co/G2XPHBb/download-7.png",
        "https://i.ibb.co/W5SrktD/download-8.png"
      ],
      price: "$29.99"
    },
    {
      name: "Last Thing I See Poster",
      type: "Poster",
      collection: "Last Thing I See",
      images: ["https://i.ibb.co/GFrskXg/download-11.png"],
      price: "$19.99"
    },
    {
      name: "Last Thing I See Backpack",
      type: "Backpack",
      collection: "Last Thing I See",
      images: [
        "https://i.ibb.co/N1TzttW/download-14.png",
        "https://i.ibb.co/rc2VZ2H/download-15.png"
      ],
      price: "$49.99"
    }
  ];

  const handleImageNavigation = (e: React.MouseEvent, productName: string, direction: 'prev' | 'next') => {
    e.preventDefault();
    e.stopPropagation();
    
    const product = products.find(p => p.name === productName);
    if (!product) return;
    
    const maxIndex = product.images.length;
    const currentIndex = currentImageIndexes[productName] || 0;
    
    setCurrentImageIndexes(prev => ({
      ...prev,
      [productName]: direction === 'next' 
        ? (currentIndex + 1) % maxIndex
        : (currentIndex - 1 + maxIndex) % maxIndex
    }));
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 fade-up">Official Merch</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <div 
            key={product.name}
            className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow-500/10 group fade-up h-full flex flex-col"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <img 
                src={product.images[currentImageIndexes[product.name] || 0]}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              {product.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => handleImageNavigation(e, product.name, 'prev')}
                    className="bg-black/60 p-2 rounded-full text-yellow-400 hover:bg-black/80 transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => handleImageNavigation(e, product.name, 'next')}
                    className="bg-black/60 p-2 rounded-full text-yellow-400 hover:bg-black/80 transition-colors"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">{product.name}</h3>
              <p className="text-yellow-100/90 mb-4">{product.price}</p>
              <div className="mt-auto">
                <a
                  href="https://t.me/Vasiliy939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 px-4 py-2 rounded-full text-black hover:bg-yellow-400 transition font-medium text-sm w-full text-center"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MerchSection;