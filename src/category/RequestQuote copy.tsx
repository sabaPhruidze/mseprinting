import { useContext, useMemo, useState, useCallback, useEffect } from "react";
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
  GlobalRepresentativesContainer,
  GlobalRepresentativeCard,
} from "../style/GlobalStyle";
import { useForm } from "react-hook-form";
import {
  RQUseFormFirstPart,
  RQUseFormSecondPart,
  RQUseFormThirdPart,
} from "../data/RequestQuoteData";
import RequestQuoteInputs from "../data/RequestQuoteInputs";
import RQProjectDetailsLeft from "../importantparts/RQProjectDetailsLeft";
import RQProjectDetailsRightCopy from "../importantparts/RQProjectDetailsRight copy";
import { rootContext } from "../Root";
import { sendEmail } from "../config/EmailService"; // Adjusted for your email sending function

type FormData = RQUseFormFirstPart & RQUseFormSecondPart & RQUseFormThirdPart;

export default function RequestQuoteCopy() {
  const context = useContext(rootContext);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [selectedRepresentative, setSelectedRepresentative] =
    useState("No preference"); // Default selected representative

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

  const onSubmitRQ = useCallback(
    (data: FormData) => {
      if (rqSubmit && uploadedFiles.length > 0 && selectedRepresentative) {
        const dataWithFiles = {
          ...data,
          uploadedFiles,
          representative: selectedRepresentative,
        }; // Include representative
        sendEmail(dataWithFiles)
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
    [rqSubmit, uploadedFiles, selectedRepresentative, dispatching, navigate]
  );

  const handleFilesUpload = useCallback((files: string[]) => {
    setUploadedFiles(files);
  }, []);

  const representatives = [
    { id: "rep1", name: "Doug Snider" },
    { id: "rep2", name: "Trish Benson" },
    { id: "rep3", name: "John Goodrich" },
    { id: "rep4", name: "Ethan Ellison" },
    { id: "rep5", name: "Merabi Pruidze" },
    { id: "rep6", name: "No preference" },
  ];

  // Automatically set "No preference" as the default checked radio button
  useEffect(() => {
    setSelectedRepresentative("No preference");
  }, []);

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
            <RQProjectDetailsRightCopy
              setUploadedFiles={handleFilesUpload}
              firstname={defaultValues.firstname || ""}
              lastname={defaultValues.lastname || ""}
            />
          </RQContainerColumn>
        </RowContainer>

        {/* Representative Selection */}
        <GlobalBoxColumnStart>
          <RQh3Title>Select a Representative</RQh3Title>
          <GlobalRepresentativesContainer>
            {representatives.map((rep) => (
              <GlobalRepresentativeCard key={rep.id}>
                <input
                  type="radio"
                  id={rep.id}
                  name="representative"
                  value={rep.name}
                  onChange={() => setSelectedRepresentative(rep.name)}
                  checked={selectedRepresentative === rep.name}
                  required
                />
                <label htmlFor={rep.id}>{rep.name}</label>
              </GlobalRepresentativeCard>
            ))}
          </GlobalRepresentativesContainer>
        </GlobalBoxColumnStart>

        <RQButton type="submit">Submit</RQButton>
      </RQForm>
    </GlobalContainerColumn>
  );
}