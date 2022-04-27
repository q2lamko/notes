import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allAC } from '../state/reducers/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allAC, dispatch);
};
