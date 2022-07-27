import style from './ImportButton.module.css'
import  { useState } from "react";
import csvFileToArray from "../../../functions/csvToArray";
 import * as transactionsOperation from '../../../redux/transactions/transactionsOperations'; 
import { useDispatch } from 'react-redux';

const ImportFiles = () => {
 
    const [file, setFile] = useState();
    const dispatch = useDispatch()
  

    const fileReader = new FileReader(); 

    const handleOnChange = e => {        
        setFile(e.target.files[0])     
    }
    
  
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (file) {
            fileReader.onload = function (e) {
                const csvOutput = e.target.result;
                const array = csvFileToArray(csvOutput)     
                console.log(array[0])       
                 dispatch(transactionsOperation.fetchUpdateTransactionsList(array))      
            };
             fileReader.readAsText(file); 
             setFile()
        }
    };

    
    return (
       <>        
         <form 
         onSubmit={handleOnSubmit} 
         >
            <input  type="file"
                    name="file"
                    id="file"
                    accept=".csv"               
                    onChange={handleOnChange}
                    className={style.input}
                    />
            {!file ? <label className={style.input__label}htmlFor="file"><span>Import</span></label> :
            <button type='submit' onSubmit={handleOnSubmit} className={style.input__submit}>Update list
            </button>}         
        </form> </>
)
   
}

export default ImportFiles;

        