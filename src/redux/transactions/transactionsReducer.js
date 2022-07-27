import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { updateCurrentPage, updateStatusFiltersValue, 
    updateTypeFiltersValue, changeDialogStatus, changeModalStatus } from "./transactionsAction";
import {fetchTansactionsList, fetchUpdateTransactionsList, fetchDelTransactions, fetchUpdateStatusTransaction} from './transactionsOperations'

const items = createReducer([], {
    [fetchTansactionsList.fulfilled] : (state, action) => action.payload,
})

const error = createReducer(null, {
    [fetchTansactionsList.rejected]: (_, action) => action.payload,
    [fetchTansactionsList.pending]: () => null, 

    [fetchUpdateTransactionsList.rejected]: (_, action) => action.payload,
    [fetchUpdateTransactionsList.pending]: () => null, 
    
    [fetchDelTransactions.rejected]: (_, action) => action.payload,
    [fetchDelTransactions.pending]: () => null, 
})  

const isLoading = createReducer(false, {
    [fetchTansactionsList.fulfilled]: () => false,
    [fetchTansactionsList.pending]: () => true,
    [fetchTansactionsList.rejected]: () => false,

    [fetchUpdateTransactionsList.fulfilled]: () => false,
    [fetchUpdateTransactionsList.pending]: () => true,
    [fetchUpdateTransactionsList.rejected]: () => false,
    
})

const status = createReducer('', {
    [updateStatusFiltersValue]: (state, action) => state = action.payload
});


const type = createReducer('', {
    [updateTypeFiltersValue]: (state, action) => state = action.payload
});

const currentPage = createReducer(1, {
    [updateCurrentPage]: (state,action) => state = action.payload
})

const openDialog = createReducer(false, {
    [changeDialogStatus]: (state,action) => state = action.payload
})

const openModal = createReducer(false, {
    [changeModalStatus]: (state,action) => state = action.payload
})



export default combineReducers({
    items,
    status,
    type,
    currentPage,
    openDialog,
    openModal,
    isLoading

})