export default function App() {
  const rectX = 45;
  const rectY = 2.5;
  const rectWidth = 10;
  const rectHeight = 5;
  const fontSize = 3;

  return (
    //Create a view box of xMin = 0, yMin = 0, xMax = 100, yMax = 100.
    <svg viewBox="0 0 100 100">
      <defs>
        <marker
          id="arr"
          //Set the view box of the marker to xMin = 0, yMin = 0, xMax = 10, yMax = 10.
          viewBox="0 0 10 10"
          //Set the reference point of the marker to (5,5).
          refX="5"
          refY="5"
          //Set the width and height of the marker to 4.
          markerWidth="4"
          markerHeight="4"
          //Set the orientation of the marker to auto-start-reverse.
          orient="auto-start-reverse"
        >
          {/* Create a red triangle with points at (0,0), (10,5), and (0,10)*/}
          <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
        </marker>
      </defs>
      <line
        x1="10"
        y1="10"
        x2="90"
        y2="10"
        stroke="red"
        //Set the marker at the end of the line to the arrow marker.
        marker-end="url(#arr)"
        marker-start="url(#arr)"
      />
      <rect
        x={rectX}
        y={rectY}
        width={rectWidth}
        height={rectHeight}
        fill="none"
        stroke="black"
        stroke-width="0.5"
      />
      <text
        x={rectX + 2}
        y={rectY + rectHeight / 2 + fontSize * 0.35}
        font-size={fontSize}
        fill="black"
      >
        Start
      </text>
    </svg>
  );
}
