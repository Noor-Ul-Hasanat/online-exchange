import { createSlice, createAsyncThunk, configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Fetch balance from API
export const fetchBalance = createAsyncThunk('dashboard/fetchBalance', async () => {
    const response = await fetch('https://api.example.com/balance'); // Replace with a valid API URL
    const data = await response.json();
    return data.balance;
});
// Fetching cards from Api
export  const fetchCardsData =createAsyncThunk('dashboard/fetchCardsData',async ()=>{
    const response = await fetch('https/f/as/ffff');
  
    const data = await response.json();
    return data.cards;
});
//Fetching Announcements from Api
export const fetchAnnouncements =createAsyncThunk('dashboard/fetchAnnouncements', async()=>{
    const response = await fetch('https/www.card.com');
    const data = await response.json();
    return data.Announcements;
});
// Fetching Latest News From APi
export const fetchlatestNews =createAsyncThunk('dashboard/fetchlatestNews', async()=>{
    const response = await fetch('https/www.latestnes.com');
    const data = await response.json();
    return data.latestNews;
});
// Fetching Table From Api
export const fetchTableData =createAsyncThunk('dashboard/fetchTableData', async()=>{
    const response = await fetch ('https/www/latest.com');
    const data = await response.json();
    return data.tableData
})
// Initial state
const initialState = {
    balance: 0,
    status: 'idle',
    error: null,
    cards:[],
    tableData:[],
    Announcements:[],
    latestNews:[]
};
// Create dashboard slice
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBalance.pending, (state) => {
                state.status = 'loading...';
            })
            .addCase(fetchBalance.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.balance = action.payload; 
            })
            .addCase(fetchBalance.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchCardsData.fulfilled, (state,action)=>{
             state.status ='succeeded';
             state.cards = action.payload;
            })
            .addCase(fetchTableData.fulfilled,(state,action)=>{
                state.status ='succeeded';
                state.tableData = action.payload;
            })
            .addCase(fetchAnnouncements.fulfilled,(state,action)=>{
                state.status ='succeeded';
                state.Announcements =action.payload;
            })
            .addCase(fetchlatestNews.fulfilled,(state,action)=>{
                state.status = 'succeeded';
                state.latestNews = action.payload;
            });
    }
});

 
// Login logout functionality
const initialState1 = {
    isAuthenticated: false,
    // token: null,
    // user: null,
};
// slice for Auth functionality
const authSlice = createSlice ({
    name:'auth',
    initialState: initialState1,
    reducers:{
        loginSuccess (state,action) {
           state.isAuthenticated= true;
            // state.token= action.payload.token;
            // state.user=action.payload.user;
        },
        logout(state){
            state.isAuthenticated=false;
            // state.token= null;
            // state.user= null;
        }       
    }
})

const rootReducer = combineReducers({
    dashboard: dashboardSlice.reducer ,
    auth: authSlice.reducer
})
  const persistConfig = {
    key: 'root', 
    storage,          // Use localStorage
    version: 1,      // Version
  };
  const persestedReducer = persistReducer(persistConfig,rootReducer)

// Configure store
export const store = configureStore({
    reducer: persestedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST'], // Tell Redux to ignore the persist/persisted actions
          },
        }),   
});
export const persistor = persistStore(store)
export const dashboardActions = dashboardSlice.actions
export const authActions = authSlice.actions
