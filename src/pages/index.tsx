import * as React from "react";
import { useState } from "react";
import { Finish } from "../components/Finish";
import { Intro } from "../components/Intro";
import { Question } from "../components/Question";
import { SectionTitle } from "../components/SectionTitle";
import { questionBank } from "../json/questionBank";
import { sectionInfoBank } from "../json/sectionInfoBank";
import { Question as QuestionType } from "../json/types";

const IndexPage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  const [newSection, setNewSection] = useState(false);
  const [showFinished, setShowFinished] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const startNewSection = (didStart: boolean, isFirstSection: boolean) => {
    setNewSection(didStart);
    if (!isFirstSection) {
      setCurrentSection(currentSection + 1);
    }
    setShowIntro(false);
    setShowQuestions(false);
  };
  const startQuestions = (didStartSection: boolean) => {
    setShowQuestions(didStartSection);
    setNewSection(false);
  };
  const finish = (isFinished: boolean) => {
    setShowFinished(isFinished);
    setShowQuestions(false);
  };

  let numSections = sectionInfoBank.length;
  let currentSectionInfo = sectionInfoBank[currentSection];
  let questions: QuestionType[] = [];
  if (questionBank[currentSection]) {
    questions = questionBank[currentSection].questions;
  }

  return (
    <div>
      {showIntro && <Intro onStartClick={startNewSection} />}
      {newSection && (
        <SectionTitle
          sectionInfo={currentSectionInfo}
          onStartClick={startQuestions}
        />
      )}
      {showQuestions && (
        <Question
          questions={questions}
          currentSection={currentSection}
          numSections={numSections}
          onNextSectionClick={startNewSection}
          onFinishClick={finish}
        />
      )}
      {showFinished && <Finish />}
    </div>
  );
};

export default IndexPage;
