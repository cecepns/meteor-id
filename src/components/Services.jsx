const Services = () => {
  const phoneNumber = "6289503669666";
  
  const handleWhatsAppClick = (packageName, price) => {
    const message = `Halo! Saya tertarik dengan paket ${packageName} seharga ${price}/bulan. Bisa tolong info lebih lanjut?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const packages = [
    {
      name: "Lite",
      speed: "Up to 10 Mbps",
      price: "165rb",
      features: [
        "Kecepatan mulai dari 10 Mbps",
        "Up to Bandwith",
        "Tidak dibatasi Kuota",
        "Good Services",
        "Support 24/7",
      ],
      popular: false,
    },
    {
      name: "Family",
      speed: "Up to 15 Mbps",
      price: "190rb",
      features: [
        "Kecepatan mulai dari 15 Mbps",
        "Up to Bandwith",
        "Tidak dibatasi Kuota",
        "Good Services",
        "Support 24/7",
      ],
      popular: true,
    },
    {
      name: "Pro",
      speed: "Up to 20 Mbps",
      price: "220rb",
      features: [
        "Kecepatan mulai dari 20 Mbps",
        "Up to Bandwith",
        "Tidak dibatasi Kuota",
        "Good Services",
        "Support 24/7",
      ],
      popular: false,
    },
    {
      name: "Platinum",
      speed: "Up to 30 Mbps",
      price: "300rb",
      features: [
        "Kecepatan mulai dari 30 Mbps",
        "Up to Bandwith",
        "Tidak dibatasi Kuota",
        "Good Services",
        "Support 24/7",
      ],
      popular: false,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            Paket Layanan Terbaik
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Pilih paket yang sesuai dengan kebutuhan digital Anda. Semua paket
            dilengkapi dengan teknologi terdepan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card p-8 relative ${
                pkg.popular ? "ring-2 ring-primary-500 transform scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Terpopuler
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-sm text-gray-600 mb-4">{pkg.speed}</div>
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {pkg.price}
                  <span className="text-lg text-gray-600 font-normal">
                    /bulan
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleWhatsAppClick(pkg.name, pkg.price)}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-primary-500 text-white hover:bg-primary-600"
                    : "bg-gray-100 text-gray-700 hover:bg-primary-500 hover:text-white"
                }`}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
