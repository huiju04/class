import { useState } from "react";
import styled from "styled-components";
const Wrap = styled.div`
    max-width: 450px;
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    margin: 0 auto;
    padding: 100px 3%;
    text-align: center;
  `;

const Header = styled.header`
  text-align: center;
  color: #333;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  samp {
    color: lightblue;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Section = styled.section``;

const Input = styled.input`
  width: 100%;
  height: 35px;
  font-size: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  border-bottom: 1px solid #dbdbdb;
`;

const Button = styled.button`
  width: 330px;
  height: 40px;
  border: 1px solid lightblue;
  background-color: lightblue;
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-top: 5px;
  cursor: pointer;
`;

const PTitle = styled.h2`
  font-size: 16px;
  margin-top: 50px;
  samp {
    color: lightblue;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PWrap = styled.div`
  font-size: 15px;
  text-align: left;
  margin-top: 50px;
  color: #333;
  p {
    margin-bottom: 30px;
    hr {
      border-bottom: 0.3px solid #dbdbdb;
    }
  }
`;

export const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    email: "",
  });

  const { name, password, email } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      password: "",
      email: "",
    });
  };
  return (
    <Wrap>
      <Header>
        <Title>가입하기</Title>
        <SubTitle>
          이미 계정이 있습니까? <samp>로그인</samp>
        </SubTitle>
      </Header>

      <Section>
        <Input
          name="name"
          type="text"
          placeholder="아이디"
          onChange={onChange}
          value={name}
        ></Input>

        <Input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={onChange}
          value={password}
        ></Input>

        <Input
          name="email"
          type="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        ></Input>
      </Section>

      <PTitle>
        이대로 <samp>회원가입</samp> 하시겠습니까?
      </PTitle>

      <PWrap>
        <p>
          아이디: {name} <hr />
        </p>

        <p>
          비밀번호: {password} <hr />
        </p>

        <p>
          이메일: {email} <hr />
        </p>
      </PWrap>

      <Button onClick={onReset}>가입하기</Button>
    </Wrap>
  );
};
