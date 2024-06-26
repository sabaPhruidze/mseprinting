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
export interface PrivacyPolicySection {
  title: string;
  content: string | PrivacyPolicyContentPart[];
}

export interface PrivacyPolicyContentPart {
  firstPartOne?: string;
  firstPartTwo?: string;
  firstSpecialPart?: string;
  secondPart?: string;
  thirdPart?: string;
  fifthPart?: string;
  fourthPart?: string;
  secondPartOne?: string;
  secondPartTwo?: string;
  secondSpecialPart?: string;
  sixthPartOne?: string;
  sixthPartTwo?: string;
  sixthSpecialPart?: string;
}
