/**
 * Motif de logo répété en fond, très léger et animé — le décor "franchise"
 * demandé par le client (comme un mur de restaurant à l'identité déclinée en
 * motif), pas une texture générique.
 */
export default function LogoPattern({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="logo-pattern absolute -inset-24 opacity-[0.06]"
        style={{
          backgroundImage: "url(/images/poulcook-logo-rond.png)",
          backgroundSize: "96px 100px",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
