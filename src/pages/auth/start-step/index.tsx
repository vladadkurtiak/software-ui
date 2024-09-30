import { Link, useNavigate } from 'react-router-dom';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { StartStepValidationPayload, startStepValidationSchema } from '../../../validations/start-step-validation';

import ValidatedField from '../../../components/validated-field';

import SignWithGoogleButton from '../../../components/sign-with-google-button';

import { zodResolver } from '@hookform/resolvers/zod';
import { passStartStep } from '../../../state/auth/slice';
import { useAppDispatch } from '../../../state';
import FormSubmittingButton from '../../../components/form-submitting-button';

const StartStep = () => {
  const methods = useForm<StartStepValidationPayload>({ resolver: zodResolver(startStepValidationSchema) });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const passStep: SubmitHandler<StartStepValidationPayload> = async (payload) => {
    try {
      await dispatch(passStartStep({ email: payload.email })).unwrap();

      navigate('/auth/verification-code', { state: { email: payload.email } });
    } catch (e: any) {
      if (e.code == 'USER_EXISTS') methods.setError('email', { message: e.message });
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="flex" onSubmit={methods.handleSubmit(passStep)}>
        <div className="hidden lg:block min-w-[600px] xl:min-w-[700px]">
          <img
            src="../../../public/logo.png"
            className="h-screen hidden lg:block min-w-[600px] xl:min-w-[700px]"
            width={650}
          />
        </div>
        <div className="flex flex-col items-center w-full pt-[100px] gap-[23px] w-408]">
          <div className="font-semibold text-[32px]">Get more opportunities</div>
          <SignWithGoogleButton text="Sign Up with Google" />
          <div className="flex items-center gap-[14px]">
            <div className="border border-#D6DDEB border-solid w-[109px] h-[1px]"></div>
            <div className="text-[16px] text-[#bdbbbb]">Or sign up with email</div>
            <div className="border border-#D6DDEB border-solid w-[109px] h-[1px]"></div>
          </div>
          <div>
            <div className="text-[16px] leading-[25.6px] text-[#515B6F] font-[600]">Email</div>
            <ValidatedField type="text" name="email" placeholder="Enter your email" />
          </div>
          <FormSubmittingButton isSubmitting={methods.formState.isSubmitting} />
          <div className="flex items-start gap-[5px] w-[100%]font-[400] text-[16px] leading-[25.6px] text-[#202430] opacity-[70%] w-[408px]">
            Already have an account?
            <Link className="text-[#4640DE] text-[16px] font-[600]" to={'/'}>
              Login
            </Link>
          </div>
          <div className="w-[408px] h-[44px] text-[14px] text-[#7C8493]">
            By clicking 'Continue', you acknowledge that you have read and accept the{' '}
            <span className="text-[#4640DE]">Terms of Service</span> and{' '}
            <span className="text-[#4640DE]">Privacy Policy.</span>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default StartStep;
