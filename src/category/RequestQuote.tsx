import { useContext, useMemo } from "react";
import {
  RowContainer,
  RQPartBox,
  RQSpecialPart,
  RQh3Title,
  RQContainerColumn,
  RQForm,
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

export default function RequestQuote() {
  const context = useContext(rootContext);
  if (!context) {
    throw new Error("rootContext must be used within a Root provider");
  }
  const { state } = context;

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
        }
      : {};
  }, [state.user]); // Include dependencies to prevent unnecessary recalculations

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RQUseFormFirstPart & RQUseFormSecondPart & RQUseFormThirdPart>({
    defaultValues,
  });

  const onSubmitRQ = (
    data: RQUseFormFirstPart & RQUseFormSecondPart & RQUseFormThirdPart
  ) => {
    console.log(data);
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
            <RQProjectDetailsRight />
          </RQContainerColumn>
        </RowContainer>
      </RQForm>
    </GlobalContainerColumn>
  );
}
