import { useDispatch } from 'react-redux';
import { setTitle } from 'src/store/headerTitleSlice';

function useHeaderTitleDispatch() {
  const dispatch = useDispatch();

  const dispatchTitle = (title: string) => {
    dispatch(setTitle(title));
  };

  return dispatchTitle;
}
export default useHeaderTitleDispatch;
