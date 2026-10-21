export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="ambient-background">
      <div className="ambient-background__grid" />
      <div className="ambient-background__orb ambient-background__orb--one" />
      <div className="ambient-background__orb ambient-background__orb--two" />
      <div className="ambient-background__orb ambient-background__orb--three" />
    </div>
  );
}
