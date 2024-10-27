// Common Types

// Title With Content
export interface TitleWithContent {
  title?: string;
  content?: string | TitleWithContent[] | SpecialStandard | any;
}

// Title With Content
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
export interface FrontType {
  title: string;
  content: string;
  button: string;
}

// search engine
export interface SearchResultDocument {
  title: string;
  link: string;
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
  alt?: string | "";
  title: string;
  text: string;
  link: string;
}

export interface HomeServicesFullDatasType {
  DirectMailAndMailingServices: HSFDataEach[] | null;
  FulfillmentServices: HSFDataEach[] | null;
  GraphicDesign: HSFDataEach | null;
  IndustrySpecific: HSFDataEach[] | null;
  LabelsAndPackaging: HSFDataEach[] | null;
  MarketingServices: HSFDataEach[] | null;
  OnlineOrderingPortals: HSFDataEach | null;
  PrintingAndCopying: HSFDataEach[] | null;
  Signs: HSFDataEach[] | null;
  TradeshowsAndEvents: HSFDataEach[] | null;
  left: string[] | null;
}

export interface HSFDataEach {
  link: string;
  title: string;
}

// WWDCCard

export interface WWDCSpecialitiesContentType {
  paragraph: string | null;
  title: string | null;
}

// Accessibility
export interface AccessibilityContent {
  firstPart: string;
  mainTitle: string;
  middlePart: TitleWithContent[];
}

export interface HelpContent {
  firstPart: string;
  mail: string;
  secondPart: string;
  title: string;
}

export interface AccessibilityDocument {
  start: TitleWithContent[];
  help: HelpContent;
  end: TitleWithContent[];
  accessibility: AccessibilityContent;
}

// Privacy and Policy
export interface PrivacyAndPolicyDocument {
  one: PrivacyAndPolicyOne;
  two: TitleWithContent;
  three: PrivacyAndPolicyThree;
  four: BFThree;
  five: TermsAndConditionsOne;
  six: TermsAndConditionsThree;
  seven: TitleWithContent;
  eight: TermsAndConditionsThree;
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
export interface PrivacyAndPolicyThree {
  title: string;
  firstPart: string;
  secondPart: string;
  thirdPart: string;
  fourthPart: string;
  fifthPart: string;
  sixthPart: string;
}
export interface PrivacyAndPolicyNine {
  title: string;
  firstPart: string;
  secondPart: string;
  thirdPart: string;
  fourthPartOne: string;
  fourthSpecialPart: string;
  fourthPartTwo: string;
  fifthPart: string;
}
// Terms and Conditions
export interface TermsAndConditionsDocument {
  one: TermsAndConditionsOne;
  two: TitleWithContent[];
  three: TermsAndConditionsThree[];
  four: TitleWithContent[];
  five: TermsAndConditionsThree;
}

export interface TermsAndConditionsOne {
  firstPart: string;
  secondPartOne: string;
  secondPartSpecial: string;
  secondPartTwo: string;
  title: string;
}
export interface TermsAndConditionsThree {
  firstPartOne: string;
  firstPartSpecial: string;
  firstPartTwo: string;
  secondPart?: string;
  title: string;
}
// EOE Diversity
export interface EOEDiversityDocument {
  mainTitle: string;
  one: EOEDiversitySpecial;
  two: TitleWithContent;
  three: EOEDiversitySpecial;
}
export interface EOEDiversitySpecial {
  title: string;
  firstPart: string;
  secondPart: string;
  thirdPart?: string;
  fourthPart?: string;
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
  one: OffsetPrintingOne;
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
  nine: EOEDiversitySpecial;
  ten: string;
  front: FrontType;
}
export interface OffsetPrintingOne {
  mainTitle: string;
  title: string;
  content: string;
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
  nine: EOEDiversitySpecial;
  ten: string;
  front: FrontType;
}

// Printing and Copying
export interface PrintingCopyingDocument {
  one: TitleWithContent;
  two: TitleWithContent[];
  three: BFThree;
  four?: string;
  front: FrontType;
}

// Common Document
export interface CommonDocument {
  one: TitleWithContent;
  two: TitleWithContent[];
  third?: string;
  three?: string;
  front: FrontType;
}

// Common Document With Array of Strings
export interface CommonDocumentWAS {
  one: TitleWithContent;
  two: string[];
  three?: string;
  front: FrontType;
}
export interface SubCategoryCommonTypes {
  one: FrontType;
  two: string[];
}
// business forms
export interface BusinessFormsType {
  one: TitleWithContent;
  two: string[];
  three: BFThree;
  fourth: string;
  front: FrontType;
}

export interface BFThree {
  firstPart: string;
  secondPart: string;
  circle: string[];
  title?: string;
}
export interface LabelsPackagingDocument {
  one: TitleWithContent;
  two: TitleWithContent[];
  three: TitleWithContent;
  four: string;
  front: FrontType;
}
export interface AboutUsDocument {
  one: TitleWithContent;
  two: TitleWithContent;
  three: TitleWithContent;
  four: TitleWithContent;
  five: TitleWithContent;
  six: TitleWithContent;
  seven: TitleWithContent;
}
export interface ProductServicesDocument {
  one: TitleWithContent;
  two: TitleWithContent[];
  three: TitleWithContent;
}

export interface SpecialStandard {
  Special: string;
  Standard: string;
}
export interface ResourcesDocument {
  one: TitleWithContent;
  two: TitleWithContent[];
}
