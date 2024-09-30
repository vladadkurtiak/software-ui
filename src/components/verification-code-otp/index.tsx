import OtpInput from 'react-otp-input';
import { FC } from 'react';
import { OtpInputPayload } from './types';
import { useAppSelector } from '../../state';

const VerificationCodeOtpInput: FC<OtpInputPayload> = ({ value, onChange, inputNumber }) => {
  const error = useAppSelector((state) => state.auth.error);

  return (
    <div className="flex justify-center flex-col items-center">
      <OtpInput
        value={value}
        onChange={onChange}
        numInputs={inputNumber}
        inputStyle={{
          width: '55px',
          height: '53px',
          margin: '0 16px',
          fontSize: '16px',
          borderRadius: '4px',
          border: error ? '1px solid #ff0033' : '1px solid #D6DDEB',
          textAlign: 'center',
          color: '#515B6F',
        }}
        renderInput={(props) => <input {...props} />}
      />
      <div className="text-[#ff0033] absolute mt-[105px]">{error}</div>
    </div>
  );
};

export default VerificationCodeOtpInput;
