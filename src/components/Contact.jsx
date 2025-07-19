const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Hubungi Kami</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Siap membantu Anda 24/7. Konsultasi gratis untuk menentukan paket yang tepat
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12" data-aos="fade-up" data-aos-delay="200">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="300">Informasi Kontak</h3>
            
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="500">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alamat Kantor</h4>
                  <p className="text-gray-600">
                    Neglasari RT 03 RW 02<br/>
                    Desa Langonsari<br/>
                    Kecamatan Pameungpeuk
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Telepon</h4>
                  <p className="text-gray-600">+62 895-2156-9426</p>
                  <p className="text-gray-600">+62 21 8765 4321</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">info@meteor.id</p>
                  <p className="text-gray-600">support@meteor.id</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Jam Operasional</h4>
                  <p className="text-gray-600">Senin - Jumat: 08:00 - 17:00</p>
                  <p className="text-gray-600">Sabtu: 08:00 - 12:00</p>
                  <p className="text-gray-600">Emergency Support: 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lokasi Kami</h3>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d107.60143280029297!3d-7.021004676818848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDEnMTUuNiJTIDEwN8KwMzYnMDUuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Meteor Internet"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  <strong>Alamat:</strong> Neglasari RT 03 RW 02, Desa Langonsari, Kecamatan Pameungpeuk
                </p>
                <a 
                  href="https://www.google.com/maps?q=-7.021004676818848,107.60143280029297&z=17&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-primary-500 hover:text-primary-600 font-medium"
                >
                  Buka di Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;