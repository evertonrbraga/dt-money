import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";

const meta = {
  title: "Example/Header2",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
