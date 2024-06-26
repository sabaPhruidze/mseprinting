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
//Double Cards

export interface DoubleCardsDarkType {
  imageDark: string;
  imageRQ: string | null;
  link: string | null;
  title: string | null;
}

export interface DoubleCardsLightType {
  imageLight: string;
  imageSF: string | null;
  link: string | null;
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
