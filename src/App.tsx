import { RouterProvider } from "react-router";
import routes from './routes/routes';

const App: React.FC = () => {
  return <RouterProvider router={routes} />
}

export default App;
