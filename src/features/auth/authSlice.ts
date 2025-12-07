import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance"; // your configured axios
import type { RootState } from "../../store/store";

interface AuthState {
  token: string | null;
  user: { id?: string; name?: string; email?: string } | null;
  loading: boolean;
  error?: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

// login thunk
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/Auth/Login", credentials);
      // assume res.data = { token, user }
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// optional: fetch profile
export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (!token) throw new Error("No token");
      const res = await api.get("/api/Auth/Profile");
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      state.error = null;
      // clear auth header
      delete api.defaults.headers.common["Authorization"];
    },
    setCredentials(state, action: PayloadAction<{ token: string; user?: any }>) {
      state.token = action.payload.token;
      state.user = action.payload.user ?? null;
      if (action.payload.token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${action.payload.token}`;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user ?? null;
        api.defaults.headers.common["Authorization"] = `Bearer ${action.payload.token}`;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;