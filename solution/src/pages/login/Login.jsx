
import React from 'react'
import { Header,FormContainer, LoginContainer, StyledImg, StyledForm, StyledInput, StyledButton } from './LoginStyles'
import meal from "../../assets/meal.svg"
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

  const navigatee = useNavigate()
  const handleSubmit = (e ) =>{
    e.preventDefault()
    const user = {username:"user"}
    
    sessionStorage.setItem("user",JSON.stringify(user))

    
    navigatee("/home")
    //window.location.href ="./home"

  }


  return (
  <LoginContainer>
    <FormContainer>
      <StyledImg src={meal}/>
      <Header>{"<CLARUSWAY/>"}Recipe</Header>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" placeholder='username' required></StyledInput>
        <StyledInput type = "password" placeholder='password' required ></StyledInput>

        <StyledButton type='submit'>LOGIN</StyledButton>
      </StyledForm>
    </FormContainer>
  </LoginContainer>
  )
}

export default Login