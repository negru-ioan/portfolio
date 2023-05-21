import { useRef, useState } from "react";

function Input({ label, name, type }) {
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e) => {
    setHasValue(e.target.value !== "");
  };

  return (
    <div className="input-container" onClick={handleClick}>
      <input
        ref={inputRef}
        className="inputAnimation tracking-wide focus:ring-0"
        type={type}
        placeholder=""
        name={name}
        onChange={handleChange}
      />
      <label
        style={
          hasValue
            ? {
                position: "absolute",
                left: 0,
                width: "100%",
                top: "-16px",
                fontSize: "14px",
                color: "#00c7ff",
                transition: "0.3s",
                zIndex: 10,
                letterSpacing: "0.5px",
              }
            : {}
        }
      >
        {label}
      </label>
    </div>
  );
}
export default Input;
