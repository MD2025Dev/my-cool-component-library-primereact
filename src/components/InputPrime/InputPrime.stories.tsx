import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import  CustomInputPrime, { CustomInputPrimeProps } from './InputPrime'; // ปรับตามตำแหน่งที่เก็บไฟล์ CustomInput

export default {
  title: 'My Custom Components/CustomInputPrime',
  component: CustomInputPrime,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: Story<CustomInputPrimeProps> = (args) => {
  const [value, setValue] = useState('');
  
  // การจัดการ onChange ใน Storybook
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange?.(e);  // เรียกใช้ action 'changed'
  };

  return <CustomInputPrime {...args} value={value} onChange={handleChange} />;
};

// export const Default = Template.bind({});
// Default.args = {
//   id: 'example-input',
//   label: 'Custom Input',
//   maxLength: 20,
//   required: true,
// };

export const Default = Template.bind({});
Default.args = {
  id: 'example-input',
  label: 'Custom Input',
  maxLength: 20,
  required: true,
};


export const WithError = Template.bind({});
WithError.args = {
  id: 'example-input-error',
  label: 'Custom Input with Error',
  value: 'This field is required.',
  error: 'This field is required.',
  maxLength: 20,
  required: true,
};

export const WithoutRequired = Template.bind({});
WithoutRequired.args = {
  id: 'example-input-no-required',
  label: 'Custom Input (Optional)',
  required: false,
  maxLength: 30,
};

export const LongInput = Template.bind({});
LongInput.args = {
  id: 'example-input-long',
  label: 'Long Value Example',
  value: 'A-BC-DE-123',
  maxLength: 50,
};
