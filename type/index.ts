export interface CulturalEvent {
  ETCDesc: string;
  codeName: string;
  date: string;
  endDate: string;
  guName: string;
  id: number;
  mainImg: string;
  orgLink: string;
  orgName: string;
  place: string;
  player: string;
  program: string;
  rgstDate: string;
  strtDate: string;
  themeCode: string;
  ticket: string;
  title: string;
  useFee: string;
  useTrgt: string;
}

export interface InstagramFeed {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  username: string;
}

export interface Blog {
  id: number;
  title: string;
  content: string[];
}
