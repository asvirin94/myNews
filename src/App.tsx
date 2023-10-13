import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import LoadingPage from "./pages/loading-page/loading-page";
import MainPage from "./pages/main-page/main-page";
import { loadNewsAction } from "./store/actions";

export default function App(): JSX.Element {
  const isFirstTimeLoaded = useAppSelector((state) => state.isFirstTimeLoaded);
  const dispatch = useAppDispatch();
  const params = useAppSelector((state) => state.paramsForFetch);

  useEffect(() => {
    dispatch(loadNewsAction(params));
  }, [params])

  if(!isFirstTimeLoaded) {
    return <LoadingPage />
  }

  return <MainPage />;
}
