export default function Button({ children, onClick }) {
  return (
    <button
      className="border px-3 py-1 rounded hover:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
