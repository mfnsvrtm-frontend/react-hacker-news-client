import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Navigate, Route, RouterProvider, createMemoryRouter, createRoutesFromElements } from 'react-router-dom';

import 'antd/dist/reset.css';
import './styles.css'
import StoryRouteList from './components/StoryRouteList.tsx';
import { StoryRoute } from './types.ts';
import StorySearchList from './components/StorySearchList.tsx';

const router = createMemoryRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Navigate to='new' />} />
      <Route path='new' element={<StoryRouteList route={StoryRoute.New} />} />
      <Route path='top' element={<StoryRouteList route={StoryRoute.Top} />} />
      <Route path='best' element={<StoryRouteList route={StoryRoute.Best} />} />
      <Route path='ask' element={<StoryRouteList route={StoryRoute.Ask} />} />
      <Route path='show' element={<StoryRouteList route={StoryRoute.Show} />} />
      <Route path='job' element={<StoryRouteList route={StoryRoute.Job} />} />
      <Route path='search' element={<StorySearchList/>} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
