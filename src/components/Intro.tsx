import React from "react";
import tw from "twin.macro";
import { Button } from "./Button";

interface IntroProps {
  onStartClick: (didStart: boolean, isFirstSection: boolean) => void;
}

const Container = tw.div`
  w-full h-screen bg-background
`;
const Content = tw.div`
  w-5/6 h-full mx-auto flex flex-col justify-evenly text-center md:w-2/3
`;
const Title = tw.h1`
  text-4xl font-title sm:text-6xl
`;
const SubTitle = tw.h2`
text-2xl font-title
`;
const Description = tw.p`
  font-body sm:text-2xl xl:p-24
`;

export const Intro = ({ onStartClick }: IntroProps) => {
  return (
    <Container>
      <Content>
        <Title>36 Questions to Fall in Love During Quarantine</Title>
        <Description>
          A curated set of questions to get to know your quarantine bae(s),
          friends, or learn about yourself!
        </Description>
        <SubTitle>Created by: Jessica Enriquez & Bryanna Alvarez</SubTitle>
        <Button
          variant="purple"
          className="w-1/2 mx-auto"
          onClick={() => onStartClick(true, true)}
        >
          Start
        </Button>
      </Content>
    </Container>
  );
};
