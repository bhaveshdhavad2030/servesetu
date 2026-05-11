interface ServeLogoProps {
  size?: number
  color?: string
  className?: string
}

export default function ServeLogo({ size = 40, color = '#0071BD', className = '' }: ServeLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ServeSetu"
      role="img"
      className={className}
    >
      {/* Chimney */}
      <rect x="61" y="7" width="9" height="16" rx="2" fill={color} />

      {/* Roof */}
      <polygon points="11,49 50,17 89,49" fill={color} />

      {/* Walls */}
      <rect x="22" y="45" width="56" height="20" fill={color} />

      {/* Window — 2×2 white grid */}
      <rect x="27" y="30" width="6.5" height="5.5" rx="0.5" fill="white" />
      <rect x="34.5" y="30" width="6.5" height="5.5" rx="0.5" fill="white" />
      <rect x="27" y="36.5" width="6.5" height="5.5" rx="0.5" fill="white" />
      <rect x="34.5" y="36.5" width="6.5" height="5.5" rx="0.5" fill="white" />

      {/* ── S-flow section ── */}

      {/* Band 1 body (top, flows → right) */}
      <rect x="17" y="67" width="70" height="10" rx="5" fill={color} />

      {/* Band 1 ← arrowhead at left end */}
      <polygon points="7,72 18,66 18,78" fill={color} />

      {/* Left U-turn connector (bands 1 → 2) */}
      <rect x="8" y="67" width="12" height="28" rx="6" fill={color} />

      {/* Band 2 body (bottom, flows → right) */}
      <rect x="14" y="85" width="70" height="10" rx="5" fill={color} />

      {/* Band 2 → arrowhead at right end */}
      <polygon points="93,90 82,84 82,96" fill={color} />

      {/* Right partial connector (band 2 curves down, partially visible) */}
      <rect x="80" y="85" width="12" height="20" rx="6" fill={color} />

      {/* Bottom stub (start of band 3, partially visible) */}
      <rect x="8" y="90" width="30" height="10" rx="5" fill={color} />
    </svg>
  )
}
