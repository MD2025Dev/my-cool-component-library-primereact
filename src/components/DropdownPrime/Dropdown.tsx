import React, { useState, useEffect } from "react";
// import "primereact/resources/themes/lara-light-blue/theme.css";
// import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import "./Dropdown.css";

export interface CustomDropdownProps {
    id?: string;
    refId?: React.Ref<HTMLDivElement>;
    value?: any;
    onChange: (value: any) => void;
    options: any[];
    optionLabel: string;
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
    showClear?: boolean;
    label?: string;
    dropDownStyle?: React.CSSProperties;
    pt?: any;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
    id = "customDropdown",
    value = null,
    onChange,
    options = [],
    optionLabel = "name",
    placeholder = "=== Please Select ===",
    disabled = false,
    loading = false,
    label = "Dropdown" 
}) => {
    const [selectStdTable, setSelectStdTable] = useState(value);
    
    const dropDownStyle = {
        fontSize: "14px",
        lineHeight: "12px",
        height: "2rem",
        width: "100%",
    };

    const handleChange = (event: { target: { value: any } }) => {
        setSelectStdTable(event.target.value);
        onChange(event.target.value);
    };

    return (
      <>
        <FloatLabel>
          <Dropdown
            inputId={id}
            value={selectStdTable}
            options={options}
            optionLabel={optionLabel}
            disabled={disabled}
            loading={loading}
            onChange={handleChange}
            filter
            showClear
            placeholder={placeholder}
            style={dropDownStyle}
            pt={{
                input: { style: { width: "250px" } },
                item: { style: dropDownStyle },
                filterInput: { style: dropDownStyle },
              }}
          />
          <label htmlFor={id}>{label}</label>
        </FloatLabel>
      </>
    );
};

export default CustomDropdown;