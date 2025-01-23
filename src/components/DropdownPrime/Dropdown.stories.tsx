import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomDropdown from "./Dropdown";

export default {
  title: "My Custom Components/CustomDropdownPrime",
  component: CustomDropdown,
  argTypes: {
    id: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
    options: { control: "object" },
    optionLabel: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    floatLabel: { control: "boolean" },
    showClear: { control: "boolean" },
    label: { control: "text" },
  },
} as ComponentMeta<typeof CustomDropdown>;

const Template: ComponentStory<typeof CustomDropdown> = (args) => {
  const [value, setValue] = useState(args.value || null);

  const handleChange = (newValue: any) => {
    setValue(newValue);
    args.onChange(newValue); // Call the Storybook action
  };

  return (
    <CustomDropdown
      {...args}
      value={value}
      onChange={handleChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "dropdown1",
  value: null, 
  options: [
    { name: "Option 1", code: "1" },
    { name: "Option 2", code: "2" },
    { name: "Option 3", code: "3" },
  ],
  optionLabel: "name",
  placeholder: "=== Please Select ===",
  disabled: false,
  loading: false,
  label: "Dropdown Label",
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  ...Default.args,
  disabled: true, // ทดสอบ Dropdown ที่ไม่สามารถเลือกได้
};

export const LoadingDropdown = Template.bind({});
LoadingDropdown.args = {
  ...Default.args,
  loading: true, // ทดสอบ Dropdown ที่มีสถานะ loading
};
