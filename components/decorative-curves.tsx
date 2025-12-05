export function DecorativeCurves({
  position = "top-right",
}: {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
}) {
  const positionClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  }

  // Only render for top-right and bottom-left as per design
  if (position === "top-left" || position === "bottom-right") {
    return null
  }

  if (position === "bottom-left") {
    return (
      <svg
        className={`absolute pointer-events-none w-48 md:w-64 lg:w-80 h-auto ${positionClasses[position]}`}
        viewBox="0 0 300 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M300 150 C250 130, 200 100, 150 90 C100 80, 50 85, 0 100"
          stroke="url(#curveGradientBL1)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M300 130 C240 110, 180 85, 120 80 C60 75, 30 90, 0 110"
          stroke="url(#curveGradientBL2)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />
        <defs>
          <linearGradient id="curveGradientBL1" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(45, 212, 191)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(79, 70, 229)" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="curveGradientBL2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(45, 212, 191)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(79, 70, 229)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  // Top-right corner curves matching the design
  return (
    <svg
      className={`absolute pointer-events-none w-48 md:w-72 lg:w-96 h-auto ${positionClasses[position]}`}
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main flowing curve - starts from right edge, curves down */}
      <path
        d="M400 0 C380 20, 350 60, 300 80 C250 100, 180 110, 120 100 C60 90, 20 70, 0 50"
        stroke="url(#curveGradient1)"
        strokeWidth="2.5"
        fill="none"
        opacity="0.7"
      />
      {/* Secondary curve */}
      <path
        d="M400 30 C370 50, 330 90, 270 110 C210 130, 140 135, 80 120 C40 110, 10 90, 0 70"
        stroke="url(#curveGradient2)"
        strokeWidth="1.8"
        fill="none"
        opacity="0.5"
      />
      {/* Tertiary subtle curve */}
      <path
        d="M400 60 C360 85, 310 120, 240 140 C170 160, 100 155, 50 135 C20 125, 0 100, 0 90"
        stroke="url(#curveGradient3)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.35"
      />
      <defs>
        <linearGradient id="curveGradient1" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgb(79, 70, 229)" stopOpacity="0.1" />
          <stop offset="30%" stopColor="rgb(45, 212, 191)" stopOpacity="0.9" />
          <stop offset="70%" stopColor="rgb(45, 212, 191)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="rgb(79, 70, 229)" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="curveGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgb(45, 212, 191)" stopOpacity="0.1" />
          <stop offset="50%" stopColor="rgb(45, 212, 191)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="rgb(79, 70, 229)" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="curveGradient3" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgb(79, 70, 229)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="rgb(45, 212, 191)" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  )
}
