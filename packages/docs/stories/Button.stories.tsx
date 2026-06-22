import type { Meta, StoryObj } from "@storybook/react";
import { DsButton } from "@andersonlucasp/rn";

const meta = {
  title: "Components/Button",
  component: DsButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Buttons are clickable elements used to trigger actions. Available in three variants (primary, secondary, danger) and three sizes (sm, md, lg).",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "danger"],
      description: "The button style variant",
      table: { type: { summary: "primary | secondary | danger" } },
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "The button size",
      table: { type: { summary: "sm | md | lg" } },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the button",
      table: { type: { summary: "boolean" } },
    },
    loading: {
      control: { type: "boolean" },
      description: "Show loading state with spinner",
      table: { type: { summary: "boolean" } },
    },
  },
} satisfies Meta<typeof DsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "md",
    children: "Danger Button",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Large",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: true,
    children: "Disabled Button",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    size: "md",
    loading: true,
    children: "Loading...",
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <DsButton {...args} variant="primary">
        Primary
      </DsButton>
      <DsButton {...args} variant="secondary">
        Secondary
      </DsButton>
      <DsButton {...args} variant="danger">
        Danger
      </DsButton>
    </div>
  ),
  args: {
    size: "md",
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <DsButton {...args} size="sm">
        Small Button
      </DsButton>
      <DsButton {...args} size="md">
        Medium Button
      </DsButton>
      <DsButton {...args} size="lg">
        Large Button
      </DsButton>
    </div>
  ),
  args: {
    variant: "primary",
  },
};
