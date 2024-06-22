import axios from 'axios';
import { GenericStory, StoryType } from '../types';

const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

export const fetchStories = (storyType: StoryType) => {
  return () => get<number[]>(storyType);
}

export const fetchStory = (id: number) => {
  return () => get<GenericStory>(`item/${id}`);
}

const get = <T>(url: string) => {
  return instance.get<T>(`${url}.json`).then(response => response.data);
}