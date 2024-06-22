export const enum StoryType {
  New = 'newstories',
  Top = 'topstories',
  Best = 'beststories',
  Ask = 'askstories',
  Show = 'showstories',
  Job = 'jobstories'
}

export interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface Ask {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
}

export interface Job {
  by: string;
  id: number;
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface GenericStory {
  by: string;
  descendants?: number;
  id: number;
  kids?: number[];
  score: number;
  text?: string;
  time: number;
  title: string;
  type: string;
  url?: string;
}