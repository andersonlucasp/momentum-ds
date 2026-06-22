import type { Meta, StoryObj } from "@storybook/react";
import { DsInput } from "@andersonlucasp/rn";
import { useState } from "react";

const InputWrapper = (props: any) => {
  const [value, setValue] = useState("");
  return <DsInput {...props} value={value} onChangeText={setValue} />;
};

const meta = {
  title: "Components/Input",
  component: DsInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Input fields are used to collect user text input. Available in three sizes and three variants (default, error, success).",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "The input size",
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "error", "success"],
      description: "The input variant/state",
    },
    placeholder: {
      control: { type: "text" },
      description: "Input placeholder text",
    },
  },
} satisfies Meta<typeof DsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "default",
    placeholder: "Enter text...",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Small input",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "Medium input",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large input",
  },
};

export const Success: Story = {
  args: {
    size: "md",
    variant: "success",
    placeholder: "Success state",
  },
};

export const Error: Story = {
  args: {
    size: "md",
    variant: "error",
    placeholder: "Error state",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px" }}>
      <DsInput size="sm" placeholder="Small input" />
      <DsInput size="md" placeholder="Medium input" />
      <DsInput size="lg" placeholder="Large input" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px" }}>
      <DsInput variant="default" placeholder="Default state" />
      <DsInput variant="success" placeholder="Success state" />
      <DsInput variant="error" placeholder="Error state" />
    </div>
  ),
};
