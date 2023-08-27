import React from "react";
import ReactDOM from "react-dom/client";
import "./style/reset.css";
import "./style/style.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Main from "./pages/main/Main";
import App from "./App";
import ServiceLabeling from "./pages/service-labeling/ServiceLabeling";
import About from "./pages/about/About";
import AiDevelopment from "./pages/ai-development/AiDevelopment";
import Education from "./pages/education/Education";
import Contact from "./pages/contact/Contact";
import Government from "./pages/government/Government";
import DataDealing from "./pages/data-dealing/DataDealing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App component={<Main />} />,
  },
  {
    path: "/introduce",
    element: <App component={<About />} />,
  },
  /* 데이터 가공 */
  // {
  //   path: "/gendata-service-labeling",
  //   element: <App component={< />} />,
  // },
  /* 원천 데이터 수집 */
  // {
  //   path: "/data-collection",
  //   element: <App component={< />} />,
  // },
  /* 품질 및 보안 */
  // {
  //   path: "/inhouse-operation",
  //   element: <App component={< />} />,
  // },
  {
    path: "/government-support-project",
    element: <App component={<Government />} />,
  },
  {
    path: "/data-dealing",
    element: <App component={<DataDealing />} />,
  },
  {
    path: "/gendata-service-labeling",
    element: <ServiceLabeling />,
  },
  {
    path: "/ai-development",
    element: <App component={<AiDevelopment />} />,
  },
  {
    path: "/ai-education",
    element: <App component={<Education />} />,
  },
  /* 프로젝트 공고 */
  // {
  //   path: "AI-data-project",
  //   element: <App component={< />} />,
  // },
  /* AI 서비스 */
  // {
  //   path: "AI-service-paga",
  //   element: <App component={< />} />,
  // },
  /* 소식 */
  // {
  //   path: "/news",
  //   element: <App component={< />} />,
  // },
  {
    path: "/contact",
    element: <App component={<Contact />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
