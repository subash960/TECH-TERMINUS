import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Laptop, 
  Watch, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2,
  Server,
  Headphones,
  Smartphone
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-blue-600/20">
              <Server className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900">
              TECH <span className="text-blue-600">TERMINUS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-[500px] h-[500px] rounded-full bg-slate-200/50 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100/80 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Premier IT & Security Solutions in Chennai</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Securing Your Environment. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Empowering Your Tech.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tech Terminus provides end-to-end IT reselling, cutting-edge smart wearables, and industrial-grade surveillance systems to protect and elevate your business.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center justify-center"
            >
              Explore Solutions
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-full font-semibold text-lg transition-all flex items-center justify-center shadow-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Security Hardware",
      description: "State-of-the-art surveillance solutions tailored for homes and businesses. We specialize in top-tier brands to guarantee reliability.",
      features: ["CP Plus Cameras & DVRs", "D-Link Security Systems", "Hikvision CCTV Setup", "Installation & Maintenance"]
    },
    {
      icon: <Laptop className="w-10 h-10 text-blue-600" />,
      title: "IT Products & Reselling",
      description: "Comprehensive hardware and software solutions to keep your business running smoothly, efficiently, and without interruption.",
      features: ["Desktop & Laptop Reselling", "Networking Equipment", "Server Components", "Software Licensing"]
    },
    {
      icon: <Watch className="w-10 h-10 text-blue-600" />,
      title: "Smart Wearables & Audio",
      description: "Elevate your daily lifestyle with the latest in personal tech, combining premium sound quality with robust fitness tracking.",
      features: ["Advanced Smartwatches", "Premium Audio Pods", "TWS Earbuds", "Fitness Trackers"]
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      title: "Mobile Phones",
      description: "Latest smartphones from top global brands, ensuring you stay connected with the best technology in your hands.",
      features: ["Top Tier Brands", "Budget & Flagship Models", "Mobile Accessories", "Service & Support"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Premium Products & Services</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Delivering high-performance technology and uncompromising security hardware to meet the modern demands of our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Brands = () => {
  const brands = [
    "CP Plus", "D-Link", "Hikvision", "Fire-Boltt", 
    "Apple", "Samsung", "Vivo", "Oppo", "Xiaomi"
  ];
  
  return (
    <section className="py-12 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">Authorized Reseller & Trusted By Brands</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-80">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-xl md:text-2xl font-black text-slate-400 hover:text-blue-600 cursor-default">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">About Tech Terminus</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Your Trusted Technology Partner in Chennai
            </h3>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Based in Tirumullaivoyil chennai 62, Tech Terminus is a proudly 
              <span className="text-blue-400 font-semibold"> MSME Registered </span> 
              business (UDYAM-TN-04-0096877). We bridge the gap between complex technological needs and seamless implementation.
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Whether you are looking to secure your premises with world-class CCTV systems or seeking bulk IT hardware for your corporate office, our commitment to quality and customer satisfaction remains unmatched.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-2xl font-bold text-white mb-1">MSME</div>
                <div className="text-slate-400 text-sm">Govt. Registered Business</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-slate-400 text-sm">Genuine Products</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 relative shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Local Expertise</h4>
                  <p className="text-slate-400 text-sm">Deeply rooted in Tirumullaivoyil chennai 62</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-slate-700/50 p-3 rounded-lg mr-4">
                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Authorized Reseller</h5>
                    <p className="text-sm text-slate-400">Authentic products from CP Plus, D-Link, and Hikvision.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-slate-700/50 p-3 rounded-lg mr-4">
                    <Headphones className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Dedicated Support</h5>
                    <p className="text-sm text-slate-400">Post-sales support and installation assistance for our clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Tech Terminus</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Ready to upgrade your technology infrastructure or secure your premises? Reach out to us for a personalized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h4>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 mt-2">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Call Us (Direct)</p>
                  <a href="tel:+919787696905" className="text-2xl md:text-3xl font-extrabold text-blue-600 hover:text-blue-700 transition-colors block">
                    +91 97876 96905
                  </a>
                  <p className="text-sm text-slate-500 mt-3">Available Mon-Sat, 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                  <a href="mailto:contact@techterminus.in" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">
                    contact@techterminus.in
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Visit Us</p>
                  <p className="text-lg font-medium text-slate-900">
                    Tech Terminus Head Office<br />
                    Tirumullaivoyil chennai 62<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">Send an Inquiry</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="+91 xxxxx xxxxx" />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Interested In</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                  <option>Security Hardware (CCTV)</option>
                  <option>IT Products & Reselling</option>
                  <option>Smartwatches & Audio</option>
                  <option>Mobile Phones</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you today?"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center">
                Submit Inquiry
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-2">
                <Server className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                TECH <span className="text-blue-500">TERMINUS</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering businesses in Chennai with robust IT infrastructure, cutting-edge surveillance, and smart wearable technology.
            </p>
            <div className="inline-block border border-slate-700 rounded px-3 py-1 bg-slate-900">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">MSME Registered</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Our Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Categories</h4>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">Security Hardware (CCTV/DVR)</li>
              <li className="text-slate-400 text-sm">IT Hardware Reselling</li>
              <li className="text-slate-400 text-sm">Networking Equipment</li>
              <li className="text-slate-400 text-sm">Smartwatches & Audio</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Tirumullaivoyil chennai 62,<br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-bold">
                  +91 97876 96905
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <a href="mailto:contact@techterminus.in" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  contact@techterminus.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tech Terminus. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 bg-white">
      {/* Added smooth scrolling style globally for the single page app feel */}
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
      `}} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Brands />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}