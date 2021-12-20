import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootStateType} from "../state/store";

export const useTypedSelector:TypedUseSelectorHook<RootStateType> = useSelector