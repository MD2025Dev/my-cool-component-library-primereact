import React from "react";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
// import "primereact/resources/themes/lara-light-blue/theme.css";
// import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";
import "./Input.css";

export interface CustomInputPrimeProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  error?: string;
  label: string;
  required?: boolean;
  pattern?: RegExp;
}

const CustomInputPrime: React.FC<CustomInputPrimeProps> = ({
  id,
  value,
  onChange,
  maxLength = 100,
  error,
  label,
  required = false,
  pattern,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (
      inputValue === "" ||
      (e.nativeEvent as InputEvent).inputType === "deleteContentBackward"
    ) {
      onChange(e);
      return;
    }

    const allowedPattern = /^(?!.*--)[a-zA-Z0-9-]*$/;
    if (!allowedPattern.test(inputValue)) {
      return;
    }

    if (inputValue.length <= maxLength) {
      onChange(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key === "a") {
      e.preventDefault();
      (e.target as HTMLInputElement).select();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleBlur = () => {
    if (value.endsWith("-")) {
      onChange({
        target: { value: value.slice(0, -1) },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <>
        <FloatLabel>
            <IconField>
                <InputText
                    id={id}
                    value={value || ""}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} 
                    onPaste={handlePaste}
                    onBlur={handleBlur}
                    maxLength={maxLength}
                    className={`${error ? "p-invalid" : ""} w-full border-1 line-height-1 custom-input`}
                />
            </IconField>
            <label htmlFor={id} style={{ color: error ? "#e24c4c" : "" }}>
                {label} {required && <span className="text-red-500">*</span>}
            </label>
        </FloatLabel>
        {error && <small className="p-error">{error}</small>}
    </>
  );
};
export default CustomInputPrime;
