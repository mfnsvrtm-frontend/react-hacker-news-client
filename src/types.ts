export const enum StoryRoute {
  New = 'newstories',
  Top = 'topstories',
  Best = 'beststories',
  Ask = 'askstories',
  Show = 'showstories',
  Job = 'jobstories'
}

export interface OutletContextType {
  search: string;
  setSelectedStory: React.Dispatch<React.SetStateAction<number | null>>;
}