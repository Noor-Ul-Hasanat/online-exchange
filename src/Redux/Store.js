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
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana&vs_currencies=usd'); 
    const data = await response.json();
    return data;
});
//Fetching Announcements from Api
export const fetchAnnouncements =createAsyncThunk('dashboard/fetchAnnouncements', async()=>{
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');
    const data = await response.json();
    return data.Announcements;
});
// Fetching Latest News From APi
export const fetchlatestNews =createAsyncThunk('dashboard/fetchlatestNews', async()=>{
    const response = await fetch("https://financialmodelingprep.com/api/v4/crypto_news?"
    );
    const data = await response.json();
    return data;
});
// Fetching Table From Api
export const fetchTableData =createAsyncThunk('dashboard/fetchTableData', async()=>{
    const response = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');
    const data = await response.json();
    return data

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
            .addCase(fetchCardsData.pending, (state) => {
                state.status = 'loading...'; // ✅ Added pending case
            })
            .addCase(fetchCardsData.fulfilled, (state,action)=>{
             state.status ='succeeded';
             state.cards = action.payload;
            })
            .addCase(fetchTableData.pending, (state) => {
                state.status = 'loading...'; // ✅ Added pending case
            })
            .addCase(fetchTableData.fulfilled,(state,action)=>{
                state.status ='succeeded';
                state.tableData = action.payload;
            })
            .addCase(fetchAnnouncements.pending, (state) => {
                state.status = 'loading...'; // ✅ Added pending case
            })           
            .addCase(fetchAnnouncements.fulfilled,(state,action)=>{
                state.status ='succeeded';
                state.Announcements =action.payload;
            })
            .addCase(fetchlatestNews.pending, (state) => {
                state.status = 'loading...'; // ✅ Added pending case
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
