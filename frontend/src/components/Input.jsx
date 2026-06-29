function Input({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default Input;