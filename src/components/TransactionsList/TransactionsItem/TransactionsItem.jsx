import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import style from './TransactionsItem.module.css'
import ModalForDelete from '../../Modal/ModalForDeleteItem';
import ModalForEditItem from '../../Modal/ModalForEditItem';
import { changeDialogStatus,  changeModalStatus} from 'redux/transactions/transactionsAction';



const TransactionsItem = ({listForRender}) => {
    const [itemsId, setItemsId] = useState('');
    const dispatch = useDispatch();
    const {openDialog, openModal} = useSelector(state => 
       state.transactions);

    const onButtonDeleteClick = (e) => {
        setItemsId(e.currentTarget.id)
        dispatch(changeDialogStatus(!openDialog))       
    };

    const onButtonEditClick = e => {
        setItemsId(e.currentTarget.id);
        dispatch(changeModalStatus(!openModal));
    };
    
    return ( <tbody>
        {listForRender.map(({id, Status, Type, ClientName, Amount}) => 
        (
            <tr key={id} className={style.table__line}>
                <td className={style.table__td}>{id}</td>
                <td className={style.table__td}>{Status}</td>
                <td className={style.table__td}>{Type}</td>
                <td className={style.table__td}>{ClientName}</td>
                <td className={style.table__td}>{Amount}</td>
            <td>
                <Button className={style.table__buttonEdit} id={id} onClick={onButtonEditClick}>Edit</Button>
                <Button className={style.table__buttonDelete} id={id} variant="secondary" onClick={onButtonDeleteClick}>Delete</Button>
            </td>
            </tr>)
        )}          
    {openDialog && <ModalForDelete id={itemsId} />} 
    {openModal && <ModalForEditItem id={itemsId} />}
    </tbody>
    )};

export default TransactionsItem;