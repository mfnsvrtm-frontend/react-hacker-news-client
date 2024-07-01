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

export type Story = ShowStory | AskStory | JobStory;

export const enum StoryKind {
  Show = 'Show HN',
  Ask = 'Ask HN',
  Job = 'HN Job'
}

export interface StoryBase {
  id: number;
  title: string;
  by: string;
  score: number;
  time: number;
}

export interface ShowStory extends StoryBase {
  kind: StoryKind.Show;
  descendants: number;
  kids: number[];
  url: string;
}

export interface AskStory extends StoryBase {
  kind: StoryKind.Ask;
  descendants: number;
  kids: number[];
  text: string;
}

export interface JobStory extends StoryBase {
  kind: StoryKind.Job;
  text: string;
  url: string;
}

export interface ApiSearchResult {
  hits: { objectID: string }[];
  nbHits: number;
}

export const mapStory = ({
  by,
  descendants,
  id,
  kids,
  score,
  text,
  time,
  title,
  type,
  url,
}: GenericStory): Story => {
  title = title.replace(/^((show hn)|(ask hn)): /i, '');

  const base = {
    id,
    title,
    by,
    score,
    time,
  };

  if (type === 'job') {
    return {
      kind: StoryKind.Job,
      text: text!,
      url: url!,
      ...base
    };
  } else if (url !== undefined) {
    return {
      kind: StoryKind.Show,
      descendants: descendants!,
      kids: kids!,
      url: url!,
      ...base
    };
  } else {
    return {
      kind: StoryKind.Ask,
      descendants: descendants!,
      kids: kids!,
      text: text!,
      ...base
    };
  }
};

export const hasUrl = (story: Story): story is ShowStory | JobStory => {
  return [StoryKind.Show, StoryKind.Job].includes(story.kind);
}

export const hasDescendants = (story: Story): story is ShowStory | AskStory => {
  return [StoryKind.Show, StoryKind.Ask].includes(story.kind);
}

export const mapSearchResults = (results: ApiSearchResult) => {
  return {
    results: results.hits.map(({ objectID }) => parseInt(objectID)),
    resultCount: results.nbHits
  }
}