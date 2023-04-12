 
  export interface StateOption {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
  }
  
  export const stateOptions: readonly StateOption[] = [
    { value: '학습', label: '학습' },
    { value: '취미', label: '취미' },
    { value: '전공', label: '전공' },
    { value: '진로', label: '진로' },
    { value: '자소서', label: '자소서' },
    { value: '진학관련', label: '진학관련' },
    { value: '창업관련', label: '창업관련' },
    { value: '자격증', label: '자격증' },
  ];
  
   
  export interface StudyOption {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
  }
  
  export const StudyOptions: readonly StudyOption[] = [
    { value: '국어', label: '국어' },
    { value: '영어', label: '영어' },
    { value: '수학', label: '수학' },
    { value: '그외과목', label: '그외과목' },
    { value: '중국어', label: '중국어' },
    { value: '일본어', label: '일본어' },
    { value: '스페인어', label: '스페인어' },
    { value: '그외언어', label: '그외언어' },
  ];

  export interface HobbyOption {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
  }
  
  export const HobbyOptions: readonly HobbyOption[] = [
    { value: '스포츠', label: '스포츠' },
    { value: '음악', label: '음악' },
    { value: '미술', label: '미술' },
    { value: '미디어', label: '미디어' },
    { value: '그외', label: '그외' },
  ];

  export interface MajorOption {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
  }
  
  export const MajorOptions: readonly MajorOption[] = [
    { value: '프로그래밍 언어', label: '프로그래밍 언어' },
    { value: '경영', label: '경영' },
    { value: '전기', label: '전기' },
    { value: '전자', label: '전자' },
    { value: '나노', label: '나노' },
    { value: '컴공', label: '컴공' },
    { value: '겜공', label: '겜공' },
    { value: '소공', label: '소공' },
    { value: '기계', label: '기계' },
    { value: '기설', label: '기설' },
    { value: '메카', label: '메카' },
    { value: '생화공', label: '생화공' },
    { value: '신소재', label: '신소재' },
    { value: '디자인', label: '디자인' },
  ];