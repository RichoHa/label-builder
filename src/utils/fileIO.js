export function download(filename, jsonString) {
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function load(file, onLoaded) {
  const reader = new FileReader();
  reader.onload = (event) => {
    const design = JSON.parse(event.target.result);
    onLoaded(design);
  };
  reader.readAsText(file);
}
