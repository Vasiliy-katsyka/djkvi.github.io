import React, { useEffect } from 'react';
import { Music4, Play, Calendar, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import MerchSection from './components/MerchSection';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-yellow-900 to-amber-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section id="home" className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
          <div className="lg:w-1/2 space-y-6 z-10 fade-up">
            <h1 className="text-6xl lg:text-8xl font-bold text-yellow-400 drop-shadow-lg">
              DJ KVI
            </h1>
            <p className="text-xl text-white max-w-lg font-medium">
              Welcome to my music world! Experience the fusion of electronic beats and melodic rhythms. 
              Here you'll find my latest releases and more. Stay tuned for updates and new tracks.
            </p>
            <div className="flex gap-4">
              <a href="#releases" className="bg-yellow-500/20 backdrop-blur-md px-6 py-3 rounded-full text-yellow-400 hover:bg-yellow-500/30 transition flex items-center gap-2 font-medium">
                <Play size={20} /> Latest Release
              </a>
              <a href="#shows" className="bg-yellow-500 px-6 py-3 rounded-full text-black hover:bg-yellow-400 transition flex items-center gap-2 font-medium">
                <Calendar size={20} /> Book Event
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-md mx-auto fade-in">
            <div className="relative w-full aspect-square">
              <img 
                src="https://cdn.midjourney.com/7e4f5bee-cb80-418a-9bd4-5151c92da329/0_0.png"
                alt="DJ KVI"
                className="rounded-full w-full h-full object-cover border-8 border-yellow-500/20"
              />
            </div>
          </div>
        </section>

        {/* Releases Section */}
        <section id="releases" className="py-24 space-y-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8 fade-up">Latest Releases</h2>
          
          {/* Album Feature */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-yellow-500/10 hover:bg-black/60 transition mb-12 fade-up">
            <a 
              href="https://unchainedmusic.lnk.to/be2e1352ba81094448ab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="md:w-1/4 w-full">
                <div className="aspect-square w-full overflow-hidden">
                  <img 
                    src="https://unchainedmusic.s3.us-west-1.wasabisys.com/65d9e0af2b0820c1533d8c7a/release/6729ff7d096364748e934802/ReleasePreviewCover/2024-11-05T11%3A22%3A23.074Z2024-11-05T11%3A22%3A23.074Z15766cab9df0e894964ff257037a6bf1.jpg"
                    alt="Afterglow Album"
                    className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Afterglow - The Album</h3>
                <p className="text-yellow-100/90 text-lg mb-4">Experience the journey through sound with my latest album featuring 5 tracks of folk and pop music!</p>
                <span className="text-yellow-400 font-medium">Listen Now →</span>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              {
                title: "One",
                link: "https://unchainedmusic.lnk.to/e599c621f0b24bb3568e",
                image: "https://cdn.midjourney.com/71fb7e83-262b-476d-9aba-309997c2a590/0_2.png"
              },
              {
                title: "Aegean Sea",
                link: "https://unchainedmusic.lnk.to/ebce24c2caa770cc6de1",
                image: "https://unchainedmusic.s3.us-west-1.wasabisys.com/65d9e0af2b0820c1533d8c7a/release/67277630938f84404cdd181f/ReleasePreviewCover/2024-11-03T13%3A11%3A48.176Z2024-11-03T13%3A11%3A48.176Z4ff13d06a03a8e63a28a6e0c614c2cdb.png"
              },
              {
                title: "Unbreakable",
                link: "https://unchainedmusic.lnk.to/03ae0ae6915c748b023a",
                image: "https://unchainedmusic.s3.us-west-1.wasabisys.com/65d9e0af2b0820c1533d8c7a/release/670c037b1ab9908ff794803d/ReleasePreviewCover/2024-10-13T17%3A29%3A35.989Z2024-10-13T17%3A29%3A35.989Zf4a4cf1c8eaee62385aa0a85c7960c93.png"
              },
              {
                title: "Login",
                link: "https://unchainedmusic.lnk.to/ab71a0598d8b0d871a57",
                image: "https://unchainedmusic.s3.us-west-1.wasabisys.com/65d9e0af2b0820c1533d8c7a/release/670fe1fbaed05d2e028da109/ReleasePreviewCover/2024-10-16T15%3A56%3A20.783Z2024-10-16T15%3A56%3A20.783Z64d600bc705e483d936fc0ca2f68d908.jpg"
              },
              {
                title: "Last Thing I See",
                link: "https://unchainedmusic.lnk.to/0d15bab49f74b6b8b2b5",
                image: "https://unchainedmusic.s3.us-west-1.wasabisys.com/65d9e0af2b0820c1533d8c7a/release/66e74b75dd3c121dd4a1f7a8/ReleasePreviewCover/2024-09-15T21%3A03%3A03.703Z2024-09-15T21%3A03%3A03.703Zf50acd7953aa0cb0ad8e018542541c58.jpg"
              },
              {
                title: "Paper Bots",
                link: "https://unchainedmusic.lnk.to/a5c9b87e5dc54f7e3055",
                image: "https://unchainedmusic.s3.us-west-1.wasabisys.com/65d9e0af2b0820c1533d8c7a/release/670565840a3d61998600eae4/ReleasePreviewCover/2024-10-08T17%3A02%3A21.478Z2024-10-08T17%3A02%3A21.478Za39dca5df7116600fd84297705cf6d42.png"
              }
            ].map((release, index) => (
              <a 
                key={release.title}
                href={release.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow-500/10 hover:bg-black/60 transition fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square w-full">
                  <img 
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-2 sm:p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm sm:text-lg font-bold text-yellow-400">{release.title}</h3>
                    <Music4 className="text-yellow-400 opacity-0 group-hover:opacity-100 transition" size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Merch Section */}
        <section id="merch" className="py-24">
          <MerchSection />
        </section>

        {/* Shows Section */}
        <section id="shows" className="py-24">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8 fade-up">Upcoming Shows</h2>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/10 fade-up">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Afterglow Tour 2025</h3>
              <p className="text-yellow-100/90 text-lg">Join me on this incredible journey as we celebrate the release of Afterglow!</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/10">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-400">Peterhof, Russia</h4>
                  <p className="text-yellow-100/90">PGIA Arena</p>
                </div>
                <div className="text-right">
                  <p className="text-yellow-400 font-bold">28th February 2025</p>
                  <p className="text-yellow-100/90">14:30</p>
                </div>
              </div>
              <button className="mt-6 bg-yellow-500 px-6 py-2 rounded-full text-black hover:bg-yellow-400 transition font-medium">
                Book Tickets
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <ContactSection />
        </section>
      </main>

      <footer className="bg-black/60 backdrop-blur-md border-t border-yellow-500/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Music4 className="text-yellow-400" />
              <span className="text-yellow-400 font-bold text-xl">DJ KVI</span>
            </div>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/djkvi_official" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-yellow-100/80 hover:text-yellow-400 transition"
              >
                <Instagram size={24} />
              </a>
              <a href="#releases" className="text-yellow-100/80 hover:text-yellow-400 transition">
                <Music4 size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;