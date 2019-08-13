import "./stroke.css";

export const Stroke = (props) => {
  return (
    <svg width="2em">
      <symbol id="s-text">
        <text
          textAnchor="middle"
          x="50%"
          y="100%"
          className="text--line"
          fill="url(#diagonalHatch)"
        >
          {props.children}
        </text>
      </symbol>

      <g className="g-ants">
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
      </g>
      <pattern
        id="diagonalHatch"
        patternUnits="userSpaceOnUse"
        width="10"
        height="10"
      >
        <path
          d="M0,0 l10,10,
          M-1,9 l2,2
          M9,-1 l2,2
           "
          style={{ stroke: "black", strokeWidth: 2, strokeLinecap: "square" }}
        />
      </pattern>
      <pattern
        id="diagonalHatch2"
        patternUnits="userSpaceOnUse"
        width="12"
        height="12"
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
