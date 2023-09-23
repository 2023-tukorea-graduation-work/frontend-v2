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
  { value: "프로그래밍", label: "프로그래밍" },
  { value: "전기", label: "전기" },
  { value: "전자", label: "전자" },
  { value: "기계", label: "기계" },
  { value: "디자인", label: "디자인" },
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
  { value: MajorOptions, label: "진로" },
  { value: MajorOptions, label: "자소서" },
  { value: MajorOptions, label: "진학관련" },
  { value: MajorOptions, label: "창업관련" },
  { value: MajorOptions, label: "자격증" },
];
export const classSatisfaction = [
  "주제에 알맞은 교육매체를 적절히 활용하였다.",
  "학습내용이 학습계획서대로 진행되었다.",
  "수업 진행은 체계적이었다.",
  "학습내용은 도움이 되는 정보를 담고 있다.",
  "학습방식과 학습환경은 적절하였다.",
  "나는 이 멘토링을 통해 많은 지식을 얻었다.",
  "나는 이 멘토링이 전체적으로 우수하다고 평가한다",
];
export const relationshipSatisfaction = [
  "멘토님꼐서 학습내용을 성실하게 가르쳐 주신다.",
  "멘토님께서 나에게 친절히 설명해주신다.",
  "강의 피드백(질문답변, 출석문의 등)은 신속, 정확하였다.",
  "나는 이 멘토링을 다른 사람에게 추천 하고싶다.",
  "나는 다음에도 이 멘토님의 멘토링 수업을 듣고싶다.",
];
export const systemSatisfaction = [
  "이 시스템은 멘토링을 진행하는데 많은 도움을 주었다.",
  "이 시스템은 멘토링을 관리하기에 편리하였다.",
  "이 시스템의 기능을 잘 활용하였다.",
  "이 시스템을 다음 멘토링 진행할 때에도 사용하고 싶다.",
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

export const CollegeMajor: readonly lowOption[] = [
  { value: "COMPUTER", label: "컴퓨터공학전공" },
  { value: "SOFTWARE", label: "소프트웨어전공" },
  { value: "GAME", label: "게임공학과" },
  { value: "AI", label: "인공지능학과" },
  { value: "MECHANICAL", label: "기계공학과" },
  { value: "MECHANICAL_DESIGN", label: "기계설계공학전공" },
  { value: "INTELLIGENT_MOBILITY", label: "지능형모빌리티전공" },
  { value: "MECHATRONICS", label: "메카트로닉스공학전공" },
  { value: "AI_ROBOTICS", label: "AI로봇전공" },
  { value: "ELECTRONIC", label: "전자공학전공" },
  { value: "EMBEDDED_SYSTEM", label: "임베디드시스템전공" },
  { value: "MATERIALS_SCIENCE", label: "신소재공학전공" },
  { value: "BIOCHEMICAL", label: "생명화학공학과" },
  { value: "NANO_SEMICONDUCTOR", label: "나노반도체공학과" },
  { value: "ENERGY_ELECTRICAL", label: "에너지전기공학과" },
  { value: "BUSINESS_ADMINISTRATION", label: "경영학전공" },
  { value: "DATA_SCIENCE_MANAGEMENT", label: "데이터사이언스경영전공" },
  { value: "IT_MANAGEMENT", label: "IT경영전공" },
  { value: "INDUSTRIAL_DESIGN", label: "산업디자인공학전공" },
  { value: "MEDIA_DESIGN", label: "미디어디자인공학전공" },
  { value: "CONV_VENTURE_STARTUP", label: "벤처창업" },
  { value: "CONV_SEMICONDUCTOR_MATERIAL", label: "반도체소재" },
  { value: "CONV_SMART_FACTORY", label: "스마트팩토리" },
  { value: "CONV_SEMICONDUCTOR_DISPLAY", label: "반도체디스플레이" },
  { value: "CONV_FUTURE_AUTOMOTIVE", label: "미래자동차공학" },
  { value: "CONV_DIGITAL", label: "디지털엔지니어링" },
  { value: "CONV_AI_CONVERGENCE", label: "인공지능융합" },
  { value: "CONV_INTELLIGENT_ROBOT", label: "지능형로봇" },
  { value: "CONV_METAVERSE_DESIGN", label: "메타버스디자인" },
  { value: "CONV_RENEWABLE_ENERGY_CONVERGENCE", label: "신재생에너지융합기술" },
  { value: "CONV_ECOMMERCE", label: "이커머스" },
  { value: "CORP_TALENT_MECHANICAL_GYMNASTICS", label: "기계체조공학" },
  { value: "CORP_MECHANICAL_DESIGN_SYSTEM", label: "기계설계시스템공학" },
  { value: "CORP_COMPUTER_CONVERGENCE", label: "컴퓨터융합공학" },
  { value: "CORP_ENVIRONMENTAL_SAFETY_MANAGEMENT", label: "환경안전경영" },
  { value: "CORP_CORPORATE_MANAGEMENT", label: "기업경영" },
  { value: "CORP_MECHATRONICS_SYSTEM", label: "메카트로닉스시스템" },
  { value: "CORP_SMART_COMPUTER_CONVERGENCE", label: "스마트컴퓨터융합공학" },
  { value: "CORP_COMPUTER_ELECTRONICS", label: "컴퓨터전자공학" },
  { value: "CORP_SMART_MECHANICAL", label: "스마트기계공학" },
];
