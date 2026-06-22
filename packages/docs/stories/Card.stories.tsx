import type { Meta, StoryObj } from "@storybook/react";
import { DsCard, DsText, DsButton } from "@andersonlucasp/rn";

const meta = {
  title: "Components/Card",
  component: DsCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Cards are container components used to group related information. Available in three variants: default (border), elevated (shadow), and outlined.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "elevated", "outlined"],
      description: "The card style variant",
    },
    padding: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "The card padding",
    },
  },
} satisfies Meta<typeof DsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    padding: "md",
    children: (
      <DsText>
        This is a card with default styling (border)
      </DsText>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    padding: "md",
    children: (
      <DsText>
        This is an elevated card (with shadow)
      </DsText>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    padding: "md",
    children: (
      <DsText>
        This is an outlined card
      </DsText>
    ),
  },
};

export const WithContent: Story = {
  args: {
    variant: "elevated",
    padding: "md",
    children: (
      <div style={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
        <DsText weight="semibold" size="lg">
          Yoga Class
        </DsText>
        <DsText color="secondary">
          Monday, 8:00 AM - 9:00 AM
        </DsText>
        <DsText color="secondary" size="sm">
          Instructor: Sarah Anderson
        </DsText>
      </div>
    ),
  },
};

export const AcademyExample: Story = {
  render: () => (
    <DsCard variant="elevated" padding="md" style={{maxWidth: "400px"}}>
      <div style={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
        <DsText weight="semibold" size="lg">
          Yoga Class
        </DsText>
        <DsText color="secondary">
          Monday, 8:00 AM - 9:00 AM
        </DsText>
        <DsText color="secondary" size="sm">
          Instructor: Sarah Anderson
        </DsText>
        <div style={{ marginTop: "0.5rem" }}>
          {/* Badge would go here */}
          <span style={{
            display: "inline-block",
            background: "#dcfce7",
            color: "#15803d",
            padding: "0.375rem 0.875rem",
            borderRadius: "9999px",
            fontWeight: "600",
            fontSize: "0.875rem",
          }}>
            Available (5)
          </span>
        </div>
        <DsButton variant="primary">
          Reserve Class
        </DsButton>
      </div>
    </DsCard>
  ),
};
