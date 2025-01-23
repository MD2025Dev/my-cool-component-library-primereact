import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonPrime, { ButtonProps } from './ButtonPrime';

// ข้อมูลเกี่ยวกับ Story
export default {
  title: 'My Custom Components/CustomButtonPrime',
  component: ButtonPrime,
  argTypes: {
    label: { control: 'text', description: 'Label of the button' },
    onClick: { action: 'clicked', description: 'Callback function for button click' },
  },
} as Meta<typeof ButtonPrime>;

// Template สำหรับสร้าง Story
const Template: StoryFn<ButtonProps> = (args) => <ButtonPrime {...args} />;

// สร้าง Story ตัวอย่าง
export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  isRound: false,
};

export const WithCustomLabelAndIcon = Template.bind({});
WithCustomLabelAndIcon.args = {
  label: 'New',
  size: "small",
  icon: "pi pi-plus",
};

export const ClickableButton = Template.bind({});
ClickableButton.args = {
  label: 'Click Me!',
  onClick: () => alert('Button clicked!'),
  severity: 'success',
  size: "small"
};
