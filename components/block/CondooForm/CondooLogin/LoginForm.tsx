import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
// redux
import { useAppDispatch } from '@/redux/hook';
import { ReduxAuthState, setAuthState } from '@/redux/auth';
import { setZendeskState } from '@/redux/zendesk';
// Next
import { useRouter } from 'next/router';
import { env } from "process";
// LoginUser api and form helpers
import { getProfile, loginUser } from 'service/api';
import { validateEmail } from '@utils/index';
// Components
import Alert from '@components/block/Alert';
import Input from '@components/block/PropertyCardModalInput';
import Button from '@components/block/Button';
import StyledLoader from '@components/element/StyledLoader';
import styled from 'styled-components';
import { UserProfileType } from '@/service/apiTypes';
import { AuthInputStyle } from '../AuthformStyle';
import paths from '@utils/paths';
import handleLoginMessages from './handleLoginMessages';

type SignFormInputs = {
  email: string;
  password: string;
};
// TODO: Maybe add an option like 'Did'nt receive a validation email? click here to send another'
export interface ISignForm { }
const SignForm: FC<ISignForm> = props => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignFormInputs>();
  const router = useRouter();

  const [isFetching, setIsFetching] = useState(false);
  const [alert, setAlert] = useState({ message: '', show: false });

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  async function getprofile() {
    const result = await getProfile();
    return result
  }

  const onValid = async (data: SignFormInputs) => {
    try {
      setIsFetching(true);
      // const userData = await loginUser(data.email, data.password);
      // const isVerified = userData.Status === 'Verified';

      // if (!isVerified) throw ('Your email is not verified');

      // await queryClient.invalidateQueries('firebaseAuthToken');

      // const profile: UserProfileType = await getprofile();

      // // == Update redux with user data ==
      // const stateData: ReduxAuthState = {
      //   Email: userData.Email,
      //   Status: userData.Status,
      //   Step: profile.Step
      // }
      // updateReduxStatus(stateData);

      // await redirectWhenLogged(profile);
      const stepRoute = `${paths.setup}?step=${1}`;
      await router.replace(stepRoute);
    } catch (err) {
      const message = handleLoginMessages(err);
      setAlert({ message, show: true });
    } finally {
      setIsFetching(false);
    }
  };

  const updateReduxStatus = (userData: ReduxAuthState) => {
    dispatch(setAuthState(userData));
    dispatch(setZendeskState({ isOpen: true }));
  }


  const redirectWhenLogged = async (profile) => {
    // const step = profile?.Step;

    // if (step != "10" || !step || step === "0") {
    //   const stepRoute = `${paths.setup}?step=${step}`;
    //   await router.replace(stepRoute);
    // }
    // else await router.replace(paths.app);
  }

  return (
    <FormContainer onSubmit={handleSubmit(onValid)}>
      {isFetching && <StyledLoader />}

      <div className='input-container'>
        <Input
          error={errors.email}
          autoFocus
          className='input-style'
          placeholder="Email"
          placeholderStyle='placeholder-style'
          {...register('email', {
            validate: value =>
              validateEmail(value)
                ? true
                : 'Please enter a valid email address',
            required: { value: true, message: 'Email is required' },
          })}
        />

        <Input
          error={errors.password}
          autoFocus
          className='input-style'
          placeholder="Password"
          placeholderStyle='placeholder-style'
          type="password"
          {...register('password', {
            required: { value: true, message: 'Password is required' },
            minLength: { value: 8, message: 'Password length error' },
          })}
        />
      </div>


      <Button type='submit' isLoading={isFetching}>
        Sign In
      </Button>

      <Alert
        isOpen={alert.show}
        variant='danger'
        title='Uh Oh!'
        description={alert.message}
        onClose={() => { setAlert({ message: '', show: false }) }}
      />
    </FormContainer>
  )
}



const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${AuthInputStyle};
  button {
    margin: 0 16px;
    margin-bottom: 35px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 0 16px;
  }

  @media (max-height: 450px) {
    gap: 16px;
    .input-container {
      flex-direction: row;
    }
    button {
      width: 240px;
      margin: 0 auto;
    }
  }

`;


export default SignForm;
