import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import FormSubmittingButton from '../../../components/form-submitting-button';
import { InfoStepValidationPayload, infoStepValidationSchema } from '../../../validations/info-step-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import ValidatedField from '../../../components/validated-field';
import { useAppDispatch } from '../../../state';
import { passInfoStep } from '../../../state/auth/slice';
import { useNavigate } from 'react-router-dom';

const InfoStep = () => {
  const methods = useForm<InfoStepValidationPayload>({ resolver: zodResolver(infoStepValidationSchema) });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const passStep: SubmitHandler<InfoStepValidationPayload> = async (payload) => {
    try {
      await dispatch(passInfoStep({ ...payload })).unwrap();

      navigate('/auth/main', { replace: true });
    } catch (e: any) {
      if (e.code == 'STEP_ALREADY_PASSED' || 'VERIFICATION_CODE_MUST_BE_PROVIDED_FIRST')
        methods.setError('password', { message: e.message });
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
        <div className="flex flex-col items-center w-full pt-[100px] gap-[22px] w-408]">
          <div>
            <div className="text-[16px] leading-[25.6px] text-[#515B6F] font-[600]">First name</div>
            <ValidatedField type="text" name="firstName" placeholder="Enter your first name" />
          </div>
          <div>
            <div className="text-[16px] leading-[25.6px] text-[#515B6F] font-[600]">Last name</div>
            <ValidatedField type="text" name="lastName" placeholder="Enter your last name" />
          </div>
          <div>
            <div className="text-[16px] leading-[25.6px] text-[#515B6F] font-[600]">Password</div>
            <ValidatedField type="password" name="password" placeholder="Enter your password" />
          </div>
          <FormSubmittingButton isSubmitting={methods.formState.isSubmitting} />
        </div>
      </form>
    </FormProvider>
  );
};

export default InfoStep;
