import { FC, useState, useEffect } from 'react';
// Hooks
import useDateString from '@/hooks/useDateString';
// - Profile form
import { SubmitHandler } from 'react-hook-form';
import useProfileForm from '@/hooks/form/useProfileForm';
import validateSpecialCharacters from '@utils/validations/validateSpecialCharacters';
// - Update Profile
import { useUpdateProfileData } from '@/service/useApi/Profile/useProfileData';
// Components
import Input from '@components/block/PropertyCardModalInput';
import Button from '@components/block/Button';
import DatePicker from '@components/block/DatePicker/Individual';
import InputHolder from './InputHolder';
import PhoneNumberInput from '@components/element/PhoneNumberInput';
import openAdviseToast from '@components/element/StyledToastAdvise';
// Types
import ProfileFormType from '@/hooks/form/useProfileForm/type';
import { UserProfileType, UpdateUserProfileParamsType } from '@/service/apiTypes';
// Style
import {
  FirstNameStepContainer
} from './style';
import router, { useRouter } from 'next/router';

type IFirstNameProps = {
  onNext: () => void;
  onPrev: () => void;
  profile: UserProfileType;
  isMobile?: boolean;
};

const FirstName: FC<IFirstNameProps> = ({ onNext, onPrev, profile, isMobile }) => {
  const isDesktop = !isMobile;

  const onSubmitSuccess = () => {
    openAdviseToast('success', 'Your profile has been updated.');
    onNext();
  }

  // const onSubmitFailed = () => {
  //   openAdviseToast('failed', 'Could not update your profile, try again later.');
  // }

  const router = useRouter();
  const profileForm = useProfileForm(profile && profile);
  const profileUpdate = useUpdateProfileData(onSubmitSuccess);

  const birthDayDate = profile?.Birthday ? useDateString(profile.Birthday) : null;
  const [birthday, setSelectedDate] = useState<Date>(birthDayDate);
  const [isLoading, setIsLoading] = useState(false);

  const inputs = {
    firstName: {
      label: 'First name',
    },
    lastName: {
      label: 'Last name',
    },
    birthday: {
      label: 'Birthday',
    },
    phoneNumber: {
      label: 'Phone number',
      labelMobile: 'Contact number',
      // placeHolder: '(XXX)-XXX-XXXX',
    }
  }

  const onSubmitEditProfile: SubmitHandler<ProfileFormType> = async (profile) => {
    const { FirstName, LastName, Birthday, PhoneNumber, PhoneNumberId } = profile;
    const userProfile: UpdateUserProfileParamsType = {
      FirstName,
      LastName,
      Birthday,
      PhoneNumberId,
      PhoneNumber,
    }
    profileUpdate.mutate(userProfile);
  };

  const onClickEnter = event => {
    profileForm.handleSubmit(
      profileFormData => onSubmitEditProfile(profileFormData)
    )
  }

  useEffect(() => {
    setIsLoading(profileUpdate.isLoading);
  }, [profile, profileUpdate.isLoading]);

  return (
    <FirstNameStepContainer>
      <form className='w-auto'
        onSubmit={
          // profileForm.handleSubmit(
          // profileFormData => onSubmitEditProfile(profileFormData)
          // )
          () => { }
        }
      >
        <div className='input-group'>
          <InputHolder placeHolder={inputs.firstName.label}>
            <Input autoFocus
              className="input-style capitalize"
              onKeyDown={onClickEnter}
              error={profileForm.formState.errors.FirstName}
              {...profileForm.register('FirstName', {
                required: { value: true, message: 'This space is required' },
                validate: (text) => validateSpecialCharacters(text) ? 'Special characters are not valid' : null
              })}
            />
          </InputHolder>

          <InputHolder placeHolder={inputs.lastName.label}>
            <Input
              className="input-style capitalize"
              onKeyDown={onClickEnter}
              error={profileForm.formState.errors.LastName}
              {...profileForm.register('LastName', {
                required: { value: true, message: 'This space is required' },
                validate: (text) => validateSpecialCharacters(text) ? 'Special characters are not valid' : null
              })}
            />
          </InputHolder>
        </div>

        <div className='input-group'>
          <InputHolder placeHolder={inputs.birthday.label}>
            <DatePicker
              defaultValue={birthday}
              onDateSelected={date => {
                profileForm.setValue('Birthday', date);
                setSelectedDate(date);
              }}
            />
          </InputHolder>

          <InputHolder placeHolder={isDesktop ? inputs.phoneNumber.label : inputs.phoneNumber.labelMobile}>
            <PhoneNumberInput
              name='PhoneNumber'
              control={profileForm.control}
              rules={{
                required: true,
              }}
            />
          </InputHolder>
        </div>

        <div className='input-group'>
          <Button
            className="mt-3 w-32 md:w-48 text-base md:text-xl font-poppins 
            font-normal rounded-full md:h-10 self-start"
            // disabled={!isSubmitable()}
            // onClick={onSubmit}
            type='button'
            bgColor={'#00C092'}
            isLoading={isLoading}
            onClick={
              () => router.push('/setup?step=3')
            }
          >
            Continue
          </Button>
        </div>
      </form>
    </FirstNameStepContainer>
  );

};

export default FirstName;
