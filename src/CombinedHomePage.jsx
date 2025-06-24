import React, { useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

// Mock components for Button and Card since they are imported from a UI library
const Button = ({ className, children, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const Card = ({ className, children, ...props }) => (
    <div className={className} {...props}>
        {children}
    </div>
);

// --- SVG Icon Components ---
const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
);

const IconUser = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
    </svg>
);

const IconShoppingCart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
);

const IconFacebook = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603 0 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
    </svg>
);

const IconTwitter = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
    </svg>
);

const IconInstagram = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372.525-.204.97-.478 1.416-.923.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.231s.008-2.389.046-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.884a1.161 1.161 0 1 0 0 2.322 1.161 1.161 0 0 0 0-2.322zM8 4.884a3.116 3.116 0 1 0 0 6.232 3.116 3.116 0 0 0 0-6.232zm0 5.116a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
    </svg>
);

const CHEMISTRY_GROUPS = [
  { name: "Aldehydes", icon: "🧪", summary: "Antiviral, calming, anti-inflammatory. Skin soothing and gentle immune support.", details: "Citral-rich oils like lemongrass and citronella offer gentle yet effective antiviral and calming properties. Use diluted on skin.", link: "/shop-aldehydes" },
  { name: "Alcohols", icon: "🧴", summary: "Moderate antimicrobial. Antibacterial, antifungal, gentle immune support.", details: "Basil, geranium, and tea tree oils offer broad support with gentle action. Well tolerated for daily use.", link: "/shop-alcohols" },
  { name: "Terpenes", icon: "🌿", summary: "Antiseptic, antiviral, and skin-friendly. Mild diuretic, can refresh and purify.", details: "Includes most citrus oils—uplifting, cleansing, and great for skin and home.", link: "/shop-terpenes" },
  { name: "Ketones", icon: "🔬", summary: "Cell regenerative, mucolytic. Strong, avoid in pregnancy/asthma.", details: "Found in sage and mugwort. Use with professional guidance.", link: "/shop-ketones" },
  { name: "Esters", icon: "💧", summary: "Antimicrobial, anti-inflammatory, relaxing. Safe for children.", details: "Lavender and roman chamomile are rich in esters—excellent for stress and tension relief.", link: "/shop-esters" },
  { name: "Phenols", icon: "🔥", summary: "Strongest natural antimicrobial. Antibacterial, antifungal. Potent and warming.", details: "Oregano and thyme oils—best for immune defense, use well diluted.", link: "/shop-phenols" },
  { name: "Phenyl-Propane Ethers", icon: "🍃", summary: "Antispasmodic. Supports cramps and asthma relief.", details: "Includes anise and fennel. Gentle for digestion and muscle relaxation.", link: "/shop-phenyl-propane-ethers" },
  { name: "Phenyl-Propane", icon: "🚴", summary: "Strongest antimicrobial. Antibacterial, antiviral, antifungal. Warming.", details: "Cinnamon and clove oils—highly potent, excellent for seasonal defense.", link: "/shop-phenyl-propane" },
  { name: "Sesquiterpenes", icon: "🟦", summary: "Strong anti-inflammatory, calming. Cell regenerative.", details: "Includes frankincense and vetiver. Supports skin repair and calm.", link: "/shop-sesquiterpenes" },
];

export default function CombinedHomePage() {
  const [hovered, setHovered] = useState(null);
  
  return (
    <main className="w-full bg-white text-black font-sans">
      {/* Announcement Bar */}
      <div className="w-full bg-red-700 text-white text-center py-2 tracking-wide text-sm font-semibold uppercase">
        Clinically Proven | French Medical Aromatherapy | Certified Organic
      </div>

      {/* --- New Header --- */}
      <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
        {/* Top Tier: Search, Logo, Actions */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                 {/* Left: Search Bar */}
                <div className="flex-1 flex justify-start">
                     <form className="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-1.5 focus-within:ring-2 focus-within:ring-red-400" role="search" aria-label="Site Search">
                        <input type="search" placeholder="Search" aria-label="Search" className="bg-transparent text-gray-700 placeholder-gray-500 outline-none px-2 py-1 w-32 md:w-48" />
                        <button type="submit" className="text-gray-500 hover:text-gray-700"><IconSearch /></button>
                    </form>
                </div>

                {/* Center: Logo */}
                <div className="flex-shrink-0 px-4">
                     <div className="flex flex-col items-center">
                        <img src="/images/logo.png" alt="Melissa’s Botanicals Logo" className="w-12 h-12 rounded mb-1" />
                        <span className="text-2xl font-bold tracking-tight text-gray-900">
                            MELISSA’S Botanicals
                        </span>
                        <span className="text-xs text-gray-500 tracking-widest uppercase mt-1">
                            IT’S A REVOLUTION IN WELLNESS
                        </span>
                    </div>
                </div>
                
                {/* Right: Actions */}
                <div className="flex-1 flex items-center justify-end gap-4">
                    <a href="#account" aria-label="Account" className="text-gray-700 text-xl hover:text-red-700"><IconUser /></a>
                    <a href="#cart" aria-label="Cart" className="text-gray-700 text-xl hover:text-red-700 relative">
                        <IconShoppingCart />
                        <span className="absolute -top-2 -right-2 bg-red-700 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">2</span>
                    </a>
                </div>
            </div>
        </div>

        {/* Bottom Tier: Navigation Links */}
         <div className="hidden md:flex items-center justify-center border-t border-gray-100 py-3">
             <ul className="flex items-center gap-x-8 text-base font-medium text-gray-700">
                  <li><a href="#home" className="hover:text-red-700">Home</a></li>
                  <li className="relative group">
                    <button className="flex items-center hover:text-red-700">Essential Oils<svg width="12" height="8" className="ml-1.5" fill="none" stroke="currentColor"><path d="M1 1l5 5 5-5" strokeWidth="1.5" /></svg></button>
                    <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                      <a href="#singles" className="block px-4 py-2 hover:bg-red-50">Singles</a>
                      <a href="#blends" className="block px-4 py-2 hover:bg-red-50">Blends</a>
                    </div>
                  </li>
                  <li><a href="#formulas" className="hover:text-red-700">Formulas</a></li>
                  <li><a href="#hydrosols" className="hover:text-red-700">Hydrosols</a></li>
                  <li><a href="#kits" className="hover:text-red-700">Kits</a></li>
                  <li className="relative group">
                    <button className="flex items-center hover:text-red-700">About<svg width="12" height="8" className="ml-1.5" fill="none" stroke="currentColor"><path d="M1 1l5 5 5-5" strokeWidth="1.5" /></svg></button>
                    <div className="absolute left-0 mt-2 w-52 bg-white border shadow-lg rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                      <a href="#story" className="block px-4 py-2 hover:bg-red-50">Our Story</a>
                      <a href="#certifications" className="block px-4 py-2 hover:bg-red-50">Certifications</a>
                      <a href="#sourcing" className="block px-4 py-2 hover:bg-red-50">Sourcing</a>
                    </div>
                  </li>
                 <li>
                    <Button className="bg-red-700 text-white rounded-full px-5 py-2 font-semibold shadow hover:bg-red-800 transition-all text-sm">
                        Chemistry Reference Chart
                    </Button>
                </li>
             </ul>
        </div>
      </header>

      {/* GIF Placeholder Grid */}
      <section className="w-full mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <img src="/images/promo-gif-1.gif" alt="Promotional GIF 1" className="w-full h-auto object-cover" />
            <img src="/images/promo-gif-2.gif" alt="Promotional GIF 2" className="w-full h-auto object-cover" />
            <img src="/images/promo-gif-3.gif" alt="Promotional GIF 3" className="w-full h-auto object-cover" />
            <img src="/images/promo-gif-4.gif" alt="Promotional GIF 4" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Feature Product Section */}
      <section className="w-full mt-12 mb-12 px-4">
        <div className="bg-purple-50 min-h-[300px] flex flex-col md:flex-row items-center justify-center w-full rounded-2xl p-8 gap-8">
            <img src="/images/feature-serum.jpg" alt="Facial Rejuvenation Serum" className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-lg shadow-lg"/>
            <div className="text-center md:text-left">
                <h2 className="text-3xl text-purple-800 font-bold mb-3">Feature Product</h2>
                <p className="text-xl text-purple-700 mb-4">Facial Rejuvenation Serum</p>
                <Button className="bg-purple-600 text-white rounded-full px-8 py-3 font-semibold shadow hover:bg-purple-700 transition-all">Shop Now</Button>
            </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="w-full mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black tracking-tight">Product Lines</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-12">
            <Card className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src="/images/product-line-oils.jpg" alt="Single Essential Oils" className="w-full h-48 object-cover rounded-md mb-4"/>
                <h3 className="text-xl font-semibold text-gray-800">Single Essential Oils</h3>
            </Card>
            <Card className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src="/images/product-line-formulas.jpg" alt="Formulas" className="w-full h-48 object-cover rounded-md mb-4"/>
                <h3 className="text-xl font-semibold text-gray-800">Formulas</h3>
            </Card>
            <Card className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src="/images/product-line-hydrosols.jpg" alt="Hydrosols" className="w-full h-48 object-cover rounded-md mb-4"/>
                <h3 className="text-xl font-semibold text-gray-800">Hydrosols</h3>
            </Card>
            <Card className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src="/images/product-line-kits.jpg" alt="Kits" className="w-full h-48 object-cover rounded-md mb-4"/>
                <h3 className="text-xl font-semibold text-gray-800">Kits</h3>
            </Card>
        </div>
      </section>

      {/* Chemistry Chart Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-black tracking-tight">
            What Can Our Chemistry Do For You?
          </h2>
          <p className="text-center text-base text-gray-600 mb-10 max-w-2xl mx-auto">
            Explore the science behind every drop. Hover over each icon to discover the unique benefits of each chemistry group.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-6 justify-items-center items-start w-full max-w-6xl mx-auto mb-16">
            {CHEMISTRY_GROUPS.map((group, idx) => (
              <motion.div
                key={group.name}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                initial={{ y: 0 }}
                whileHover={{ y: -6, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <button
                  className="w-24 h-24 flex flex-col items-center justify-center rounded-full bg-white shadow-md border-2 border-transparent transition-all duration-200 hover:border-red-700"
                  tabIndex={0}
                  aria-label={`Learn more about ${group.name}`}
                >
                  <span className="text-3xl mb-1">{group.icon}</span>
                  <span className="font-medium text-xs text-center text-gray-800 break-words">{group.name}</span>
                </button>
                {hovered === idx && (
                  <motion.div
                    className="absolute z-20 w-72 left-1/2 -translate-x-1/2 top-[110%] bg-white text-gray-900 border border-gray-200 rounded-2xl shadow-xl px-5 py-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <div className="font-bold mb-1 flex items-center gap-2 text-red-700">
                      <Info className="w-4 h-4" /> More Info
                    </div>
                    <div className="mb-2 text-base">{group.summary}</div>
                    <div className="mb-2 text-xs text-gray-600">{group.details}</div>
                    <a
                      href={group.link}
                      className="inline-block text-red-700 underline text-xs mt-1 hover:text-red-900"
                    >Shop products with this chemistry</a>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          {/* Testimonials placeholders */}
          <div className="flex flex-col md:flex-row gap-8 mt-8 w-full">
            <Card className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                <img src="/images/testimonial-1.jpg" alt="Testimonial placeholder 1" className="w-full h-32 object-cover rounded-md mb-4"/>
                <p className="text-gray-600 italic">"This is a wonderful product! It has changed my life for the better. Highly recommended."</p>
                <p className="text-right font-semibold text-gray-800 mt-2">- Jane Doe</p>
            </Card>
             <Card className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                <img src="/images/testimonial-2.jpg" alt="Testimonial placeholder 2" className="w-full h-32 object-cover rounded-md mb-4"/>
                <p className="text-gray-600 italic">"I was skeptical at first, but now I'm a believer. Fantastic quality and great results."</p>
                <p className="text-right font-semibold text-gray-800 mt-2">- John Smith</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup & Footer Section */}
      <footer className="w-full mt-16">
        {/* Newsletter Signup */}
        <section className="w-full bg-gray-100 rounded-t-3xl py-12 px-4 flex flex-col items-center justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">Sign Up For Our Email Newsletter</h3>
          <button className="bg-white border border-red-700 text-red-700 font-semibold rounded-full px-10 py-4 text-xl shadow hover:bg-red-50 transition mb-4 flex items-center gap-2">
            Sign Up Today <span className="text-2xl">→</span>
          </button>
        </section>
        {/* FDA Disclaimer */}
        <section className="w-full bg-red-700 py-8 px-8">
          <p className="max-w-5xl mx-auto text-white italic text-sm md:text-base leading-relaxed">
            The FDA has not evaluated the statements on this website. No claims are made by Melissa’s Botanicals as to the medicinal value of any products from Melissa’s Botanicals. The information presented here is for educating our customers about the traditional uses of essential oils and is not intended to diagnose, treat, cure, or prevent any disease. You are responsible for understanding the safe application of these products. If you have any questions, please call or email us for further information.
          </p>
        </section>
        {/* Full Footer Navigation */}
        <section className="w-full bg-gray-900 text-gray-300 py-12 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
              <div className="flex items-center mb-2">
                 <img src="/images/logo-footer.png" alt="Melissa’s Botanicals Logo" className="w-10 h-10 rounded" />
                 <span className="text-xl font-bold ml-2 text-white">MELISSA’S Botanicals</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">&copy; {new Date().getFullYear()} Melissa’s Botanicals. All Rights Reserved.</p>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col items-center md:items-start">
                <h4 className="font-semibold text-white mb-3">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <a href="#facebook" aria-label="Facebook" className="hover:text-white"><IconFacebook /></a>
                  <a href="#twitter" aria-label="Twitter" className="hover:text-white"><IconTwitter /></a>
                  <a href="#instagram" aria-label="Instagram" className="hover:text-white"><IconInstagram /></a>
                </div>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}
