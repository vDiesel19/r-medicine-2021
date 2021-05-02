import { createContext } from "react";

const AppContext = createContext([
  {
    first_name: '',
    last_name: '',
    email: '',
    successMessage: false,
  }
]);

export default AppContext;