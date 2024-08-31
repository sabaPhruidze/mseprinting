import { useContext, useMemo, useState, useCallback } from "react";
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
import SendFileInputs from "../data/SendFileInputs";
import SFDetailsLeft from "../importantparts/SFDetailsLeft";
import SendFileDetailsRight from "../importantparts/SendFileDetailsRight";
import { rootContext } from "../Root";
import { sendEmailSecond } from "../config/EmailService";

type FormData = RQUseFormFirstPart & RQUseFormSecondPart & RQUseFormThirdPart;

export default function SendFile() {
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

  const onSubmitSF = useCallback(
    (data: FormData) => {
      if (rqSubmit && uploadedFiles.length > 0) {
        const dataWithFiles = { ...data, uploadedFiles };
        sendEmailSecond(dataWithFiles)
          .then(() => {
            dispatching("REQUEST_QUOTE_SUCCESS_SEND", true);
            dispatching("REQUEST_QUOTE_CHANGE", false);
            navigate("/");
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
      }
    },
    [rqSubmit, uploadedFiles, dispatching, navigate]
  );

  const handleFilesUpload = useCallback((files: string[]) => {
    setUploadedFiles(files);
  }, []);

  return (
    <GlobalContainerColumn>
      <RQForm onSubmit={handleSubmit(onSubmitSF)}>
        <GlobalBoxColumnStart>
          <RQPartBox>
            STEP 1 OF 2 <RQSpecialPart>ABOUT PROJECT</RQSpecialPart>
          </RQPartBox>
        </GlobalBoxColumnStart>
        <RowContainer>
          <RQContainerColumn>
            <RQh3Title>About Project</RQh3Title>
            <SFDetailsLeft collectInfoLeft={register} errors={errors} />
          </RQContainerColumn>
          <RQContainerColumn>
            <SendFileDetailsRight
              setUploadedFiles={handleFilesUpload}
              firstname={defaultValues.firstname || ""}
              lastname={defaultValues.lastname || ""}
            />
          </RQContainerColumn>
        </RowContainer>
        <GlobalBoxColumnStart>
          <RQPartBox>
            STEP 2 OF 2 <RQSpecialPart>PERSONAL INFORMATION</RQSpecialPart>
          </RQPartBox>
        </GlobalBoxColumnStart>
        <RowContainer>
          <RQContainerColumn>
            <RQh3Title>Required information</RQh3Title>
            <SendFileInputs
              collectInfo={register}
              errors={errors}
              section="firstPart"
            />
          </RQContainerColumn>
          <RQContainerColumn>
            <RQh3Title>Optional Details</RQh3Title>
            <SendFileInputs
              collectInfo={register}
              errors={errors}
              section="secondPart"
            />
          </RQContainerColumn>
        </RowContainer>

        <RQButton type="submit">Submit</RQButton>
      </RQForm>
    </GlobalContainerColumn>
  );
}
