export type Verdict = "success" | "fail";

export type QuizAnswer = {
  questionId: number;
  question: string;
  selectedOption: string;
  optionIdx: number; // 0..3
};

export type RsvpEntry = {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  title: string;
  patriotismScore: number;
  avatarSeed: string;
  styleIdx: number;
  overlayIdx: number;
  selfieUrl: string | null;
  quizAnswers?: QuizAnswer[];
  verdict?: Verdict;
  // Optional enrichment — let users find their peers by where + when, and
  // reach out via socials. None of these are required.
  meetupSpot?: string; // englishName from YEREVAN_POPULAR_MEETUP_SPOTS
  meetupTime?: string; // value from MEETUP_TIME_SLOTS
  telegram?: string; // handle without leading @
  instagram?: string; // handle without leading @
  phone?: string; // free-form
  createdAt: number;
};
