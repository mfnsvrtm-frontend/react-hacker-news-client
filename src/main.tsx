import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import 'antd/dist/reset.css';
import './styles.css'
import StoryList from './components/StoryList.tsx';
import { StoryRoute } from './types.ts';
import StorySearchList from './components/StorySearchList.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Navigate to='new' />} />
      <Route path='new' element={<StoryList route={StoryRoute.New} />} />
      <Route path='top' element={<StoryList route={StoryRoute.Top} />} />
      <Route path='best' element={<StoryList route={StoryRoute.Best} />} />
      <Route path='ask' element={<StoryList route={StoryRoute.Ask} />} />
      <Route path='show' element={<StoryList route={StoryRoute.Show} />} />
      <Route path='job' element={<StoryList route={StoryRoute.Job} />} />
      <Route path='search' element={<StorySearchList/>} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
