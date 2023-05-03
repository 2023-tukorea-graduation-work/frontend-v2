export interface lowOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export interface StateOption {
  readonly value: readonly lowOption[];
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const StudyOptions: readonly lowOption[] = [
  { value: "국어", label: "국어" },
  { value: "영어", label: "영어" },
  { value: "수학", label: "수학" },
  { value: "그외과목", label: "그외과목" },
  { value: "중국어", label: "중국어" },
  { value: "일본어", label: "일본어" },
  { value: "스페인어", label: "스페인어" },
  { value: "그외언어", label: "그외언어" },
];

export interface HobbyOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const HobbyOptions: readonly lowOption[] = [
  { value: "스포츠", label: "스포츠" },
  { value: "음악", label: "음악" },
  { value: "미술", label: "미술" },
  { value: "미디어", label: "미디어" },
  { value: "그외", label: "그외" },
];

export interface MajorOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const MajorOptions: readonly lowOption[] = [
  { value: "프로그래밍 언어", label: "프로그래밍 언어" },
  { value: "경영", label: "경영" },
  { value: "전기", label: "전기" },
  { value: "전자", label: "전자" },
  { value: "나노", label: "나노" },
  { value: "컴공", label: "컴공" },
  { value: "겜공", label: "겜공" },
  { value: "소공", label: "소공" },
  { value: "기계", label: "기계" },
  { value: "기설", label: "기설" },
  { value: "메카", label: "메카" },
  { value: "생화공", label: "생화공" },
  { value: "신소재", label: "신소재" },
  { value: "디자인", label: "디자인" },
];

export const stateOptions: readonly StateOption[] = [
  { value: StudyOptions, label: "학습" },
  { value: HobbyOptions, label: "취미" },
  { value: MajorOptions, label: "전공" },
  // { value: "진로", label: "진로" },
  // { value: "자소서", label: "자소서" },
  // { value: "진학관련", label: "진학관련" },
  // { value: "창업관련", label: "창업관련" },
  // { value: "자격증", label: "자격증" },
];
export const first = [
  "주제에 알맞은 교육매체를 적절히 활용하였다.",
  "학습내용이 학습계획서대로 진행되었다.",
  "수업 진행은 체계적이었다.",
  "학습내용은 도움이 되는 정보를 담고 있다.",
  "학습방식과 학습환경은 적절하였다.",
  "나는 이 멘토링을 통해 많은 지식을 얻었다.",
  "나는 이 멘토링이 전체적으로 우수하다고 평가한다",
];
export const first2 = [
  "멘토님꼐서 학습내용을 성실하게 가르쳐 주신다.",
  "멘토님께서 나에게 친절히 설명해주신다.",
  "강의 피드백(질문답변, 출석문의 등)은 신속, 정확하였다.",
  "나는 이 멘토링을 다른 사람에게 추천 하고싶다.",
  "나는 다음에도 이 멘토님의 멘토링 수업을 듣고싶다.",
];
export const secondMentor = [
  "주제에 알맞은 교육매체를 적절히 활용하였다",
  "학습내용이 학습계획서대로 진행되었다.",
  "수업 진행은 체계적이었다.",
];
export const secondMentee = [
  "나는 이 멘토링을 통해 많은 지식을 얻었다.",
  "나는 이 멘토링이 전체적으로 우수하다고 평가한다.",
  "나는 이 멘토링응 다른 사람에게 추천하고 싶다.",
  "나는 다음에도 이 멘토님의 멘토링 수업을 듣고싶다.",
];
export const thirdSystem = [
  "이 시스템은 멘토링을 진행하는데 많은 도움을 주었다.",
  "이 시스템은 멘토링을 관리하기에 편리하였다.",
  "이 시스템의 기능을 잘 활용하였다.",
  "이 시스템을 다음 멘토링 진행할 때에도 사용하고 싶다.",
];
