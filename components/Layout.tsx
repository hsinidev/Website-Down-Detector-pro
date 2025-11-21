
import React, { useState, useCallback } from 'react';

// --- Modal Component ---
interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#0f172a] border border-indigo-500/30 rounded-2xl shadow-2xl shadow-indigo-500/20 w-full max-w-2xl max-h-[85vh] overflow-y-auto relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#0f172a]/95 backdrop-blur-md p-6 border-b border-indigo-500/20 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold font-orbitron text-indigo-300">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-6 text-gray-300 space-y-4 leading-relaxed text-sm md:text-base">
          {children}
        </div>
        <div className="sticky bottom-0 bg-[#0f172a] p-4 border-t border-indigo-500/20 text-right">
           <button onClick={onClose} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">Close</button>
        </div>
      </div>
    </div>
  );
};

// --- Background Component ---
const GalaxyBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#020010] via-[#090920] to-[#020010]">
    <style jsx global>{`
      @keyframes float {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        20% { opacity: 0.8; }
        80% { opacity: 0.8; }
        100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
      }
      .star {
        position: absolute;
        background: white;
        border-radius: 50%;
        animation: float linear infinite;
      }
    `}</style>
    {Array.from({ length: 100 }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 30 + 15;
      const delay = Math.random() * -30;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      return (
        <div
          key={i}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}vw`,
            top: `${top}vh`,
            boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    })}
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),transparent_50%)]"></div>
  </div>
);


// --- Layout Component ---
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = useCallback((modalId: string) => setActiveModal(modalId), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  const modalLinks = [
    { id: 'about', title: 'About' },
    { id: 'contact', title: 'Contact' },
    { id: 'guide', title: 'Guide' },
    { id: 'privacy', title: 'Privacy Policy' },
    { id: 'tos', title: 'Terms of Service' },
    { id: 'dmca', title: 'DMCA' },
  ];

  return (
    <div className="min-h-screen relative flex flex-col font-inter text-white">
      <GalaxyBackground />
      
      {/* Header */}
      <header className="relative z-30 w-full border-b border-white/10 bg-[#020010]/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white font-orbitron tracking-wider">
              DOWN<span className="text-indigo-400">DETECTOR</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {modalLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => openModal(link.id)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.title}
              </button>
            ))}
          </nav>

          <div className="md:hidden">
            <select 
              onChange={(e) => {
                if (e.target.value) {
                  openModal(e.target.value);
                  e.target.value = ""; 
                }
              }} 
              className="bg-gray-800 text-white border border-gray-600 rounded-lg p-2 text-sm focus:outline-none focus:border-indigo-500"
            >
              <option value="">Menu</option>
              {modalLinks.map(link => <option key={link.id} value={link.id}>{link.title}</option>)}
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col">
        {children}
      </div>

      {/* Footer */}
      <footer className="relative z-30 bg-[#020010] border-t border-white/10 py-8 px-4">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-4 text-center">
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Website Down Detector. All rights reserved.
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <p className="text-gray-300 font-medium">
              <a 
                href="https://github.com/hsinidev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                Powered by HSINI MOHAMED
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </p>
            <p className="text-xs text-gray-500 font-roboto-mono">
              <a href="https://doodax.com" className="hover:text-white transition-colors">doodax.com</a> | <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Modals - Expanded Content */}
      <Modal title="About Us" isOpen={activeModal === 'about'} onClose={closeModal}>
        <p className="mb-4">Welcome to the <strong>Website Down Detector</strong>, a premier diagnostic utility engineered by HSINI MOHAMED. In an interconnected world, access to information is paramount. When a website becomes unreachable, it disrupts workflows, businesses, and communication. We realized the need for a tool that cuts through the noise of local caching and ISP issues to provide the cold, hard truth: "Is it down, or is it just me?"</p>
        <p className="mb-4">Our infrastructure utilizes simulated server-side nodes to attempt connections from a neutral network environment. This ensures that the results you see are not influenced by your browser extensions, local firewall settings, or temporary internet dropouts.</p>
        <p className="font-semibold text-indigo-300">Our Mission:</p>
        <p>To provide the fastest, most accurate website uptime monitoring service available to the public for free, ensuring transparency and reliability in the digital ecosystem.</p>
      </Modal>
      
      <Modal title="Contact Us" isOpen={activeModal === 'contact'} onClose={closeModal}>
        <p>We value your feedback and are here to assist with any inquiries regarding the Website Down Detector.</p>
        <div className="mt-6 space-y-4 bg-white/5 p-4 rounded-lg border border-white/10">
            <div>
                <h4 className="font-bold text-indigo-300">General Inquiries & Support</h4>
                <p>Email: <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a></p>
            </div>
            <div>
                <h4 className="font-bold text-indigo-300">Project Portfolio</h4>
                <p>Website: <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">doodax.com</a></p>
            </div>
            <div>
                <h4 className="font-bold text-indigo-300">Development & Code</h4>
                <p>GitHub: <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">github.com/hsinidev</a></p>
            </div>
        </div>
      </Modal>
      
      <Modal title="User Guide" isOpen={activeModal === 'guide'} onClose={closeModal}>
        <div className="space-y-6">
            <section>
                <h3 className="text-lg font-bold text-white mb-2">1. Checking a Website</h3>
                <p>Enter the domain name (e.g., <code>google.com</code>) or the full URL (e.g., <code>https://example.com/page</code>) into the search bar on the homepage. Click the "Check Status" button.</p>
            </section>
            <section>
                <h3 className="text-lg font-bold text-white mb-2">2. Interpreting Results</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-green-400">UP:</strong> The server responded with a 2xx Success code. The site is operational.</li>
                    <li><strong className="text-red-400">DOWN:</strong> The server timed out, refused connection, or returned a 5xx Server Error.</li>
                    <li><strong className="text-yellow-400">ERROR/INVALID:</strong> The URL format is incorrect or the domain does not exist.</li>
                </ul>
            </section>
            <section>
                <h3 className="text-lg font-bold text-white mb-2">3. Global Simulation</h3>
                <p>The tool displays results as if checked from major global hubs (London, NY, Tokyo). While simulated in this demo, it represents how global traffic routing works.</p>
            </section>
        </div>
      </Modal>
      
      <Modal title="Privacy Policy" isOpen={activeModal === 'privacy'} onClose={closeModal}>
        <div className="space-y-4 text-sm text-gray-300">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <p>At Website Down Detector (doodax.com), accessible from our service, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Down Detector and how we use it.</p>
            
            <h4 className="text-white font-bold mt-4">Log Files</h4>
            <p>Website Down Detector follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>
            
            <h4 className="text-white font-bold mt-4">Cookies and Web Beacons</h4>
            <p>Like any other website, Website Down Detector uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            
            <h4 className="text-white font-bold mt-4">Data Security</h4>
            <p>We do not sell, trade, or rent your personal identification information to others. We perform URL checks anonymously. The specific URLs you check are not permanently stored or associated with your user profile.</p>
            
            <h4 className="text-white font-bold mt-4">Contact Information</h4>
            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us via email at <strong>hsini.web@gmail.com</strong>.</p>
        </div>
      </Modal>
      
      <Modal title="Terms of Service" isOpen={activeModal === 'tos'} onClose={closeModal}>
        <div className="space-y-4 text-sm text-gray-300">
            <p><strong>Effective Date: {new Date().toLocaleDateString()}</strong></p>
            
            <h4 className="text-white font-bold mt-4">1. Terms</h4>
            <p>By accessing this Website, accessible from our domain, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.</p>
            
            <h4 className="text-white font-bold mt-4">2. Use License</h4>
            <p>Permission is granted to temporarily download one copy of the materials on Website Down Detector's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-5">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display;</li>
                <li>attempt to reverse engineer any software contained on Website Down Detector's Website;</li>
                <li>remove any copyright or other proprietary notations from the materials.</li>
            </ul>
            
            <h4 className="text-white font-bold mt-4">3. Disclaimer</h4>
            <p>All the materials on Website Down Detector's Website are provided "as is". Website Down Detector makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Website Down Detector does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
            
            <h4 className="text-white font-bold mt-4">4. Limitations</h4>
            <p>Website Down Detector or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Website Down Detector's Website, even if Website Down Detector or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage.</p>
        </div>
      </Modal>
      
      <Modal title="DMCA Policy" isOpen={activeModal === 'dmca'} onClose={closeModal}>
        <div className="space-y-4 text-sm text-gray-300">
            <p>Website Down Detector (doodax.com) respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement of any person.</p>
            <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Infringement" via email to <strong>hsini.web@gmail.com</strong>.</p>
            <p>You must include in your notice a detailed description of the alleged infringement. You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing your copyright.</p>
        </div>
      </Modal>
    </div>
  );
};

export default Layout;
