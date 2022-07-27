import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './TransactionsList.module.css';
import Spinner from 'react-bootstrap/Spinner';
import * as transactionsOperation from '../../redux/transactions/transactionsOperations';
import PaginationsBar from 'components/PaginationsBar/PaginationsBar';
import TransactionsItem from 'components/TransactionsList/TransactionsItem/TransactionsItem';
import  filterTransactionsList  from 'functions/filterTransactionList';

const TransactionsList = () => {
    const dispatch = useDispatch();
    const {currentPage, type: curretnTypeFilters, status: currentStatusFilters, items:transactionsList, 
    isLoading} = useSelector(state => 
        state.transactions); 
        
        useEffect(()=> {
            dispatch(transactionsOperation.fetchTansactionsList())
        },[dispatch]);     
    
    const transactionsOnPage = 15;
    const totalPage = Math.ceil((filterTransactionsList(transactionsList, curretnTypeFilters, currentStatusFilters).length)/transactionsOnPage);
        
    const transactionsListForRender = 
    filterTransactionsList(transactionsList, curretnTypeFilters, currentStatusFilters).filter((item, index) => {
        return (index < currentPage*transactionsOnPage && index >= (currentPage-1)*transactionsOnPage)
    }); 
    

    return (<>
         <table className={style.table}>
           <thead className={style.table__header}>
            <tr>
                    <th className={style.table__th}>Id</th>
                    <th className={style.table__th} >Status</th>
                    <th className={style.table__th}>Type</th>
                    <th className={style.table__th}>Client name</th>
                    <th className={style.table__th}>Amount</th>
                    <th className={style.table__th}>Action</th>
                </tr>
           </thead>
           {!isLoading ? <TransactionsItem listForRender={transactionsListForRender} /> : <Spinner animation="border" variant="primary" as='tbody'/> }           
        </table>
        <PaginationsBar totalPage={totalPage} />
    </>
    )}

export default TransactionsList;