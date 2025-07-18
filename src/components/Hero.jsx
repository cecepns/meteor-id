import HeroImage from "../assets/banner1.jpg";
const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-accent-50 pt-44 section-padding rounded-b-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Internet Super Cepat untuk
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500"> Keluarga</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nikmati koneksi internet stabil dan berkualitas tinggi dari meteor.id. 
              Solusi terpercaya untuk kebutuhan digital keluarga Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary">Pilih Paket</a>
              <a href="#about" className="btn-outline">Pelajari Lebih Lanjut</a>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">1000+</div>
                <div className="text-sm text-gray-600">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="relative">
              <div 
                className="w-full h-96 rounded-3xl flex items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: `url(${HeroImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  // transform: "scaleX(-1)",
                }}
              >
                {/* Background overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
                
                <div className="text-gray-900 text-left relative z-10 w-full px-8">
                  <div className="w-20 h-20 bg-primary-500/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Koneksi Terjamin</h3>
                  <p className="text-lg text-gray-700">Kualitas terbaik di kelasnya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;