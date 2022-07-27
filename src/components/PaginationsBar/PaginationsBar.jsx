import 'bootstrap/dist/css/bootstrap.min.css';
import style from './PaginationsBar.module.css';
import {ReactComponent as LeftArrow}  from '../Image/LeftArrow.svg';
import {ReactComponent as RightArrow}  from '../Image/RightArrow.svg';
import {ReactComponent as Dots}  from '../Image/Dots.svg';

import { useSelector, useDispatch } from 'react-redux';
import {updateCurrentPage} from '../../redux/transactions/transactionsAction'

function PaginationsBar({totalPage}) {
  const currentPageNumber = useSelector(state => 
    state.transactions.currentPage);
  const dispath = useDispatch(); 


  const onButtonChangePageClick = (amount) => {    
      dispath(updateCurrentPage(currentPageNumber + amount))    
  }

  return (    
    <div className={style.pagination}>
     {/* button to move back 1 page back (arrow)  */} 
     {currentPageNumber === 1 && <button disabled className={style.pagination__buttonArrowLeft}>
      {<LeftArrow className={style.pagination__arowDisabled} />}</button>} 

     {currentPageNumber > 1 && <button className={style.pagination__buttonArrowLeft} onClick={() => onButtonChangePageClick(-1)}>
     {<LeftArrow className={style.pagination__arow} />}</button>} 

     {/* button back to first page(number) */}   
     {currentPageNumber >= 3 && <button className={style.pagination__button} onClick={() => onButtonChangePageClick(1-currentPageNumber)}>{1}</button>}
     
     {/* button to move back 2 pages back(three dots) */}
     {currentPageNumber > 3 && <button className={style.pagination__button} onClick={() => onButtonChangePageClick(-2)}>
     {<Dots className={style.pagination__dots} />}</button>} 

     {/*  button to move back 1 page (number) */}
     {currentPageNumber !== 1 && <button className={style.pagination__button} onClick={() => onButtonChangePageClick(-1)}>{currentPageNumber - 1}</button>}
     
     {/* active page (number) */}
     <button className={style.pagination__buttonActive}>{currentPageNumber}</button>
     
     {/* button to move forrward 1 page (number)  */} 
     {currentPageNumber < totalPage && <button className={style.pagination__button} onClick={() => onButtonChangePageClick(1)}>{currentPageNumber + 1}</button>}
     
     {/* button to move forrward 2 pages back(three dots) */}
     {currentPageNumber < totalPage-2 && <button className={style.pagination__button} onClick={() => onButtonChangePageClick(2)}>
     {<Dots className={style.pagination__dots} />}</button>}

     {/* button to move last page forward(three dots) */}
     {currentPageNumber < totalPage-1 && <button className={style.pagination__button} onClick={() => onButtonChangePageClick(totalPage-currentPageNumber)}>{totalPage}</button>}  
     
     {/* button to move forrward 1 page (arrow)  */}  
     {currentPageNumber < totalPage && <button className={style.pagination__buttonArrowRight} onClick={() => onButtonChangePageClick(1)}>
     {<RightArrow className={style.pagination__arow} />}</button>}
     {currentPageNumber >= totalPage && <button className={style.pagination__buttonArrowRight} disabled> {<RightArrow className={style.pagination__arowDisabled} />}</button>} 
   </div>
  );
}

export default PaginationsBar;