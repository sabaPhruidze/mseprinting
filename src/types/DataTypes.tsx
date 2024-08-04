//header
export interface HMenuType {
  page: string;
  path: string;
}
export interface LogoType {
  logo: string | null;
}
//footer

//categories

//Home

//CarouselDataType

export interface CarouselType {
  image: string;
  alt: string;
  title: string;
  text: string;
  link: string;
}

//WWDCCardType

export interface WWDCCardType {
  image: string;
  link: string;
  text: string;
  title: string;
}

export interface WWDCSpecialitiesContentType {
  paragraph: string | null;
  title: string | null;
}

// home services

export interface HomeServicesType {
  image: string | null;
  link: string | null;
  text: string | null;
  title: string | null;
}

// products and services
export interface HomeServicesFullType {
  DirectMailAndMailingServices: string[] | null;
  FulfillmentServices: string[] | null;
  GraphicDesign: string | null;
  IndustrySpecific: string[] | null;
  LabelsAndPackaging: string[] | null;
  MarketingServices: string[] | null;
  OnlineOrderingPortals: string | null;
  PrintingAndCopying: string[] | null;
  Signs: string[] | null;
  TradeshowsAndEvents: string[] | null;
  left: string[] | null;
}

// sub-categories

//Accessibility
export interface ContentPart {
  content: string;
  title?: string;
}

export interface AccessibilityContent {
  firstPart: string;
  mainTitle: string;
  middlePart: ContentPart[];
}

export interface EndContent {
  content: any;
  title: string;
}

export interface HelpContent {
  firstPart: string;
  mail: string;
  secondPart: string;
  title: string;
}

export interface StartContent {
  content: string;
  title: string;
}

export interface AccessibilityDocument {
  start: StartContent[];
  help: HelpContent;
  end: EndContent[];
  accessibility: AccessibilityContent;
}
// privacy and policy
export interface PrivacyAndPolicyDocument {
  one: PrivacyAndPolicyOne;
  two: PrivacyAndPolicyTwo;
  three: PrivacyAndPolicyThree;
  four: PrivacyAndPolicyFour;
  five: PrivacyAndPolicyFive;
  six: PrivacyAndPolicySix;
  seven: PrivacyAndPolicySeven;
  eight: PrivacyAndPolicyEight;
  nine: PrivacyAndPolicyNine;
}
export interface PrivacyAndPolicyOne {
  firstPartOne: string;
  firstPartTwo: string;
  firstSpecialPart: string;
  secondPart: string;
  thirdPart: string;
  title: string;
}

export interface PrivacyAndPolicyTwo {
  title: string;
  content: string;
}
export interface PrivacyAndPolicyThree {
  thirdPart: string;
  sixthPart: string;
  secondPart: string;
  fourthPart: string;
  firstPart: string;
  fifthPart: string;
  title: string;
}
export interface PrivacyAndPolicyFour {
  title: string;
  firstPart: string;
  secondPart: string;
}
export interface PrivacyAndPolicyFive {
  firstPart: string;
  secondPartOne: string;
  secondPartTwo: string;
  secondSpecialPart: string;
  title: string;
}
export interface PrivacyAndPolicySix {
  firstPartOne: string;
  firstPartTwo: string;
  firstSpecialPart: string;
  title: string;
}
export interface PrivacyAndPolicySeven {
  content: string;
  title: string;
}
export interface PrivacyAndPolicyEight {
  firstPartOne: string;
  firstPartTwo: string;
  firstSpecialPart: string;
  title: string;
}
export interface PrivacyAndPolicyNine {
  fifthPart: string;
  firstPart: string;
  fourthPartOne: string;
  fourthPartTwo: string;
  fourthSpecialPart: string;
  secondPart: string;
  thirdPart: string;
  title: string;
}
// Terms and Conditions
export interface TermsAndConditionsDocument {
  one: TermsAndConditionsOne;
  two: TermsAndConditionsTwo[];
  three: TermsAndConditionsThree[];
  four: TermsAndConditionsTwo[];
  five: TermsAndConditionsFive;
}
export interface TermsAndConditionsOne {
  firstPart: string;
  secondPartOne: string;
  secondPartSpecial: string;
  secondPartTwo: string;
  title: string;
}
export interface TermsAndConditionsTwo {
  title: string;
  content: string;
}
export interface TermsAndConditionsThree {
  firstPartOne: string;
  firstPartSpecial: string;
  firstPartTwo: string;
  title: string;
}

export interface TermsAndConditionsFive {
  firstPartOne: string;
  firstPartSpecial: string;
  firstPartTwo: string;
  secondPart: string;
  title: string;
}
// EOE Diversity
export interface EOEDiversityDocument {
  mainTitle: string;
  one: EOEDiversityOne;
  two: EOEDiversityTwo;
  three: EOEDiversityThree;
}
export interface EOEDiversityOne {
  firstPart: string;
  secondPart: string;
  title: string;
}
export interface EOEDiversityTwo {
  title: string;
  content: string;
}
export interface EOEDiversityThree {
  title: string;
  firstPart: string;
  secondPart: string;
  thirdPart: string;
  fourthPart: String;
}
// Environmental Message

export interface EnvironmentalMessageDocument {
  title: string;
  firstPart: string;
  secondPart: string;
  thirdPart: string;
  fourthPart: EnvironmentalMessageArray[];
  fifthPart: string;
}
export interface EnvironmentalMessageArray {
  title: string;
  content: string;
}
// Blog
export interface BlogDocument {
  content: string;
  mainTitle: string;
  postArray: PostsArray[];
}
export interface PostsArray {
  date: String;
  image: string;
  link: string;
  title: string;
}

// registration / login

export type RUseFormFirstPart = {
  firstname: string;
  lastname: string;
  email: string;
  emailVerification: string;
  phone: string;
};

export type RUseFormSecondPart = {
  password: string;
  passwordVerification: string;
  jobTitle: string;
  company: string;
};
export type LUseForm = {
  email: string;
  password: string;
};

export type FormField<T> = {
  placeholder: string;
  registerName: keyof T;
  required: boolean;
  message: string;
  value: RegExp;
};
// Commercial Offset Printing
export interface OffsetPrintingDocument {
  one: OffsetPrintingOneType;
  two: titleWithContentType;
  three: titleWithContentType;
  subThree: OffsetPrintingSubThreeType[];
  four: titleWithContentType;
  fourSub: titleWithContentType[];
  five: titleWithContentType;
  fiveSub: titleWithContentType[];
  six: titleWithContentType;
  sixSub: titleWithContentType[];
  seven: titleWithContentType;
  sevenSub: titleWithContentType[];
  eight: titleWithContentType;
  eightSub: titleWithContentType[];
  nine: OffsetPrintingNineType;
}
// special     special
export interface OffsetPrintingOneType {
  title?: string;
  mainTitle: string;
  content?: string;
}
export interface titleWithContentType {
  title: string;
  content?: string;
}
export interface OffsetPrintingSubThreeType {
  title: string;
  specialOne: string;
  contentOne: String;
  specialTwo?: string;
  contentTwo?: string;
}
export interface OffsetPrintingNineType {
  title: string;
  firstPart: string;
  secondPart: String;
}
// Digital printing

export interface DigitalPrintingDocument {
  one: OffsetPrintingOneType;
  two: titleWithContentType[];
  three: titleWithContentType;
  threeSub: OffsetPrintingSubThreeType[];
  four: titleWithContentType;
  fourSub: titleWithContentType[];
  five: titleWithContentType;
  fiveSub: titleWithContentType[];
  six: titleWithContentType;
  sixSub: titleWithContentType[];
  seven: titleWithContentType;
  sevenSub: titleWithContentType[];
  eight: titleWithContentType;
  eightSub: titleWithContentType[];
  nine: OffsetPrintingNineType;
}
// printing and copying
export interface PrintingCopyingDocument {
  one: titleWithContentType;
  two: titleWithContentType[];
  three: OffsetPrintingNineType;
}
// Direct mail , Signs , Online ordering portals
export interface CommonDocument {
  one: titleWithContentType;
  two: titleWithContentType[];
}
