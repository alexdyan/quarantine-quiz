import styled from "styled-components";
import tw, { TwStyle } from "twin.macro";

type ButtonVariant = "pink" | "lightPurple" | "purple";

export interface ButtonProps {
  variant?: ButtonVariant;
}

const buttonVariants: Record<ButtonVariant, TwStyle> = {
  pink: tw`bg-pink-500 hover:bg-pink-600`,
  lightPurple: tw`bg-plum-500 hover:bg-plum-600`,
  purple: tw`bg-purple-500 hover:bg-purple-600`,
};

export const Button = styled.button<ButtonProps>(() => [
  tw`font-body text-white text-lg px-4 py-2 rounded-xl`,
  ({ variant = "pink" }) => buttonVariants[variant],
]);
