import { FC, useState, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { useMediaQuery } from '@react-hook/media-query';
import { useSelector, useStore } from 'react-redux';
// Service Api
import { docusign, getTitleholders } from '@/service/api';
import { sendDocumentSignToTitleHolders } from '@/service/useApi';
import { DocumentSignParamsType, TitleHolderType } from '@/service/apiTypes'
// Components
import EmailFormItem from './EmailFormItem';
import Button from '@components/block/Button';
import openAdviseToast from '@components/element/StyledToastAdvise';
// Helper
import { EmailType, getEmailableTitleHolders, updateEmails } from './StepSendEmails';
// Style
import { StepSendEmailsContainer, } from './style';
import { useRouter } from 'next/router';

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const StepSendEmails: FC<Props> = ({ onNext, onPrev }: Props) => {
  const router = useRouter()
  const [emailableTitleHolders, setEmailableTitleHolders] = useState<TitleHolderType[]>(null);
  const [emails, setEmails] = useState<EmailType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  const LoggedUser = useSelector((state: any) => state.auth.Email);
  const canAdvice = useRef<boolean>(true);

  // const { data: titleholders, isSuccess: isTitleholders } = useQuery<TitleHolderType[]>(
  //   ['getTitleholders'], getTitleholders
  // );

  const onSubmit = async () => {
    router.push('/setup?step=10')
    // const notAllEmailInputsSet = emails.length != emailableTitleHolders.length;
    // if (notAllEmailInputsSet) {
    //   openAdviseToast('failed', 'You must enter an e-mail for each Title holder.');
    //   return;
    // }
    // setIsLoading(true);


    // // call updateTitleHoldersEmails() here too
    // const params: DocumentSignParamsType = {
    //   TitleHolders: emails,
    //   LoggedUser,
    // }

    // try {
    //   const { ok, data } = await sendDocumentSignToTitleHolders(params)

    //   if (ok && data) onNext();
    // } catch (error) {
    //   console.log('Error occurred', error)
    // } finally {
    //   setIsLoading(false);
    // }

  };

  const onChangeEmail = (_holder, _email) => {
    const newEmails = updateEmails(emails, {
      titleHolder: _holder,
      email: _email
    })
    setEmails(newEmails);
  };

  // useEffect(() => {
  //   if (!isTitleholders) return;

  //   const {
  //     emailableTitleHolders,
  //     isATitleHolderNotEmailable
  //   } = getEmailableTitleHolders(titleholders);

  //   if (isATitleHolderNotEmailable && canAdvice.current) {
  //     canAdvice.current = false;
  //     openAdviseToast(
  //       'advise',
  //       `We will only send e-mails to Title holders that owns at least one property`
  //     )
  //   }

  //   setEmailableTitleHolders(emailableTitleHolders);

  //   return () => {
  //     canAdvice.current = true; // ensure this ref resets to advice each time
  //   }
  // }, [titleholders])

  return (
    <StepSendEmailsContainer>
      <div className='instruction'>
        <h2 className='title'>Send the management agreement to the title holders.</h2>
        <p className='sub-title'>
          A property management agreement is required for each title holder.
          Please indicate the emails addresses for each management agreement to be sent to.
        </p>
      </div>
      <div className='agreements-container'>
        <div className='email-items-container'>
          {emailableTitleHolders?.map((titleHolder, index) => (
            <EmailFormItem
              key={`email-form-item-${index}`}
              number={index}
              _holder={titleHolder}
              onChangeEmail={onChangeEmail}
              isMobile={isMobile}
            />
          ))}
        </div>
        <div className="btn-wrapper">
          <Button
            onClick={onSubmit}
            bgColor={'#00C092'}
            isLoading={isLoading}
          >
            Send
          </Button>
        </div>

      </div>
    </StepSendEmailsContainer>
  );
};

export default StepSendEmails;
