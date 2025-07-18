import AboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="rounded-3xl relative overflow-hidden"
            data-aos="fade-right"
            style={{
              backgroundImage: `url(${AboutImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-96 bg-white/30 rounded-3xl flex items-center justify-center relative">
              {/* Semi-transparent overlay for better text readability */}
              <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>

              <div className="text-center relative z-10">
                <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  Kualitas Terjamin
                </h3>
                <p className="text-white/90 font-medium drop-shadow-md">
                  Teknologi fiber optik terdepan
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up">
              Tentang Meteor.id
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              <strong>PT. Technostar Indomedia Persada</strong> adalah penyedia
              layanan internet terpercaya yang berkomitmen memberikan koneksi
              berkualitas tinggi untuk masyarakat Indonesia.
            </p>

            <div className="space-y-4 mb-8" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Teknologi Fiber Optik
                  </h4>
                  <p className="text-gray-600">
                    Infrastruktur terdepan untuk koneksi super cepat dan stabil
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Customer Support 24/7
                  </h4>
                  <p className="text-gray-600">
                    Tim teknis berpengalaman siap membantu kapan saja
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Harga Terjangkau
                  </h4>
                  <p className="text-gray-600">
                    Paket internet berkualitas dengan harga yang kompetitif
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center" data-aos="fade-up" data-aos-delay="300">
              <div>
                <div className="text-3xl font-bold text-primary-500">5+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">1000+</div>
                <div className="text-sm text-gray-600">Pelanggan Aktif</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">99.9%</div>
                <div className="text-sm text-gray-600">Network Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
