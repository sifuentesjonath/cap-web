import React, { useState, useEffect } from 'react'
import router from 'next/router';
// Input use
import { useForm } from 'react-hook-form';
import { SignInputs } from '@types';
// Components
import openToast from '@components/element/StyledToast';
import Input from '@components/block/PropertyCardModalInput';
import Button from '@components/block/Button';
// Create user
import { validateEmail } from '@utils/index';
import { createUserAccount } from '@/service/api';
import firebase from 'firebase/app';
//
import styled from 'styled-components';
import { AuthInputStyle } from '../AuthformStyle';

const validatePasswordStructure = (password): boolean => {
  const tests: boolean[] = [];

  const isGreaterThan8Characters = 8 <= password.length;
  tests.push(isGreaterThan8Characters);

  const hasCapitalLetter = (/[A-Z]/).test(password);
  tests.push(hasCapitalLetter);

  const hasNumbers = (/[0-9]/).test(password);
  tests.push(hasNumbers);

  const isTestsOk = !tests.includes(false);
  return isTestsOk;
}

const SignUpForm = () => {
  const { watch, register, handleSubmit, formState: { errors } } = useForm<SignInputs>();

  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const onValid = async (data: SignInputs) => {
    const serverError = 500;
    try {
      setIsLoading(true);
      // const { data: validResult } = await axios.get(
      //   `https://api.emailable.com/v1/verify?email=${data.email}&api_key=${process.env.NEXT_PUBLIC_MAILABLE_API_KEY}`
      // );
      // if (validResult.state === 'deliverable') {
      if (true) {
        const signupResult = await createUserAccount(data);

        if (signupResult?.status === serverError) {
          openToast('Error', 'Email already in use')
          setIsLoading(false);
          return;
        }

        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(res => {
            router.replace('/sent');
            setIsLoading(false);
          });
      } else {
        setIsEmailValid(false);
        setIsLoading(false);
      }
    } catch (e) {
      if (e.response?.data?.message) {
        // console.log(e.response?.data?.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isEmailSent) {
      router.replace('/sent');
    }
  }, [isEmailSent]);

  return (
    <>
      {!isEmailValid && (
        <div className="bg-danger">
          <div>Failed!</div>
          <p>The email address is not valid!</p>
        </div>
      )}

      <FormContainer onSubmit={handleSubmit(onValid)}>
        <div className='input-container'>
          <Input
            autoFocus
            error={errors.Email}
            className='input-style'
            placeholder="Email"
            placeholderStyle='placeholder-style'
            {...register('Email', {
              validate: value =>
                validateEmail(value)
                  ? true
                  : 'Please enter a valid email address',
              required: { value: true, message: 'Email is required' },
            })}
          />

          <div className='input-container-div'>
            <Input
              error={errors.Password}
              className='input-style'
              type="password"
              placeholder="Password"
              placeholderStyle='placeholder-style'
              {...register('Password', {
                required: { value: true, message: 'Password is required' },
                validate: password => validatePasswordStructure(password)
                  ? true
                  : 'Password must be greater than 8 characters, contain at least one number and one capital letter.'
              })}
            />

            <Input
              autoFocus
              error={errors.ConfirmPassword}
              className='input-style'
              type="password"
              placeholder="Confirm Password"
              placeholderStyle='placeholder-style'
              {...register('ConfirmPassword', {
                validate: value =>
                  value === watch('Password') ? true : 'Password should match',
              })}
            />
          </div>
        </div>

        <Button
          isLoading={isLoading}
          type="submit">
          Sign Up
        </Button>

      </FormContainer>
    </>
  )
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  ${AuthInputStyle}
  gap: 30px;
  button {
    margin-bottom: 35px;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .input-container-div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  @media (max-height: 450px) {
    gap: 16px;
    .input-container-div {
      flex-direction: row;
    }
    button {
      width: 240px;
      margin: 0 auto;
    }
  }
`;


export default SignUpForm
