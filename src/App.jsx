import { useState } from "react";
import LabelPreview from "./component/LabelPreview";
import Button from "./component/Button";
import Input from "./component/Input";

function download(filename, jsonString) {
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function App() {
  const [holeCount, setHoleCount] = useState(4);
  const [rectWidth, setRectWidth] = useState(10);
  const [rectHeight, setRectHeight] = useState(5);
  const [bgColor, setBgColor] = useState("white");
  const [lines, setLines] = useState([
    { text: "Line1", fontSize: 3, colour: "black" },
    { text: "Line2", fontSize: 2, colour: "red" },
  ]);
  const lineGap = 3;

  const design = {
    holeCount: holeCount,
    rectWidth: rectWidth,
    rectHeight: rectHeight,
    bgColor: bgColor,
    lines: lines,
  };

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
    <div className="flex gap-8 p-4">
      <div className="flex flex-col gap-2">
        <Button onClick={() => setHoleCount(0)}>0 holes</Button>
        <Button onClick={() => setHoleCount(2)}>2 holes</Button>
        <Button onClick={() => setHoleCount(4)}>4 holes</Button>
        <Button
          onClick={() =>
            setLines([
              ...lines,
              { text: "New Line", fontSize: 5, colour: "green" },
            ])
          }
        >
          Add Line
        </Button>
        <Button onClick={() => setLines(lines.slice(0, -1))}>
          Remove Line
        </Button>
        <Input
          type="number"
          value={rectWidth}
          onChange={(e) => setRectWidth(parseFloat(e.target.value))}
        />
        <Input
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
        <Button
          onClick={() =>
            download("label.json", JSON.stringify(design, null, 2))
          }
        >
          Save
        </Button>
      </div>

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
