import { createContext } from "react";

const AppContext = createContext([
  {
    first_name: '',
    last_name: '',
    email: '',
    successMessage: false,
    showModal: false,
  }
]);

export default AppContext;