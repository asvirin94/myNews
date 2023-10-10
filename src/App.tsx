import MainPage from "./pages/main-page/main-page";
import { useAppSelector } from "./hooks/hooks";
import LoadingPage from "./pages/loading-page/loading-page";

export default function App(): JSX.Element {
  const areNewsLoaded = useAppSelector((state) => state.areNewsloaded);

  if (!areNewsLoaded) {
    return <LoadingPage />;
  }
  
  return <MainPage />;
}
