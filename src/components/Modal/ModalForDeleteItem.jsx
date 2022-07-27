
import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createPortal } from 'react-dom';
import { changeDialogStatus } from 'redux/transactions/transactionsAction';
import * as transactionsOperation from '../../redux/transactions/transactionsOperations';

const modalRoot = document.querySelector('#modal-root'); 

function ModalForDelete({id}) {
  const openDialogWindow = useSelector(state => 
      state.transactions.openDialog);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  },);


  const handleKeyDown = e => { 
      if (e.code === 'Escape') {     
          dispatch(changeDialogStatus(!openDialogWindow))
      }
    };

  const closeModal = e => {
      dispatch(changeDialogStatus(!openDialogWindow))
  }

  const onDeleteButtonClick = () => {
    dispatch(transactionsOperation.fetchDelTransactions(id));
    dispatch(changeDialogStatus(!openDialogWindow))
  }

  return  createPortal (
    <div>
        <Modal show={openDialogWindow} >
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want delete operation?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" id={id} onClick={onDeleteButtonClick}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  , modalRoot);
}

export default ModalForDelete