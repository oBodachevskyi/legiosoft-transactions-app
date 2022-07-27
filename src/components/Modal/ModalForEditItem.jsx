import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createPortal } from 'react-dom';
import { changeModalStatus } from 'redux/transactions/transactionsAction';
import * as transactionsOperation from '../../redux/transactions/transactionsOperations';


const modalRoot = document.querySelector('#modal-root'); 

const ModalForEditItem = ({id}) => {
    
  const openModalWindow = useSelector(state => 
      state.transactions.openModal);
  const currentTransaction = useSelector((state => 
    state.transactions.items.filter(item => item.id === id)[0]))
  const dispatch = useDispatch();
  const [status, setStatus] = useState(currentTransaction.Status)

 
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  },);


  const handleKeyDown = e => { 
      if (e.code === 'Escape') {     
          dispatch(changeModalStatus(!openModalWindow))
      }
    };

  const closeModal = e => {
      dispatch(changeModalStatus(!openModalWindow))
  }

  const onSaveButtonClick = () => {
    dispatch(transactionsOperation.fetchUpdateStatusTransaction({
      "id": id,
      "Status": status
    }));
    dispatch(changeModalStatus(!openModalWindow))

  }


  return  createPortal (
    <div>
        <Modal show={openModalWindow} >
            <Modal.Header closeButton onClick={closeModal}>
                <Modal.Title>Update status transactions</Modal.Title>
            </Modal.Header>
            <Modal.Body>Choose new status
                <Form.Select onChange={(e) => setStatus(e.target.value)}>
                    {<option value="" >--</option>}
                    {currentTransaction.Status !== 'Completed' && <option value="Completed">Completed</option>}
                    {currentTransaction.Status !== 'Pending' && <option value="Pending">Pending</option>}
                    {currentTransaction.Status !== 'Cancelled' && <option value="Cancelled">Cancelled</option>}
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
                <Button variant="primary" type="submit" id={id} onClick={onSaveButtonClick}  disabled={status=== '' && "false"}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  , modalRoot);
}

export default ModalForEditItem