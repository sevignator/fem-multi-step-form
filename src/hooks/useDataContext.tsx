import React from "react";
import { DataContext } from "@context/DataProvider";

function useDataContext() {
  const dataContext = React.useContext(DataContext);

  if (!dataContext) {
    throw new Error('Data context unavailable.');
  }

  return dataContext;
}

export default useDataContext;
