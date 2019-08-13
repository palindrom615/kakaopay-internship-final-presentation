import "./stroke.css";

export const Stroke = () => {
  return (
    <svg style={{ height: "100%", width: "120px" }} viewBox="0 0 100% 72px">
      <symbol id="s-text">
        <text
          text-anchor="middle"
          x="50%"
          y="100%"
          class="text--line"
          fill="url(#diagonalHatch)"
        >
          YET
        </text>
      </symbol>

      <g class="g-ants">
        <use xlinkHref="#s-text" class="text-copy" />
        <use xlinkHref="#s-text" class="text-copy" />
        <use xlinkHref="#s-text" class="text-copy" />
        <use xlinkHref="#s-text" class="text-copy" />
        <use xlinkHref="#s-text" class="text-copy" />
      </g>
      <pattern
        id="diagonalHatch"
        patternUnits="userSpaceOnUse"
        width="4"
        height="4"
      >
        <path
          d="M-1,1 l2,-2
           M0,4 l4,-4
           M3,5 l2,-2"
          style={{ stroke: "black", strokeWidth: 1 }}
        />
      </pattern>
    </svg>
  );
};
