import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../store/index";
import { allActionCreators } from "../store/slices/actionCreators";


export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useMemo(
    () => bindActionCreators(allActionCreators, dispatch),
    [dispatch]
  );
};
