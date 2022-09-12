import React, { useState } from "react";
import tw from "twin.macro";
import { Question as QuestionType } from "../json/types";
import { Button } from "./Button";

enum Navigation {
  next = 1,
  previous = 2,
  nextSection = 3,
}

const Container = tw.div`
  w-full h-screen bg-background
`;
const Content = tw.div`
  w-5/6 h-full mx-auto flex flex-col justify-evenly text-center md:w-2/3 xl:w-1/2
`;
const Title = tw.h1`
  text-6xl font-title
`;
const QContainer = tw.div`
  p-8 bg-white rounded-3xl shadow-md md:p-12
`;
const QDesc = tw.p`
  text-2xl font-body sm:text-4xl
`;
const ButtonContainer = tw.div`
  flex justify-around
`;

interface QuestionProps {
  questions: QuestionType[];
  currentSection: number;
  numSections: number;
  onNextSectionClick: (isNewSection: boolean, isFirstSection: boolean) => void;
  onFinishClick: (isFinished: boolean) => void;
}

export const Question = ({
  questions,
  currentSection,
  numSections,
  onNextSectionClick,
  onFinishClick,
}: QuestionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onClick = (nav: Navigation) => {
    if (nav == Navigation.next) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (nav == Navigation.previous) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      // nav == nextSection
      if (currentSection < numSections - 1) {
        setCurrentQuestion(0);
        onNextSectionClick(true, false);
      } else {
        onFinishClick(true);
      }
    }
  };

  return (
    <Container>
      <Content>
        <Title>{"#" + questions[currentQuestion].number}</Title>
        <QContainer>
          <QDesc>{questions[currentQuestion].question}</QDesc>
        </QContainer>
        <ButtonContainer>
          {currentQuestion !== 0 && (
            <Button
              variant="pink"
              className="w-1/3 lg:w-1/4"
              onClick={() => onClick(Navigation.previous)}
            >
              Previous
            </Button>
          )}
          {currentQuestion < questions.length - 1 && (
            <Button
              variant="lightPurple"
              className="w-1/3 lg:w-1/4"
              onClick={() => onClick(Navigation.next)}
            >
              Next
            </Button>
          )}
          {currentQuestion == questions.length - 1 && (
            <Button
              variant="purple"
              className="w-1/3 lg:w-1/4"
              onClick={() => onClick(Navigation.nextSection)}
            >
              Go to Next Section
            </Button>
          )}
        </ButtonContainer>
      </Content>
    </Container>
  );
};
