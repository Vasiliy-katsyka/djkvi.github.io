import React from 'react';

interface SpotifyEmbedProps {
  trackId: string;
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({ trackId }) => {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-yellow-500/10">
      <iframe
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
        width="100%"
        height="380"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default SpotifyEmbed;