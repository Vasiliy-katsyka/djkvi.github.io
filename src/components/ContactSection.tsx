import React from 'react';
import { Mail, Youtube, Music4 } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/10">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8">Connect with Me</h2>
      <div className="space-y-6">
        <a 
          href="mailto:kviappgames@gmail.com"
          className="flex items-center gap-4 text-white hover:text-yellow-400 transition font-medium"
        >
          <Mail size={24} />
          <span>kviappgames@gmail.com</span>
        </a>
        
        <a 
          href="https://youtube.com/@djkviofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-white hover:text-yellow-400 transition font-medium"
        >
          <Youtube size={24} />
          <span>@djkviofficial</span>
        </a>

        <div className="pt-6">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Latest Updates</h3>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/10">
            <div className="flex items-center gap-3 mb-4">
              <Music4 className="text-yellow-400" />
              <span className="text-white font-semibold">New Release! Paper Boats</span>
            </div>
            <p className="text-yellow-100/90">
              Check out my latest tracks on Spotify and stay tuned for more upcoming releases!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;