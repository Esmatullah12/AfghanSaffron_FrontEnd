import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";
import axios from "axios";
import { fa } from "zod/v4/locales";

export interface Product {
  id: number;
  name: string;
  description: string;
  salePrice: number;
  regularPrice: number;
  stockQuantity: number;
  weight: number;
  grade: string;
  isFavorite: boolean;
  favoriteProductId?: number;
  mainImageUrl: string;
  hasFullDetail?: boolean;
}

interface ProductState {
  products: Record<number, Product>;
  listIds: number[];
  list:{
    totalCount: number;
    currentPage: number;
    pageSize: number;
    loading: boolean;
    error: string | null;
  };
  details: {
    [productId: number]: {
      loading: boolean;
      error: string | null;
      images: string[];
    };
  };
  ratings: {
    [productId: number]: {
      totalRating: number;
      averageRating: number;
      loading: boolean;
      error: string | null;
    };
  }
}

const initialState: ProductState = {
  products: {},
  listIds: [],
  list: {
    totalCount: 0,
    currentPage: 0,
    pageSize: 10,
    loading: false,
    error: null
  },

  details: {},
  ratings: {}
};

export const fetchProducts = createAsyncThunk<
  {items: Product[]; totalCount: number},
  { pageIndex: number; pageSize: number; searchBy: string }, 
  { rejectValue: string }
  >(
  "product/GetProductsList",
  async (payload, { rejectWithValue }) => {
    try{
      const response = await api.post("/api/Product/GetProductsList", payload);
      const data = response.data;
      return {
        items: data.data || data,
        totalCount: data.totalCount ?? (data.data?.length || 0),
      };
    }catch(err: unknown){
      if(axios.isAxiosError(err)){
        return rejectWithValue(err.response?.data || "Failed to fetch products");
      }
      return rejectWithValue("Failed to fetch products");
    }
  }
);

export const fetchProductDetail = createAsyncThunk<
  Product,
  number,
  { rejectValue: string }
>(
  "product/GetProductDetail",
  async (productId, { rejectWithValue }) => {
    try{
      const response = await api.get(`/api/Product/GetDetail/${productId}`);
      return response.data.data || response.data;
    }catch(err: unknown){
      if(axios.isAxiosError(err)){
        return rejectWithValue(err.response?.data || "Failed to fetch product detail");
      }
      return rejectWithValue("Failed to fetch product detail");
    }
  }
);

export const fetchProductImages = createAsyncThunk<
  string[],
  number,
  { rejectValue: string }
>(
  "product/GetProductImages",
  async (productId, { rejectWithValue }) => {
    try{
      const response = await api.get(`/api/Product/ProductImages/${productId}`);
      const data = response.data.data || response.data;
      return Array.isArray(data)
        ? data.map((img: { imagePath: string } | string) =>
            typeof img === "string" ? img : img.imagePath
          )
        : [];
    }catch(err: unknown){
      if(axios.isAxiosError(err)){
        return rejectWithValue(err.response?.data || "Failed to fetch product images");
      }
      return rejectWithValue("Failed to fetch product images");
    }
  }
);

export const fetchProductRating = createAsyncThunk<
  { productId: number; totalRating: number; averageRating: number },
  number,
  { rejectValue: string }
>(
  "product/GetProductRating",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/Review/productRating/${productId}`);
      const data = response.data.data || response.data;
      return { productId, totalRating: data.totalRating, averageRating: data.averageRating };
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || "Failed to fetch product rating");
      }
      return rejectWithValue("Failed to fetch product rating");
    }
  }
);

export const addToFavorites = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>(
  "product/AddToFavorites", 
  async (productId, { rejectWithValue }) => {
    try {
      await api.post("/api/FavoriteProduct", { productId });
      return productId;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || "Failed to add to favorites");
      }
      return rejectWithValue("Failed to add to favorites");
    }
  }
);

export const removeFromFavorites = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>(
  "product/RemoveFromFavorites",
  async (favoriteProductId, { rejectWithValue }) => {
    try {
      await api.delete(`/api/FavoriteProduct/${favoriteProductId}`);
      return favoriteProductId;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data || "Failed to remove from favorites");
      }
      return rejectWithValue("Failed to remove from favorites");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToFavorites.fulfilled, (state, action) => {
        const id = action.payload;
        if (state.products[id]) {
          state.products[id].isFavorite = true;
        }
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        const id = action.payload;
        if (state.products[id]) {
          state.products[id].isFavorite = false;
        }
      })
      .addCase(fetchProducts.pending, (state) => {
        state.list.loading = true;
        state.list.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { items, totalCount } = action.payload;

        state.list.loading = false;
        state.list.error = null;
        state.list.totalCount = totalCount;

        items.forEach((product) => {
          state.products[product.id] = product;
        });
        state.listIds = items.map((p) => p.id);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.payload || "Failed to fetch products";
      })
      .addCase(fetchProductDetail.pending, (state, action) => {
        const id = action.meta.arg;
        state.details[id] = {
          loading: true,
          error: null,
          images: state.details[id]?.images || [],
        };
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        const product = action.payload;
        state.products[product.id] = { ...state.products[product.id], ...product, hasFullDetail: true };
        state.details[product.id] = {
          ...state.details[product.id],
          loading: false,
          error: null,
          images: state.details[product.id]?.images || [],
        };
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        const id = action.meta.arg;
        if (!state.details[id]) {
          state.details[id] = { loading: false, error: null, images: [] };
        }
        state.details[id].loading = false;
        state.details[id].error = action.payload || "Failed to fetch product detail";
      })
      .addCase(fetchProductImages.pending, (state, action) => {
        const id = action.meta.arg;
        if (!state.details[id]) {
          state.details[id] = { loading: false, error: null, images: [] };
        }
      })
      .addCase(fetchProductImages.fulfilled, (state, action) => {
        const id = action.meta.arg;
        if (!state.details[id]) {
          state.details[id] = { loading: false, error: null, images: [] };
        }
        state.details[id].images = action.payload;
      })
      .addCase(fetchProductImages.rejected, (state, action) => {
        const id = action.meta.arg;
        if (!state.details[id]) {
          state.details[id] = { loading: false, error: null, images: [] };
        }
        state.details[id].error = action.payload || "Failed to fetch product images";
      })
      .addCase(fetchProductRating.pending, (state, action) => {
        const id = action.meta.arg;
        state.ratings[id] = {
          totalRating: state.ratings[id]?.totalRating || 0,
          averageRating: state.ratings[id]?.averageRating || 0,
          loading: true,
          error: null,
        };
      })
      .addCase(fetchProductRating.fulfilled, (state, action) => {
        const { productId, totalRating, averageRating } = action.payload;
        state.ratings[productId] = { totalRating, averageRating, loading: false, error: null };
      })
      .addCase(fetchProductRating.rejected, (state, action) => {
        const id = action.meta.arg;
        state.ratings[id] = {
          totalRating: state.ratings[id]?.totalRating || 0,
          averageRating: state.ratings[id]?.averageRating || 0,
          loading: false,
          error: action.payload || "Failed to fetch rating",
        };
      });
    }
})

export default productSlice.reducer;
