import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 3 4px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  /* background-color: red; */
  font-size: 32px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 7px;
  color: rgba(0, 0, 0, 0.6);
  margin: 270px;
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 49px;
  transition-duration: 195ms;
  font-size: 30px;
  font-weight: 400;
  line-height: 60px;
  padding: 17px 35px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768) {
    margin: auto;
    min-height: 0px;
  }
`;

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href='/'>
          <img src='src/assets/login-svg.png' alt='LinkedIn' />
        </a>
        <div>
          <Join>Join now</Join>
        </div>
        <SignIn>Sign in</SignIn>
      </Nav>
      <Section>Section</Section>
    </Container>
  );
};

export default Login;
