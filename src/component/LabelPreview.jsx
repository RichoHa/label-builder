export default function LabelPreview({
  rectWidth,
  rectHeight,
  holes,
  holeR,
  StartRectX,
  StartRectY,
  bgColor,
  lines,
  lineGap,
}) {
  return (
    <svg viewBox="0 0 100 100">
      <defs>
        <marker
          id="arr"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="4"
          markerHeight="4"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
        </marker>
      </defs>
      <line
        x1="10"
        y1="10"
        x2="90"
        y2="10"
        stroke="red"
        marker-end="url(#arr)"
        marker-start="url(#arr)"
      />
      <rect
        x={StartRectX}
        y={StartRectY}
        width={rectWidth}
        height={rectHeight}
        fill={bgColor}
        stroke="black"
        stroke-width="0.5"
      />
      {lines.map((line, i) => (
        <text
          key={i}
          x={StartRectX + 2}
          y={
            StartRectY +
            rectHeight / 2 -
            ((lines.length - 1) * lineGap) / 2 +
            i * lineGap +
            line.fontSize * 0.35
          }
          font-size={line.fontSize}
          fill={line.colour}
        >
          {line.text}
        </text>
      ))}
      {holes.map((hole, i) => (
        <circle key={i} cx={hole.cx} cy={hole.cy} r={holeR} fill="black" />
      ))}
    </svg>
  );
}
