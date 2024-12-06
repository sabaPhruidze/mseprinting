import { useContext, useMemo, useState, useCallback, useEffect } from "react";
import HelmetComponent from "../importantparts/Helmet"; // Import HelmetComponent for SEO
import { useNavigate, Navigate } from "react-router-dom";
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
import SendFileInputs from "../data/SendFileInputs";
import SFDetailsLeft from "../importantparts/SFDetailsLeft";
import SendFileDetailsRight from "../importantparts/SendFileDetailsRight";
import { rootContext } from "../Root";
import { sendEmailSecond } from "../config/EmailService";

type FormData = RQUseFormFirstPart & RQUseFormSecondPart & RQUseFormThirdPart;

export default function SendFile() {
  const context = useContext(rootContext);

  if (!context) {
    console.error("rootContext is missing. Redirecting to home.");
    return <Navigate to="/" replace />;
  }

  const { state, dispatching } = context;
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [selectedRepresentative, setSelectedRepresentative] =
    useState("No preference");

  const { rqSubmit } = state;
  const navigate = useNavigate();

  const defaultValues = useMemo(() => {
    return state.user
      ? {
          firstname: state.user.firstname || "",
          lastname: state.user.lastname || "",
          email: state.user.email || "",
          emailVerification: state.user.email || "",
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
      if (rqSubmit && uploadedFiles.length > 0 && selectedRepresentative) {
        const dataWithFiles = {
          ...data,
          uploadedFiles,
          representative: selectedRepresentative,
        };
        sendEmailSecond(dataWithFiles).then(() => {
          dispatching("REQUEST_QUOTE_SUCCESS_SEND", true);
          dispatching("REQUEST_QUOTE_CHANGE", false);
          navigate("/");
        });
      }
    },
    [rqSubmit, uploadedFiles, selectedRepresentative, dispatching, navigate]
  );

  const handleFilesUpload = useCallback(
    (value: React.SetStateAction<string[]>) => {
      setUploadedFiles(value); // Pass the value directly to the state setter
    },
    []
  );

  const representatives = [
    { id: "rep1", name: "Doug Snider" },
    { id: "rep2", name: "Trish Benson" },
    { id: "rep3", name: "John Goodrich" },
    { id: "rep4", name: "Ethan Ellison" },
    { id: "rep5", name: "Merabi Pruidze" },
    { id: "rep6", name: "No preference" },
  ];

  useEffect(() => {
    setSelectedRepresentative("No preference");
  }, []);

  return (
    <GlobalContainerColumn>
      <HelmetComponent
        title="Send File | MSE Printing"
        description="Easily send files to MSE Printing for your project. Provide project details, upload files, and select a representative for assistance."
      />

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
