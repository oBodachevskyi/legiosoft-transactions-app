import { createAsyncThunk } from '@reduxjs/toolkit';
import {fetchTransactions} from '../../functions/fetchTransactions';
import axios from 'axios';



export const fetchTansactionsList = createAsyncThunk(
    'transactions/fetchTransactionsList',
    async() => {
    const transactionsList = await fetchTransactions();
    return transactionsList;
})

export const fetchDelTransactions = createAsyncThunk(
    'transactions/fetchDelTransactions', 
    async(id, thunkAPI) => {
    await axios.delete(`/transactions/${id}`)
     thunkAPI.dispatch(fetchTansactionsList()) 
})

export const fetchUpdateStatusTransaction = createAsyncThunk(
    'transactions/fetchUpdateStatusTransaction', 
    async(transactionUpdate, thunkAPI) => {
    await axios.put(`/transactions/${transactionUpdate.id}`, transactionUpdate)
     thunkAPI.dispatch(fetchTansactionsList()) 
})

export const fetchUpdateTransactionsList = createAsyncThunk('transactions/fetchUpdateTransactionsList', 
            async(array, thunkAPI) => {
                for (const item of array) {
                    await  await axios.post(`transactions/`, item)
                    
                }
              
                
                thunkAPI.dispatch(fetchTansactionsList())   
            })

