// components/LoginRadio.tsx
import React, { useContext } from "react";
import { rootContext } from "../Root";
import { RadioContainer } from "../style/LoginStyles";

const LoginRadio = () => {
  const loginContext = useContext(rootContext);

  if (!loginContext) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { state, dispatching } = loginContext;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatching("SWITCH_LOG_REG", !state.radioForRegLog);
  };

  return (
    <RadioContainer>
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
    </RadioContainer>
  );
};

export default LoginRadio;