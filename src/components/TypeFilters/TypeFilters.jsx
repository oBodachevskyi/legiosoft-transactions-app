import Form from 'react-bootstrap/Form';
import style from "./TypeFilters.module.css";
import {  useDispatch, useSelector } from 'react-redux';
import { updateTypeFiltersValue, updateCurrentPage } from 'redux/transactions/transactionsAction';



const TypeFilters = () => {
    const dispath = useDispatch(); 
    const curretnTypeFilters = useSelector(state => 
        state.transactions.type);

    const selectChange = (e) => {
        dispath(updateTypeFiltersValue(e.target.value))
        dispath(updateCurrentPage(1))
    }
   return (  
    <Form.Select 
       onChange={selectChange} 
       className={style.filtersType__form}>
        {curretnTypeFilters ? <option value="" >Clear filter</option> : 
        <option value="" style={{display:"none"}}>Type</option>}        
        <option value="Withdrawal"> - Withdrawal</option>
        <option value="Refill">- Refill</option>
    </Form.Select>
)}

export default TypeFilters