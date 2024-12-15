import { useContext, useMemo, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HelmetComponent from "../importantparts/Helmet";
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
import RQProjectDetailsRight from "../importantparts/RQProjectDetailsRight";
import { rootContext } from "../Root";
import { sendEmail } from "../config/EmailService";

type FormData = RQUseFormFirstPart & RQUseFormSecondPart & RQUseFormThirdPart;

export default function RequestQuote() {
  const context = useContext(rootContext);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [selectedRepresentative, setSelectedRepresentative] =
    useState("No preference");

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
    async (data: FormData) => {
      const dataWithFiles = {
        ...data,
        uploadedFiles,
        representative: selectedRepresentative,
      };
      try {
        await sendEmail(dataWithFiles);
        dispatching("REQUEST_QUOTE_SUCCESS_SEND", true);
        dispatching("REQUEST_QUOTE_CHANGE", false);
        navigate("/");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    },
    [rqSubmit, uploadedFiles, selectedRepresentative, dispatching, navigate]
  );

  const handleFilesUpload = useCallback((newFiles: string[]) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

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
        title="Request a Quote | MSE Printing"
        description="Submit a quote request for custom printing and marketing services with MSE Printing. Our team will provide a tailored solution for your business needs."
      />

      <RQForm onSubmit={handleSubmit(onSubmitRQ)} autoComplete="off">
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
              setUploadedFiles={handleFilesUpload}
              firstname={defaultValues.firstname || ""}
              lastname={defaultValues.lastname || ""}
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
