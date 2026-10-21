export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="ambient-background">
      <div className="ambient-background__grid" />
      <div className="ambient-background__orb ambient-background__orb--one" />
      <div className="ambient-background__orb ambient-background__orb--two" />
      <div className="ambient-background__orb ambient-background__orb--three" />
      <video
        className="ambient-background__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video-poster.svg"
      >
        <source src="/videos/ai-background.mp4" type="video/mp4" />
      </video>
      <div className="ambient-background__shade" />
    </div>
  );
}
