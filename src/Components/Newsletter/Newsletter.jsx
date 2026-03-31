import React from 'react';
import bgShadow from '../../assets/bg-shadow.png';

const Newsletter = () => {
  return (
    <div className="w-11/12 mx-auto relative mt-20 mb-[-120px] z-20">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-3xl shadow-lg">
        <div 
          className="bg-white rounded-2xl flex flex-col items-center justify-center py-16 px-6 text-center shadow-inner relative overflow-hidden"
          style={{
            backgroundImage: `url(${bgShadow})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'white'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl">
            Get the latest updates and news right in your inbox!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input input-bordered w-full rounded-xl h-14 text-gray-800 border-gray-300 focus:outline-none focus:border-yellow-400"
            />
            <button className="btn bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold px-8 h-14 rounded-xl border-none shadow-md transition-all hover:scale-105 active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
