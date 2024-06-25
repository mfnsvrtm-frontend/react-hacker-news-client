import axios from 'axios';
import { StoryRoute } from '../types';
import { GenericStory, mapStory } from '.';

const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

export const fetchStories = (route: StoryRoute) => {
  return () => get<number[]>(route);
}

export const fetchStory = (id: number) => {
  return () => get<GenericStory>(`item/${id}`).then(mapStory);
}

const get = <T>(url: string) => {
  return instance.get<T>(`${url}.json`).then(response => response.data);
}