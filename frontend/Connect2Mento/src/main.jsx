import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginConnection from './Connection/LoginConnection.jsx'
import SignupContent from './Connection/SignupContent.jsx'
import BrowseAll from './Connection/BrowseAll.jsx'
import ViewMentorprofile from './Connection/ViewMentorprofile.jsx'
import MentorForm from './Connection/MentorForm.jsx'


import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/login",
    element: <LoginConnection />
  },
  {
    path:"/signup-mentee",
    element: <SignupContent />
  },
  {
    path:"/browse",
    element: <BrowseAll />
  },
  {
    path:"/view",
    element: <ViewMentorprofile />
  },
  {
    path:"/signup-mentor",
    element: <MentorForm />
  },
  {
    path:"/",
    element: <App />
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
