import styled from "styled-components";
import { Btn } from "./conponents/Btn";
import { InputSample } from "./conponents/InputSample";
import { ManyInputSample } from "./conponents/ManyInputSample";
import { Test } from "./conponents/Test";

const App = () => {
  // const Sex = styled.h1`
  //   color: ${(props) => props.$sex};
  // `;

  // const Sexy = styled.h1`
  //   color: ${(props) => props.$sexy};
  // `;

  return (
    <>
      {/* <Sex $sex={"red"}>
        <h1>props</h1>
      </Sex>

      <Sexy $sexy={"pink"}>
        <h1>props</h1>
      </Sexy> */}

      {/* <Btn /> */}
      {/* <InputSample /> */}
      {/* <ManyInputSample /> */}
      <Test />
    </>
  );
};

export default App;
