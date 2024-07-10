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

export default function RequestQuote() {
  // const onSubmitRQ = {() => console.log('onsubmit')}

  return (
    <GlobalContainerColumn>
      <RQForm>
        <GlobalBoxColumnStart>
          <RQPartBox>
            STEP 1 OF 2 <RQSpecialPart>PERSONAL INFORMATION</RQSpecialPart>
          </RQPartBox>
        </GlobalBoxColumnStart>
        <RowContainer>
          <RQContainerColumn>
            <RQh3Title>Required information</RQh3Title>
          </RQContainerColumn>
          <RQContainerColumn>
            <RQh3Title>Optional Details</RQh3Title>
          </RQContainerColumn>
        </RowContainer>

        <GlobalBoxColumnStart>
          <RQPartBox>
            STEP 2 OF 2 <RQSpecialPart>ABOUT PROJECT</RQSpecialPart>
          </RQPartBox>
        </GlobalBoxColumnStart>

        <RowContainer>
          <GlobalContainerColumn></GlobalContainerColumn>
          <GlobalContainerColumn></GlobalContainerColumn>
        </RowContainer>
      </RQForm>
    </GlobalContainerColumn>
  );
}
