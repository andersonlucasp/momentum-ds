import type { Meta, StoryObj } from "@storybook/react";
import { DsBadge } from "@andersonlucasp/rn";

const meta = {
  title: "Components/Badge",
  component: DsBadge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Badges are small labels used to display status, tags, or notifications. Perfect for showing class availability in academy apps.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "success", "warning", "danger"],
      description: "The badge style variant",
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "The badge size",
    },
  },
} satisfies Meta<typeof DsBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "md",
    children: "Default",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "md",
    children: "Available",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    size: "md",
    children: "Waitlist",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "md",
    children: "Full",
  },
};

export const AcademyStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <DsBadge variant="success">Available (5)</DsBadge>
      <DsBadge variant="danger">Full</DsBadge>
      <DsBadge variant="warning">Waitlist</DsBadge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <DsBadge size="sm">Small</DsBadge>
      <DsBadge size="md">Medium</DsBadge>
      <DsBadge size="lg">Large</DsBadge>
    </div>
  ),
};
