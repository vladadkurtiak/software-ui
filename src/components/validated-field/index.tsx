import { FC } from 'react';

import { get, useFormContext } from 'react-hook-form';

import { VladidatedFieldPayload } from './types';

const ValidatedField: FC<VladidatedFieldPayload> = (props) => {
  const { type, name, placeholder } = props;

  const { register, formState } = useFormContext();

  const validationError = get(formState.errors, name);

  return (
    <div className="flex-col">
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        style={!validationError ? { borderColor: '#D6DDEB' } : { borderColor: 'red' }}
        className="text-[#515B6F] h-[50px] text-[16px] border border-#D6DDEB border-solid w-[408px] outline-[0] pt-3 pr-4 pb-3 pl-4 placeholder:font-normal placeholder:text-base placeholder:leading-[25.6px] placeholder-[#A8ADB7] placeholder:text-[16px]"
      />
      <div className="absolute text-[#ff0033]">{validationError ? <span>{validationError.message}</span> : ''}</div>
    </div>
  );
};

export default ValidatedField;
