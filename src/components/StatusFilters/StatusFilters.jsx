import Form from 'react-bootstrap/Form';
import style from "./StatusFilters.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { updateStatusFiltersValue, updateCurrentPage } from 'redux/transactions/transactionsAction';

const StatusFilter = () => {
    const dispath = useDispatch(); 
    const currentStatusFilters = useSelector(state => 
        state.transactions.status);
        
    const selectChange = (e) => {
        dispath(updateStatusFiltersValue(e.target.value))
        dispath(updateCurrentPage(1))
    };        
    
   return ( 
      <Form.Select 
       onChange={selectChange} 
        className={style.filtersSelect__form}>
            {currentStatusFilters ? 
            <option value="">Clear filter</option> : 
            <option value="" style={{display:"none"}}>Status</option>}        
            <option value="Completed">- Completed</option>
            <option value="Pending">- Pending</option>
            <option value="Cancelled">- Cancelled</option>
    </Form.Select>)};

export default StatusFilter;