const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">meteor.id</span>
            </div>
            <p className="text-gray-400 mb-4">
              Penyedia layanan internet terpercaya untuk kebutuhan digital keluarga Indonesia.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Paket Lite</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Paket Family</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Paket Pro</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Paket Platinum</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white">Karir</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white">Berita</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white">Investor</a></li> */}
            </ul>
          </div>
          
          {/* <div>
            <h4 className="font-semibold text-lg mb-4">Bantuan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Pusat Bantuan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cek Coverage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Kebijakan Privasi</a></li>
            </ul>
          </div> */}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 PT. Technostar Indomedia Persada. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;