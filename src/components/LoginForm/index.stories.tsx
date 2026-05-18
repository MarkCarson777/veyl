import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./index";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: "LoginForm",
};

export default meta;

export const Default: StoryObj<typeof LoginForm> = {
  args: {},
};
