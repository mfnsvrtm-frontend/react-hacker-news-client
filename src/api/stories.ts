import axios from 'axios';
import { StoryRoute } from '../types';
import { ApiSearchResult, GenericStory, Comment, mapSearchResults, mapStory } from '.';

const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/'
});

export const fetchStories = (route: StoryRoute) => {
  return () => get<number[]>(route);
};

export const fetchStory = (id: number) => {
  return () => get<GenericStory>(`item/${id}`).then(mapStory);
};

export const fetchComment = (id: number) => {
  return () => get<Comment>(`item/${id}`);
}

const get = <T>(url: string) => {
  return instance.get<T>(`${url}.json`).then(response => response.data);
};

export const searchStories = (search: string, pageSize: number, pageNumber: number) => {
  return () => {
    const promise = axios.get<ApiSearchResult>(`https://hn.algolia.com/api/v1/search`, {
      params: {
        tags: 'story',
        query: search,
        hitsPerPage: pageSize,
        page: pageNumber
      }
    });
    return promise.then(response => mapSearchResults(response.data));
  };
};
