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
} from "../data/RequestQuoteData";
import RequestQouteInputs from "../data/RequestQuoteInputs";
import RQProjectDetailsLeft from "../importantparts/RQProjectDetailsLeft";
import {
  RQFileUploadContainer,
  RQFileUploadButton,
  RQWarningText,
} from "../style/RequestQuoteStyle";
import RQProjectDetailsRight from "../importantparts/RQProjectDetailsRight";

export default function RequestQuote() {
  const {
    register: collectInfo,
    handleSubmit,
    formState: { errors },
  } = useForm<RQUseFormFirstPart & RQUseFormSecondPart>();

  const onSubmitRQ = (data: RQUseFormFirstPart & RQUseFormSecondPart) => {
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
            <RequestQouteInputs
              collectInfo={collectInfo}
              errors={errors}
              section="firstPart"
            />
          </RQContainerColumn>
          <RQContainerColumn>
            <RQh3Title>Optional Details</RQh3Title>
            <RequestQouteInputs
              collectInfo={collectInfo}
              errors={errors}
              section="secondPart"
            />
          </RQContainerColumn>
        </RowContainer>
        {/* before it */}
        <GlobalBoxColumnStart>
          <RQPartBox>
            STEP 2 OF 2 <RQSpecialPart>ABOUT PROJECT</RQSpecialPart>
          </RQPartBox>
        </GlobalBoxColumnStart>

        <RowContainer>
          <RQContainerColumn>
            <RQh3Title>About Project</RQh3Title>
            <RQProjectDetailsLeft />
          </RQContainerColumn>
          <RQContainerColumn>
            <RQProjectDetailsRight />
          </RQContainerColumn>
        </RowContainer>
      </RQForm>
    </GlobalContainerColumn>
  );
}
