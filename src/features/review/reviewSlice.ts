import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";
import axios from "axios";

export interface CommentProps {
  id: number;
  userProfileImg: string;
  fullName: string;
  rating: number;
  date: string;
  isCurrentUserReview: boolean;
  comment: string;
}

export interface CreateReviewPayload {
  productId: number;
  rating: number;
  comment: string;
}

export interface ListReviewsPayload {
  pageIndex: number;
  pageSize: number;
  searchBy: string;
  productId: number;
}

export interface UpdateReviewPayload {
  id: number;
  rating: number;
  comment: string;
}

export interface DeleteReviewPayload {
  id: number;
  isConfirm: boolean;
}

interface ReviewState {
  reviews: CommentProps[];
  loading: boolean;
  error: string | null;
  totalCount: number;
}

const initialState: ReviewState = {
  reviews: [],
  loading: false,
  error: null,
  totalCount: 0,
};

// Async Thunks
export const createReview = createAsyncThunk<void, CreateReviewPayload, { rejectValue: string }>(
  "review/createReview",
  async (payload, { rejectWithValue }) => {
    try {
      await api.post("/api/Review", payload);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || "Failed to create review");
      }
      return rejectWithValue("Failed to create review");
    }
  }
);

export const fetchReviews = createAsyncThunk<
  { data: CommentProps[]; totalCount: number },
  ListReviewsPayload,
  { rejectValue: string }
>(
  "review/fetchReviews",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/Review/list", payload);
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || "Failed to fetch reviews");
      }
      return rejectWithValue("Failed to fetch reviews");
    }
  }
);

export const updateReview = createAsyncThunk<void, UpdateReviewPayload, { rejectValue: string }>(
  "review/updateReview",
  async (payload, { rejectWithValue }) => {
    try {
      const { id, ...data } = payload;
      await api.put(`/api/Review/${id}`, data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || "Failed to update review");
      }
      return rejectWithValue("Failed to update review");
    }
  }
);

export const deleteReview = createAsyncThunk<number, DeleteReviewPayload, { rejectValue: string }>(
  "review/deleteReview",
  async (payload, { rejectWithValue }) => {
    try {
      await api.delete(`/api/Review/${payload.id}`, { data: payload });
      return payload.id;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || "Failed to delete review");
      }
      return rejectWithValue("Failed to delete review");
    }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Reviews
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload.data;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch reviews";
      })
      // Create Review
      .addCase(createReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReview.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create review";
      })
      // Update Review
      .addCase(updateReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateReview.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update review";
      })
      // Delete Review
      .addCase(deleteReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = state.reviews.filter((review) => review.id !== action.payload);
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete review";
      });
  },
});

export const { clearError } = reviewSlice.actions;
export default reviewSlice.reducer;
