/* eslint-disable react/prop-types */
export default function Button({ type, children }) {
  return (
    <button className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}>
      {children}
    </button>
  );
}
