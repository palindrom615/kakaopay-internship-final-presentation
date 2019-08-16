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
        width="8"
        height="8"
      >
        <path
          d="M0,0 l8,8,
          M-1,7 l2,2
          M7,-1 l2,2
           "
          style={{ stroke: "black", strokeWidth: 1, strokeLinecap: "square" }}
        />
      </pattern>
    </svg>
  );
};
