import React from "react";
import tw from "twin.macro";

const Container = tw.div`
  w-full h-screen bg-background
`;
const Content = tw.div`
  w-5/6 h-full m-auto flex flex-col justify-evenly text-center md:w-2/3
`;
const Title = tw.h1`
  text-4xl font-title sm:text-6xl
`;
const SubTitle = tw.h2`
  text-3xl font-title
`;
const Description = tw.p`
  font-body md:text-xl md:leading-8 lg:px-24
`;

export const Finish = () => {
  return (
    <Container>
      <Content>
        <Title>You've made it to the end!</Title>
        <Description>Now sit and reflect.</Description>
        <Description>
          Take three minutes to sit in silence, whether you're with one of your
          quarantine baes, friends, or alone. Jot down some initial thoughts on
          how answering or having these questions answered made you feel. Lets
          get through this quarantine together!
        </Description>
        <SubTitle>xoxo, Jessica & Bryanna</SubTitle>
      </Content>
    </Container>
  );
};
