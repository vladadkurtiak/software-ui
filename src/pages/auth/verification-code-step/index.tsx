import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import VerificationCodeOtpInput from '../../../components/verification-code-otp';
import { useAppDispatch } from '../../../state';
import { passVerificationCodeStep, resendVerificationCode } from '../../../state/auth/slice';

const VerificationCodeStep = () => {
  const [error, setError] = useState('');

  const location = useLocation();

  const { email } = location.state;

  const [verificationCode, setVerificationCode] = useState('');

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const passCodeStep = async () => {
    const result = await dispatch(passVerificationCodeStep({ code: verificationCode }));

    if (passVerificationCodeStep.fulfilled.match(result)) {
      navigate('/auth/info', { replace: true });
    } else {
      console.log(result.error.message);
    }
  };

  const resendCode = async () => {
    try {
      await dispatch(resendVerificationCode()).unwrap();
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="flex">
      <div className="hidden lg:block min-w-[600px] xl:min-w-[700px]">
        <img
          src="../../../public/logo.png"
          className="h-screen hidden lg:block min-w-[600px] xl:min-w-[700px]"
          width={650}
        />
      </div>
      <div className="flex flex-col items-center w-full pt-[100px] gap-[50px] w-408]">
        <div className="font-semibold text-[20px]">
          We've sent a code to <span className="text-[#4640DE]">{email}</span>
        </div>
        <div>
          <VerificationCodeOtpInput onChange={setVerificationCode} value={verificationCode} inputNumber={5} />
          {error}
        </div>
        <div className="flex gap-[10px]">
          <button
            onClick={passCodeStep}
            className="bg-[#4640DE] w-[204px] h-[50px] py-3 px-6 font-[600] text-[16px] leading-[25.6px] text-[#FFFFFF]"
          >
            Continue
          </button>
          <button
            onClick={resendCode}
            className="border border-[#4640DE] border-solid bg-[white] w-[204px] h-[50px] py-3 px-6 font-[600] text-[16px] leading-[25.6px] text-[#4640DE]"
          >
            Resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationCodeStep;
