import Loader from '../../assets/icons/loader';
import { FC } from 'react';
import { SubmittingFormButtonProps } from './types';

const FormSubmittingButton: FC<SubmittingFormButtonProps> = ({ isSubmitting }) => {
  return (
    <button
      style={{ backgroundColor: isSubmitting ? '#6B66E4' : '#4640DE' }}
      disabled={isSubmitting && true}
      type="submit"
      className="bg-[#4640DE] w-[408px] h-[50px] py-3 px-6 font-[600] text-[16px] leading-[25.6px] text-[#FFFFFF] flex justify-center items-center gap-1"
    >
      <div className="w-fit relative flex justify-center items-center">
        Continue
        {isSubmitting && (
          <span className="absolute right-[-20px]">
            <Loader />
          </span>
        )}
      </div>
    </button>
  );
};

export default FormSubmittingButton;
