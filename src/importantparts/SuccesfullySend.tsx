import React, { useContext } from "react";
import { rootContext } from "../Root";
import {
  AlertContainer,
  AlertMessage,
  AlertButton,
  Overlay,
} from "../style/SuccesfullySendStyles";

export default function SuccesfullySend() {
  const context = useContext(rootContext);

  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { dispatching } = context;
  return (
    <Overlay>
      <AlertContainer>
        <AlertMessage>
          Congratulations, your information has been sent successfully.
        </AlertMessage>
        <AlertButton
          onClick={() => dispatching("REQUEST_QUOTE_SUCCESS_SEND", false)}
        >
          Understood
        </AlertButton>
      </AlertContainer>
    </Overlay>
  );
}
