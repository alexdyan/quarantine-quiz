import React from "react";
import tw from "twin.macro";
import { SectionInfo } from "../json/types";
import { Button } from "./Button";

const Container = tw.div`
  w-full h-screen bg-background
`;
const Content = tw.div`
   w-5/6 h-full mx-auto flex flex-col justify-evenly text-center md:w-2/3
`;
const Title = tw.h1`
    text-4xl font-title sm:text-6xl
`;
const Description = tw.p`
    font-body md:text-xl md:leading-8 xl:p-24
`;

interface SectionTitleProps {
  sectionInfo: SectionInfo;
  onStartClick: (didStartSection: boolean) => void;
}

export const SectionTitle = ({
  sectionInfo,
  onStartClick,
}: SectionTitleProps) => {
  return (
    <Container>
      <Content>
        <Title>{sectionInfo.title}</Title>
        <Description>{sectionInfo.info}</Description>
        <Button
          variant="lightPurple"
          className="w-1/2 mx-auto"
          onClick={() => onStartClick(true)}
        >
          Continue to Questions
        </Button>
      </Content>
    </Container>
  );
};
