const Testimonials = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pengusaha",
      image: "https://ui-avatars.com/api/?name=Budi Santoso",
      text: "Sejak menggunakan meteor.id, bisnis online saya jadi lebih lancar. Koneksi stabil dan customer service sangat responsif!"
    },
    {
      name: "Sari Dewi",
      role: "Ibu Rumah Tangga",
      image: "https://ui-avatars.com/api/?name=Sari Dewi",
      text: "Anak-anak bisa sekolah online dengan lancar, suami work from home tanpa kendala. Paket Family sangat worth it!"
    },
    {
      name: "Ahmad Rizki",
      role: "Content Creator",
      image: "https://ui-avatars.com/api/?name=Ahmad Rizki",
      text: "Upload video YouTube jadi super cepat! Streaming game online juga lancar jaya. Recommended banget untuk content creator!"
    },
    {
      name: "Maya Putri",
      role: "Mahasiswa",
      image: "https://ui-avatars.com/api/?name=Maya Putri",
      text: "Kuliah online jadi lebih nyaman. Video call dengan dosen dan teman-teman gak pernah lag. Harga juga terjangkau untuk mahasiswa."
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Testimoni Pelanggan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Dengarkan pengalaman nyata dari pelanggan yang telah merasakan layanan terbaik meteor.id
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;