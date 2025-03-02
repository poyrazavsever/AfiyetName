import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>

      <div className="absolute inset-0 bg-orange-950 opacity-80"></div>

      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Evdeki Malzemelerle Harika Tarifler Keşfet
        </h1>
        <p className="text-lg md:text-xl mb-8 text-neutral-200">
        Evdeki malzemelerle kolayca hazırlayabileceğiniz, pratik ve lezzetli yemek tariflerine ulaşarak mutfakta harikalar yaratın. Ne pişireceğiniz konusunda kararsız kaldığınızda, sadece elinizdeki malzemeleri girin ve size özel önerilerle zaman kaybetmeden enfes yemekler keşfedin!
        </p>
        <a href="/tarifler">
          <button className="bg-orange-500 text-white text-lg px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            Tariflere Göz At
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
