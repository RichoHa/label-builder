import { useState } from "react";
import LabelPreview from "./component/LabelPreview";

export default function App() {
  const [holeCount, setHoleCount] = useState(4);
  const [rectWidth, setRectWidth] = useState(10);
  const [rectHeight, setRectHeight] = useState(5);
  const [bgColor, setBgColor] = useState("white");
  const [lines, setLines] = useState(["Line1", "Line2"]);
  const lineGap = 3;

  const StartRectX = 45;
  const StartRectY = 2.5;
  const fontSize = 3;

  const holeR = 0.5;
  const holeMargin = 1;

  let holes;

  if (holeCount == 4) {
    holes = [
      { cx: StartRectX + holeMargin, cy: StartRectY + holeMargin },
      { cx: StartRectX + rectWidth - holeMargin, cy: StartRectY + holeMargin },
      { cx: StartRectX + holeMargin, cy: StartRectY + rectHeight - holeMargin },
      {
        cx: StartRectX + rectWidth - holeMargin,
        cy: StartRectY + rectHeight - holeMargin,
      },
    ];
  } else if (holeCount == 2) {
    holes = [
      { cx: StartRectX + holeMargin, cy: StartRectY + rectHeight / 2 },
      {
        cx: StartRectX + rectWidth - holeMargin,
        cy: StartRectY + rectHeight / 2,
      },
    ];
  } else {
    holes = [];
  }

  return (
    <div>
      <button onClick={() => setHoleCount(0)}>0 holes</button>
      <button onClick={() => setHoleCount(2)}>2 holes</button>
      <button onClick={() => setHoleCount(4)}>4 holes</button>
      <input
        type="number"
        value={rectWidth}
        onChange={(e) => setRectWidth(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={rectHeight}
        onChange={(e) => setRectHeight(parseFloat(e.target.value))}
      />
      <select value={bgColor} onChange={(e) => setBgColor(e.target.value)}>
        <option value="white">White</option>
        <option value="grey">Grey</option>
        <option value="yellow">Yellow</option>
        <option value="red">Red</option>
      </select>
      <LabelPreview
        rectWidth={rectWidth}
        rectHeight={rectHeight}
        holes={holes}
        holeR={holeR}
        StartRectX={StartRectX}
        StartRectY={StartRectY}
        fontSize={fontSize}
        bgColor={bgColor}
        lines={lines}
        lineGap={lineGap}
      />
    </div>
  );
}
