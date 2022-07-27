import style from './ExportButton.module.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import fileDownload from 'functions/fileDownload';
import filterTransactionsList from '../../../functions/filterTransactionList';
import arrayToCSV from '../../../functions/arrayToCSV';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DialogWindow from 'react-bootstrap/Modal';

function ExportButton() {
    const {items:transactionsList} = useSelector(state => 
    state.transactions);   

    const [show, setShow] = useState(false);

    const [id, setId] = useState(false);
    const [status, setStatus] = useState(true);
    const [type, setType] = useState(true);
    const [clientName, setClientName] = useState(true);

    const [typeValue, setTypeValue] = useState('');
    const [statusValue, setStatusValue] = useState('')

    const header = [id && "id", status && "Status", type && "Type", clientName && "ClientName", "Amount"];  

    const onButtonSaveFileClick = (e) => {
      const arrayTodownload = filterTransactionsList(transactionsList, typeValue, statusValue);
      const csv = arrayToCSV(header, arrayTodownload)
      fileDownload("transactions.csv", csv);
      setShow(false)
    }   

    return (<>
      <button 
        onClick={()=>{setShow(!show)}}
        className={style.export__button}>Export</button>
      <div>
     
      <DialogWindow show={show} onHide={()=>{setShow(!show)}}>
        <DialogWindow.Header closeButton>
          <DialogWindow.Title>Export your`s transactions</DialogWindow.Title>
        </DialogWindow.Header>
        <DialogWindow.Body>
          <Form >
            <Form.Group style={{display:"flex"}} >
            <Form.Check onChange={(e)=> {setId(!id)}}
                type="switch" label="Id" />

            <Form.Check onChange={(e)=> {setStatus(!status)}}
                type="switch"  label="Status" checked={status}/>

            <Form.Check onChange={(e)=> {setType(!type)}}
                type="switch" label="Type" checked={type}/>

            <Form.Check onChange={(e)=> {setClientName(!clientName)}}
                type="switch" label="Client name" checked={clientName} />

            </Form.Group>
            <Form.Group>
              
                <Form.Select 
                  onChange={(e)=> {setTypeValue(e.target.value)}} 
                  className={style.filtersType__form}>
                    {typeValue ? <option value="" >Clear filter</option> : 
                      <option value="" style={{display:"none"}}>Type</option>}        
                      <option value="Withdrawal"> - Withdrawal</option>
                      <option value="Refill">- Refill</option>
                </Form.Select>

                <Form.Select 
                  onChange={(e)=> {setStatusValue(e.target.value)}} 
                  className={style.filtersSelect__form}>
                    {statusValue ? 
                      <option value="">Clear filter</option> : 
                      <option value="" style={{display:"none"}}>Status</option>}      
                      <option value="Completed">- Completed</option>
                      <option value="Pending">- Pending</option>
                      <option value="Cancelled">- Cancelled</option>
                  </Form.Select>

            </Form.Group>
          </Form>
      </DialogWindow.Body>
      <DialogWindow.Footer>
          <Button variant="secondary" onClick={()=>{setShow(!show)}}>
            Close
          </Button>
          <Button variant="primary" onClick={onButtonSaveFileClick}>
            Save File
          </Button>
        </DialogWindow.Footer>
      </DialogWindow>
      </div></>
    )}


export default ExportButton
