import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
      <h2 className="text-3xl font-bold text-white mb-8">Latest Tracks</h2>
      
      <div className="space-y-6">
        {[
          { title: "Electric Dreams", duration: "3:45" },
          { title: "Neon Nights", duration: "4:12" },
          { title: "Pulse", duration: "3:58" }
        ].map((track, index) => (
          <div 
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-4">
              <button 
                className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying && index === 0 ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <div>
                <div className="text-white font-semibold">{track.title}</div>
                <div className="text-white/60 text-sm">DJ KVI</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-white/60">{track.duration}</div>
              <div className="w-32 h-1 bg-white/20 rounded-full">
                <div className="w-1/3 h-full bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-xl p-4">
        <div className="flex items-center gap-4">
          <button className="text-white/60 hover:text-yellow-400 transition">
            <SkipBack size={20} />
          </button>
          <button 
            className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className="text-white/60 hover:text-yellow-400 transition">
            <SkipForward size={20} />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <Volume2 className="text-white/60" size={20} />
          <div className="w-32 h-1 bg-white/20 rounded-full">
            <div className="w-2/3 h-full bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;