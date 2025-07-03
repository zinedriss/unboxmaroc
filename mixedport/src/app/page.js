"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Gamepad2, Mail, Phone, Instagram, Send, Menu, X, Star, ShoppingCart, Tag, ShieldCheck, Zap, PackageCheck } from 'lucide-react';
import Image from 'next/image';

// GSAP Integration
// In a real project, you'd use 'npm install gsap'. Here, we'll load it via a script.
const useGsap = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
};

// Helper component for social media links
const SocialLink = ({ href, icon: Icon, 'aria-label': ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    <Icon size={24} />
  </a>
);

// SVG Icon for TikTok
const TikTokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 7.25a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z" />
    <path d="M14.5 7.25v10.5a3.75 3.75 0 0 1-7.5 0" />
  </svg>
);

// Logo Component
const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className=" p-2 rounded-lg">
       <Image
        src="/UnboxMaroc-png.png" // Correct path for files in the `public` directory
        alt="Unbox Maroc Logo"    // Essential for accessibility (a11y)
        width={40}                // Required for layout stability
        height={40}               // Required for layout stability
        priority                  // Optional: Preload logo if it's above the fold
      />
    </div>
    <span className="text-2xl font-bold text-white">Unbox Maroc</span>
  </div>
);

// Header Component
const Header = ({ setPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Products', page: 'products' },
    { name: 'Contact', page: 'contact' },
  ];

  const NavLink = ({ page, name }) => (
    <button
      onClick={() => {
        setPage(page);
        setIsMenuOpen(false);
      }}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        currentPage === page
          ? 'bg-blue-600 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {name}
    </button>
  );

  return (
    <header className="bg-gray-800/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => setPage('home')} aria-label="Go to homepage">
              <Logo />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => <NavLink key={link.page} {...link} />)}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
             <SocialLink href="https://www.instagram.com/unboxmaroc" icon={Instagram} aria-label="Instagram" />
             <SocialLink href="https://www.tiktok.com/@unboxmaroc" icon={TikTokIcon} aria-label="TikTok" />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <NavLink key={link.page} {...link} />)}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
             <div className="flex items-center justify-center space-x-4">
                <SocialLink href="https://www.instagram.com/unboxmaroc" icon={Instagram} aria-label="Instagram" />
                <SocialLink href="https://www.tiktok.com/@unboxmaroc" icon={TikTokIcon} aria-label="TikTok" />
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Footer Component
const Footer = ({ setPage }) => (
  <footer className="bg-gray-800 text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <button onClick={() => setPage('home')} className="mb-4">
            <Logo />
          </button>
          <p className="text-gray-400 text-sm">Your trusted source for the latest tech and digital goods in Morocco.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><button onClick={() => setPage('home')} className="text-base text-gray-300 hover:text-white">Home</button></li>
            <li><button onClick={() => setPage('products')} className="text-base text-gray-300 hover:text-white">Products</button></li>
            <li><button onClick={() => setPage('contact')} className="text-base text-gray-300 hover:text-white">Contact</button></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-gray-400" />
              <a href="tel:0767017041" className="text-base text-gray-300 hover:text-white">0767017041</a>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-gray-400" />
              <a href="mailto:unbox.maroc@gmail.com" className="text-base text-gray-300 hover:text-white">unbox.maroc@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase">Follow Us</h3>
          <div className="mt-4 flex space-x-4">
            <SocialLink href="https://www.instagram.com/unboxmaroc" icon={Instagram} aria-label="Instagram" />
            <SocialLink href="https://www.tiktok.com/@unboxmaroc" icon={TikTokIcon} aria-label="TikTok" />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Unbox Maroc. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Home Page Component
const HomePage = ({ setPage }) => {
  const homeRef = useRef(null);

  useEffect(() => {
    // Ensure GSAP is loaded before using it
    const interval = setInterval(() => {
        if (window.gsap) {
            clearInterval(interval);
            const tl = window.gsap.timeline();
            tl.from(".hero-title", { opacity: 0, y: 50, duration: 0.8, ease: "power3.out" })
              .from(".hero-subtitle", { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" }, "-=0.6")
              .from(".hero-button", { opacity: 0, scale: 0.8, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6");

            window.gsap.utils.toArray('.service-card').forEach((card, i) => {
                window.gsap.from(card, {
                    opacity: 0,
                    y: 100,
                    duration: 0.6,
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });
             // Add similar animations for other sections if ScrollTrigger is available
        }
    }, 100);
  }, []);

  const services = [
    { icon: Smartphone, title: 'Brand New iPhones', description: 'Get the latest iPhone models, sealed and guaranteed, at competitive prices.' },
    { icon: Gamepad2, title: 'PlayStation Consoles', description: 'Explore the world of gaming with PS4, PS5, and a wide range of accessories.' },
    { icon: Tag, title: 'Digital Products', description: 'Instant delivery on digital codes, game subscriptions, and software licenses.' },
  ];
  
  const whyChooseUs = [
    { icon: PackageCheck, title: 'Authentic Products', description: 'All our products are 100% genuine, sealed, and come with a warranty.' },
    { icon: Zap, title: 'Fast Delivery', description: 'Get your order delivered to your doorstep anywhere in Morocco, quickly and safely.' },
    { icon: ShieldCheck, title: 'Secure Payment', description: 'We offer secure payment options for a worry-free shopping experience.' },
  ];

  const testimonials = [
    { name: 'Amine K.', quote: 'Excellent service! I bought an iPhone 14 Pro Max and it was delivered the same day. Highly recommended.', rating: 5 },
    { name: 'Fatima Z.', quote: 'The best place to buy PlayStation games. They have a great selection and fast digital delivery.', rating: 5 },
    { name: 'Youssef B.', quote: 'Trustworthy and professional. I was hesitant to buy online but Unbox Maroc made the process smooth and secure.', rating: 5 },
  ];

  return (
    <div className="bg-gray-900 text-white" ref={homeRef}>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
         <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
         <div 
            className="absolute inset-0 bg-cover bg-center transform scale-110" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2970&auto=format&fit=crop')"}}>
        </div>
        <div className="relative z-20">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 hero-title">Unbox the Future. Today.</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8 hero-subtitle">Your premier destination for the latest iPhones, PlayStation consoles, and digital products in Morocco.</p>
          <button onClick={() => setPage('products')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 hero-button">
            Shop Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">What We Offer</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Top-tier products with service you can trust.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg text-center service-card">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">Why Choose Unbox Maroc?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">We are committed to providing the best experience.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg text-center service-card transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">Trusted by Tech Enthusiasts</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">See what our happy customers have to say.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col service-card">
                <div className="flex-grow">
                    <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                    </div>
                    <p className="text-gray-300">"{testimonial.quote}"</p>
                </div>
                <p className="mt-6 font-bold text-right">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Products Page Component
const ProductsPage = () => {
    const productsRef = useRef(null);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (window.gsap) {
                clearInterval(interval);
                window.gsap.from(productsRef.current.children, {
                    opacity: 0,
                    y: 50,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power3.out'
                });
            }
        }, 100);
    }, []);

  const products = [
    { id: 1, name: 'iPhone 15 Pro', price: '13,500 MAD', category: 'iphone', image: 'https://images.unsplash.com/photo-1695026902999-e4990393c241?q=80&w=2864&auto=format&fit=crop' },
    { id: 2, name: 'iPhone 15', price: '10,000 MAD', category: 'iphone', image: 'https://images.unsplash.com/photo-1694653759538-63637e546747?q=80&w=2864&auto=format&fit=crop' },
    { id: 3, name: 'iPhone 14 Pro Max', price: '12,000 MAD', category: 'iphone', image: 'https://images.unsplash.com/photo-1678822497120-5534b4ab44a2?q=80&w=2864&auto=format&fit=crop' },
    { id: 4, name: 'PlayStation 5 Console', price: '7,500 MAD', category: 'playstation', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2970&auto=format&fit=crop' },
    { id: 5, name: 'PlayStation Portal', price: '3,500 MAD', category: 'playstation', image: 'https://images.unsplash.com/photo-1700223882255-2c505151b54a?q=80&w=2864&auto=format&fit=crop' },
    { id: 6, name: 'DualSense Controller', price: '800 MAD', category: 'playstation', image: 'https://images.unsplash.com/photo-1605901309584-818e5236a8a4?q=80&w=2864&auto=format&fit=crop' },
    { id: 7, name: 'PlayStation Plus (1 Year)', price: '600 MAD', category: 'digital', image: 'https://images.unsplash.com/photo-1558503224-f7483730d9a6?q=80&w=2864&auto=format&fit=crop' },
    { id: 8, name: 'EA FC 24 (Digital Code)', price: '750 MAD', category: 'digital', image: 'https://images.unsplash.com/photo-1690831889422-a2c61a52b83a?q=80&w=2864&auto=format&fit=crop' },
    { id: 9, name: 'App Store Gift Card', price: '500 MAD', category: 'digital', image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2864&auto=format&fit=crop' },
  ];

  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter(product => filter === 'all' || product.category === filter);

  const categories = [
    { key: 'all', name: 'All Products' },
    { key: 'iphone', name: 'iPhones' },
    { key: 'playstation', name: 'PlayStation' },
    { key: 'digital', name: 'Digital Codes' },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Our Products</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Find the latest tech and digital goods right here.</p>
        </div>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {categories.map(cat => (
             <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  filter === cat.key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" ref={productsRef}>
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform transition duration-500 hover:scale-105 hover:shadow-blue-500/20">
              <div className="relative">
                <img className="w-full h-64 object-cover" src={product.image} alt={product.name} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x600/cccccc/ffffff?text=Image+Not+Found'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-2xl font-semibold text-blue-400 mb-4">{product.price}</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmissionStatus('success');
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmissionStatus(null), 5000);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Have questions? We'd love to hear from you. Reach out and we'll get back to you shortly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-8 w-8 text-blue-400 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Phone Number</h3>
                  <a href="tel:0767017041" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">0767017041</a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-8 w-8 text-blue-400 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Email Address</h3>
                  <a href="mailto:unbox.maroc@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">unbox.maroc@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <Instagram className="h-8 w-8 text-blue-400 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Instagram</h3>
                  <a href="https://www.instagram.com/unboxmaroc" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">@unboxmaroc</a>
                </div>
              </div>
               <div className="flex items-start">
                <TikTokIcon className="h-8 w-8 text-blue-400 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">TikTok</h3>
                  <a href="https://www.tiktok.com/@unboxmaroc" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">@unboxmaroc</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="w-full bg-gray-700 border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="w-full bg-gray-700 border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows="4" required value={formState.message} onChange={handleChange} className="w-full bg-gray-700 border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Your Message"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-colors duration-300">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
            {submissionStatus === 'success' && (
              <div className="mt-4 text-center text-green-400 bg-green-900/50 p-3 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


// Main App Component
export default function App() {
  useGsap(); // Load GSAP library
  const [page, setPage] = useState('home'); // 'home', 'products', 'contact'

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage setPage={setPage} />;
      case 'products':
        return <ProductsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="bg-gray-900">
      <Header setPage={setPage} currentPage={page} />
      <main>
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
