import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';
import {
  ApiError,
  LoginPayload,
  PassInfoStepPayload,
  PassStartStepPayload,
  AuthWithGooglePayload,
  PassVerificationCodeStepPayload,
} from './types';
import { axiosInstance } from '../../axios-instanse';
import { AxiosError } from 'axios';

export const passStartStep = createAsyncThunk(
  'auth/start-step',
  async (payload: PassStartStepPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/start-register', {
        email: payload.email,
      });

      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return rejectWithValue(e.response?.data);
      }
    }
  },
);

export const passVerificationCodeStep = createAsyncThunk(
  'auth/verification-code',
  async (payload: PassVerificationCodeStepPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('auth/verification-code-step', {
        code: payload.code,
      });

      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return rejectWithValue(e.response?.data);
      }
    }
  },
);

export const resendVerificationCode = createAsyncThunk('/auth/resend-code', async () => {
  await axiosInstance.post('user-onboarding/resend');
});

export const passInfoStep = createAsyncThunk(
  '/auth/info',
  async (payload: PassInfoStepPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('auth/info-step', { ...payload });

      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return rejectWithValue(e.response?.data);
      }
    }
  },
);

export const login = createAsyncThunk('/auth/login', async (payload: LoginPayload, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('auth/login', { ...payload });

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      return rejectWithValue(e.response?.data);
    }
  }
});

export const authWithGoogle = createAsyncThunk(
  '/auth/google', 
  async (payload: AuthWithGooglePayload) => {
     await axiosInstance.post('auth/google', { ...payload }) 
  }
)

const authSlice = createSlice({
  name: 'auth-slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(passStartStep.fulfilled, (state) => {
      state.success = true;
      state.error = null;
    });
    builder.addCase(passStartStep.rejected, (state) => {
      state.success = false;
    });

    builder.addCase(passVerificationCodeStep.fulfilled, (state) => {
      state.success = true;
      state.error = null;
    });
    builder.addCase(passVerificationCodeStep.rejected, (state, action) => {
      state.success = false;
      state.error = (action.payload as ApiError).message;
    });

    builder.addCase(resendVerificationCode.fulfilled, (state) => {
      state.success = true;
      state.error = null;
    });
    builder.addCase(resendVerificationCode.rejected, (state, action) => {
      state.success = false;
      state.error = (action.payload as ApiError).message;
    });

    builder.addCase(passInfoStep.fulfilled, (state) => {
      state.success = true;
      state.error = null;
    });
    builder.addCase(passInfoStep.rejected, (state, action) => {
      state.success = false;
      state.error = (action.payload as ApiError).message;
    });

    builder.addCase(login.fulfilled, (state) => {
      state.success = true;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.success = false;
      state.error = (action.payload as ApiError).message;
    });

    builder.addCase(authWithGoogle.fulfilled, (state) => {
      state.success = true;
      state.error = null;
    });
    builder.addCase(authWithGoogle.rejected, (state) => {
      state.success = false;
    });
  },
});

export default authSlice.reducer;
