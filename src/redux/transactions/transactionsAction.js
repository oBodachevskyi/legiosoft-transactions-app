import { createAction } from "@reduxjs/toolkit";

export const updateCurrentPage = 
createAction('transactions/updateCurrentPage')

export const updateTypeFiltersValue = 
createAction('transactions/updateTypeFilters')

export const updateStatusFiltersValue = 
createAction('transactions/updateStatusFilters')

export const changeDialogStatus = 
createAction('transactions/changeDialogStatus')

export const changeModalStatus = 
createAction('transactions/ChangeModalStatus')