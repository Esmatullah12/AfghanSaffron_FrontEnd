import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";
import axios from "axios";

export interface LoginResponse {
  token: string;
  refreshToken: string;
  success: boolean;
  message: string | null;
  errors: string[];
  emailConfirmed: boolean;
  requiresEmailVerification: boolean;
  userRole: string;
  userInfo: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string | null;
    phoneNumber: string,
    countryCode: string,
    address: string,
    jobTitle: string
  };
}

interface LoginPayload {
  email: string;
  password: string;
}

interface User {
  token: string;
  refreshToken: string;
  role: string;
  userInfo: LoginResponse["userInfo"];
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

interface UserInfomation{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  address: string;
  jobTitle: string;
  picture?: string;
}

const storedUser = localStorage.getItem("user");

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<LoginResponse, LoginPayload, { rejectValue: string }     
>(
  "auth/loginUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post<LoginResponse>("/api/Auth/Login", payload);
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || "Login failed");
      }
      return rejectWithValue("Login failed");
    }
  }
);

export const loginWithGoogle = createAsyncThunk<
  LoginResponse,          
  string,                 
  { rejectValue: string } 
>(
  "auth/loginWithGoogle",
  async (idToken, { rejectWithValue }) => {
    try {
      const response = await api.post<LoginResponse>("/api/Auth/google", { idToken });
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || "Google login failed");
      }
      return rejectWithValue("Google login failed");
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    updateUserInformation: (state, action: PayloadAction<UserInfomation>) => {
  if (state.user) {
    state.user.userInfo = {
      id: action.payload.id,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      email: action.payload.email,
      phoneNumber: action.payload.phoneNumber,
      countryCode: action.payload.countryCode,
      address: action.payload.address,
      jobTitle: action.payload.jobTitle,
      picture: action.payload.picture ?? null
    };

    localStorage.setItem("user", JSON.stringify(state.user));
  }
}

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.loading = false;

        state.user = {
          token: action.payload.token,
          refreshToken: action.payload.refreshToken,
          role: action.payload.userRole,
          userInfo: action.payload.userInfo,
        };

        localStorage.setItem("user", JSON.stringify(state.user));
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })

      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.loading = false;

        state.user = {
          token: action.payload.token,
          refreshToken: action.payload.refreshToken,
          role: action.payload.userRole,
          userInfo: action.payload.userInfo,
        };

        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Google login failed";
      });

  },
});

export const { logout, updateUserInformation } = authSlice.actions;
export default authSlice.reducer;
