import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 18px;
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
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  padding: 31px 45px;
  text-decoration: none;
  border-radius: 49px;
  color: rgba(0, 0, 0, 0.6);
  margin: 270px;
  margin-right: 0px;
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
  margin-right: 1px;
  margin-left: -100px;
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
  font-size: 30px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #8f5849;
    font-weight: 200px;
    line-height: 70px;
    display: inline;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2px;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const Image = styled.img`
  max-width: 100%;
  /* height: 100vh; */
`;

const Form = styled.div`
  margin-top: 900px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 /60%),
    inset 0 0 0 2px rgb(0 0 0 /0%) inset 0 0 0 1px rgb(0 0 0 /0);
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
      <Section>
        <Hero>
          <h1>Find jobs through your community</h1>
        </Hero>
        <Form>
          <ImageContainer>
            <Image src='src/assets/login-hero.png' alt='login-hero' />
          </ImageContainer>
          <Google>
            <img src='' alt='' />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;
