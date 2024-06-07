// components/LoginRadio.tsx
import React, { useContext } from "react";
import { rootContext } from "../Root";

const LoginRadio = () => {
  const loginContext = useContext(rootContext);

  if (!loginContext) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { state, dispatching } = loginContext;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatching("SHOW_REGISTER", !state.radioForRegLog);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="login"
          checked={!state.radioForRegLog}
          onChange={handleRadioChange}
        />
        I have an account
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="register"
          checked={state.radioForRegLog}
          onChange={handleRadioChange}
        />
        I don't have an account
      </label>
    </div>
  );
};

export default LoginRadio;
