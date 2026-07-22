export default function Input({ type, value, onChange }) {
  return (
    <input
      className="border px-3 py-1 rounded hover:bg-gray-100"
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
