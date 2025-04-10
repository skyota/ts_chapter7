import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Layout from "../layouts/Layout";
import TopPage from '../pages/TopPage/TopPage';
import PostDetail from '../pages/posts/PostDetail';
import Contact from '../pages/contact/Contact';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<TopPage />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
)

export default routes;
