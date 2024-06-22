import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import 'antd/dist/reset.css';
import './styles.css'
import StoryList from './components/StoryList.tsx';
import { StoryType } from './types.ts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Navigate to='new' />} />
      <Route path='new' element={<StoryList storyType={StoryType.New} />} />
      <Route path='top' element={<StoryList storyType={StoryType.Top} />} />
      <Route path='best' element={<StoryList storyType={StoryType.Best} />} />
      <Route path='ask' element={<StoryList storyType={StoryType.Ask} />} />
      <Route path='show' element={<StoryList storyType={StoryType.Show} />} />
      <Route path='job' element={<StoryList storyType={StoryType.Job} />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
