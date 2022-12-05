const Playlists = () => {
  return (
    <div className="lg:w-1/2 m-auto md:w-3/5">
      <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1F0sijgNaJdgit?utm_source=generator"
        width="100%"
        height="380"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Playlists;
