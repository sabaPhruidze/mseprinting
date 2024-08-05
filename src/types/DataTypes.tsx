// Common Types

export interface TitleWithContent {
  title: string;
  content?: string;
}

export interface ContentPart {
  content: string;
  title?: string;
}

export interface PartWithSpecialContent {
  title: string;
  specialOne: string;
  contentOne: string;
  specialTwo?: string;
  contentTwo?: string;
}

export interface MainContentWithParts {
  title: string;
  parts: PartWithSpecialContent[];
}

// Header
export interface HMenuType {
  page: string;
  path: string;
}

export interface LogoType {
  logo: string | null;
}

// Carousel
export interface CarouselType {
  image: string;
  alt: string;
  title: string;
  text: string;
  link: string;
}

// Home Services
export interface HomeServicesType {
  image: string | null;
  link: string | null;
  text: string | null;
  title: string | null;
}

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

// WWDCCard
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

// Accessibility
export interface AccessibilityContent {
  firstPart: string;
  mainTitle: string;
  middlePart: ContentPart[];
}

export interface StartContent {
  content: string;
  title: string;
}

export interface HelpContent {
  firstPart: string;
  mail: string;
  secondPart: string;
  title: string;
}

export interface EndContent {
  content: any;
  title: string;
}

export interface AccessibilityDocument {
  start: StartContent[];
  help: HelpContent;
  end: EndContent[];
  accessibility: AccessibilityContent;
}

// Privacy and Policy
export interface PrivacyAndPolicyDocument {
  one: PrivacyAndPolicyOne;
  two: TitleWithContent;
  three: TitleWithContent & { parts: string[] };
  four: TitleWithContent;
  five: TitleWithContent & { parts: string[] };
  six: TitleWithContent & { parts: string[] };
  seven: TitleWithContent;
  eight: TitleWithContent & { parts: string[] };
  nine: TitleWithContent & { parts: string[] };
}

export interface PrivacyAndPolicyOne {
  firstPartOne: string;
  firstPartTwo: string;
  firstSpecialPart: string;
  secondPart: string;
  thirdPart: string;
  title: string;
}

// Terms and Conditions
export interface TermsAndConditionsDocument {
  one: TermsAndConditionsOne;
  two: TitleWithContent[];
  three: TitleWithContent & { parts: string[] };
  four: TitleWithContent[];
  five: TitleWithContent & { parts: string[] };
}

export interface TermsAndConditionsOne {
  firstPart: string;
  secondPartOne: string;
  secondPartSpecial: string;
  secondPartTwo: string;
  title: string;
}

// EOE Diversity
export interface EOEDiversityDocument {
  mainTitle: string;
  one: TitleWithContent;
  two: TitleWithContent;
  three: TitleWithContent & { parts: string[] };
}

// Environmental Message
export interface EnvironmentalMessageDocument {
  title: string;
  firstPart: string;
  secondPart: string;
  thirdPart: string;
  fourthPart: TitleWithContent[];
  fifthPart: string;
}

// Blog
export interface BlogDocument {
  content: string;
  mainTitle: string;
  postArray: PostsArray[];
}

export interface PostsArray {
  date: string;
  image: string;
  link: string;
  title: string;
}

// Registration / Login
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
  one: TitleWithContent;
  two: TitleWithContent;
  three: MainContentWithParts;
  subThree: PartWithSpecialContent[];
  four: TitleWithContent;
  fourSub: TitleWithContent[];
  five: TitleWithContent;
  fiveSub: TitleWithContent[];
  six: TitleWithContent;
  sixSub: TitleWithContent[];
  seven: TitleWithContent;
  sevenSub: TitleWithContent[];
  eight: TitleWithContent;
  eightSub: TitleWithContent[];
  nine: TitleWithContent & { parts: string[] };
}

// Digital Printing
export interface DigitalPrintingDocument {
  one: TitleWithContent;
  two: TitleWithContent[];
  three: MainContentWithParts;
  threeSub: PartWithSpecialContent[];
  four: TitleWithContent;
  fourSub: TitleWithContent[];
  five: TitleWithContent;
  fiveSub: TitleWithContent[];
  six: TitleWithContent;
  sixSub: TitleWithContent[];
  seven: TitleWithContent;
  sevenSub: TitleWithContent[];
  eight: TitleWithContent;
  eightSub: TitleWithContent[];
  nine: TitleWithContent & { parts: string[] };
}

// Printing and Copying
export interface PrintingCopyingDocument {
  one: TitleWithContent;
  two: TitleWithContent[];
  three: TitleWithContent & { parts: string[] };
}

// Common Document
export interface CommonDocument {
  one: TitleWithContent;
  two: TitleWithContent[];
}

// Common Document With Array of Strings
export interface CommonDocumentWAS {
  one: TitleWithContent;
  two: string[];
}
export interface BusinessFormsType {
  one: TitleWithContent;
  two: string[];
  three: BFThree;
}
export interface BFThree {
  firstPart: string;
  secondPart: string;
  circle: string[];
}
