import React from 'react';
import Navbar from '../components/Navbar';
import Footor from '../components/Footor';

const products = [
  {
    id: 1,
    title: "Organic Shiitake Mushrooms",
    price: 250,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Fresh Oyster Mushrooms",
    price: 200,
    rating: 4,
    image: "https://images.unsplash.com/photo-1589533615033-29fa407bc474?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Button Mushrooms",
    price: 180,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
  },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1 text-green-700 mt-1">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.562.955-4.755 4.635 1.123 6.545z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#halfGrad)" d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.562.955-4.755 4.635 1.123 6.545z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={i} className="w-6 h-6 fill-gray-300" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.562.955-4.755 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

function OurProduct() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f3ede2] min-h-screen py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-12 text-[#3e2f26]">Our Products</h1>
          <div className="grid gap-12 md:grid-cols-3">
            {products.map(({ id, title, price, rating, image }) => (
              <div
                key={id}
                className="flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img src={image} alt={title} className="w-full h-72 object-cover rounded-t-3xl" />
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-3xl font-semibold text-[#3e2f26] mb-4">{title}</h2>
                  <StarRating rating={rating} />
                  <p className="text-[#5a4638] text-2xl font-bold mt-6">₹{price}/kg</p>
                  <div className="mt-auto flex space-x-6">
                    <button className="flex-1 bg-[#d9b382] text-[#3e2f26] font-bold py-4 rounded-xl hover:bg-[#b7c6a0] transition">
                      Add to Cart
                    </button>
                    <button className="flex-1 bg-[#3e2f26] text-[#f3ede2] font-bold py-4 rounded-xl hover:bg-[#2b251f] transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footor />
    </>
  );
}

export default OurProduct;
