import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RowContainer,
  RQPartBox,
  RQSpecialPart,
  RQh3Title,
  RQContainerColumn,
  RQForm,
  RQButton,
} from "../style/RequestQuoteStyle";
import {
  GlobalContainerColumn,
  GlobalBoxColumnStart,
} from "../style/GlobalStyle";
import { useForm } from "react-hook-form";
import {
  RQUseFormFirstPart,
  RQUseFormSecondPart,
  RQUseFormThirdPart,
} from "../data/RequestQuoteData";
import RequestQuoteInputs from "../data/RequestQuoteInputs";
import RQProjectDetailsLeft from "../importantparts/RQProjectDetailsLeft";
import RQProjectDetailsRight from "../importantparts/RQProjectDetailsRight";
import { rootContext } from "../Root";
import { sendEmail } from "../config/EmailService";

type FormData = RQUseFormFirstPart & RQUseFormSecondPart & RQUseFormThirdPart;

export default function RequestQuote() {
  const context = useContext(rootContext);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }
  const { state, dispatching } = context;
  const { rqSubmit } = state;
  const navigate = useNavigate();
  const defaultValues = useMemo(() => {
    return state.user
      ? {
          firstname: state.user.firstname,
          lastname: state.user.lastname,
          email: state.user.email,
          emailVerification: state.user.email,
          phone: state.user.phone || "",
          jobTitle: state.user.jobTitle || "",
          company: state.user.company || "",
          extension: "",
          projectName: "",
          quantity: 0,
          description: "",
          dueDate: "",
          terms: false,
          uploadedFiles: [],
        }
      : {};
  }, [state.user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues,
  });

  const onSubmitRQ = (data: FormData) => {
    dispatching("REQUEST_QUOTE_CHANGE", true);
    if (rqSubmit && uploadedFiles[0].length > 1) {
      const dataWithFiles = { ...data, uploadedFiles };
      console.log("Form data:", dataWithFiles);
      sendEmail(dataWithFiles)
        .then(() => {
          dispatching("REQUEST_QUOTE_CHANGE", false);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <GlobalContainerColumn>
      <RQForm onSubmit={handleSubmit(onSubmitRQ)}>
        <GlobalBoxColumnStart>
          <RQPartBox>
            STEP 1 OF 2 <RQSpecialPart>PERSONAL INFORMATION</RQSpecialPart>
          </RQPartBox>
        </GlobalBoxColumnStart>
        <RowContainer>
          <RQContainerColumn>
            <RQh3Title>Required information</RQh3Title>
            <RequestQuoteInputs
              collectInfo={register}
              errors={errors}
              section="firstPart"
            />
          </RQContainerColumn>
          <RQContainerColumn>
            <RQh3Title>Optional Details</RQh3Title>
            <RequestQuoteInputs
              collectInfo={register}
              errors={errors}
              section="secondPart"
            />
          </RQContainerColumn>
        </RowContainer>
        <GlobalBoxColumnStart>
          <RQPartBox>
            STEP 2 OF 2 <RQSpecialPart>ABOUT PROJECT</RQSpecialPart>
          </RQPartBox>
        </GlobalBoxColumnStart>
        <RowContainer>
          <RQContainerColumn>
            <RQh3Title>About Project</RQh3Title>
            <RQProjectDetailsLeft collectInfoLeft={register} errors={errors} />
          </RQContainerColumn>
          <RQContainerColumn>
            <RQProjectDetailsRight
              setUploadedFiles={setUploadedFiles}
              firstname={defaultValues.firstname || ""}
              lastname={defaultValues.lastname || ""}
            />
          </RQContainerColumn>
        </RowContainer>
        <RQButton type="submit">Submit</RQButton>
      </RQForm>
    </GlobalContainerColumn>
  );
}
