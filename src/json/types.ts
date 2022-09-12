export interface Question {
  number: number;
  question: string;
}

export interface Section {
  section: number;
  questions: Question[];
}

export interface QuestionBank {
  content: Section[];
}

export interface SectionInfo {
  title: string;
  info: string;
}

export interface SectionInfoBank {
  content: SectionInfo[];
}
