import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginConnection from './Connection/LoginConnection.jsx'
import SignupContent from './Connection/SignupContent.jsx'
import BrowseAll from './Connection/BrowseAll.jsx'
import ViewMentorprofile from './Connection/ViewMentorprofile.jsx'
import MentorForm from './Connection/MentorForm.jsx'
import SuccessPage from './Connection/Mentorapplication-success.jsx'
import Stilldeveloping from './Connection/Stilldeveloping.jsx'
import AfterloginContent from './Connection/AfterloginContent.jsx'
import MentorProfileContent from './Connection/MentorProfileContent.jsx'
import MentorProfileHome from './Connection/MentorprofileHome.jsx'
import MentorEdit from './Components/MentorEdit/MentorEdit.jsx'
import MentorCalendar from './Components/MentorCalendar/MentorCalendar.jsx'
import MentorChat from './Components/MentorChat/MentorChat.jsx'
import MenteeDashboard from './Components/MenteeDashboard/MenteeDashboard.jsx'

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
    path:"/Mentorapplication-success",
    element: <SuccessPage />
  },
  {
    path:"/",
    element: <App />
  },
  {
    path:"/engineering",
    element: <Stilldeveloping />
  },
  {
    path:"/design",
    element: <Stilldeveloping />
  },
  {
    path:"/low",
    element: <Stilldeveloping />
  },
  {
    path:"/career",
    element: <Stilldeveloping />
  },
  {
    path:"/top",
    element: <Stilldeveloping />
  },
  {
    path:"/afterlogincontent",
    element: <AfterloginContent />
  },
  {
    path:"/dashboard",
    element: <MentorProfileContent />
  },
  {
    path:"/sign-out",
    element: <App />
  },
  {
    path:"/new",
    element: <AfterloginContent />
  },
  {
    path:"/home",
    element: <MentorProfileHome />
  },
  {
    path:"/profile",
    element: <MentorEdit />
  },
  {
    path:"/calendar",
    element: <MentorCalendar />
  },
  {
    path:"/chat",
    element: <MentorChat />
  },
  {
    path:"/mentee",
    element: <MenteeDashboard />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
