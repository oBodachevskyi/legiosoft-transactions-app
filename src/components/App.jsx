import style from './App.module.css'

import Navigation from "./Navigation/Navigation";
import TransactionsList from './TransactionsList/TransactionsList';
import TypeFilters from "./TypeFilters/TypeFilters";
import StatusFilter from "./StatusFilters/StatusFilters";
import ImportFiles from "./Buttons/ImportButton/ImportFiles" 
import ExportButton from "./Buttons/ExportButton/ExportButton"
import SideBar from "./SideBar/SideBar"


export const App = () => {
  return (
    <div className={style.countainer}>
      <Navigation />
      <div className={style.hero}>
        <SideBar />
        <div className={style.tranactions__box}>
          <div className={style.controlPanel__box}>
            <div className={style.filterPanel__box}>
              <StatusFilter />
              <TypeFilters />
            </div>
            <div className={style.filePanel__box}>
              <ImportFiles /> 
              <ExportButton />
            </div>
          </div>
          <TransactionsList />
        </div>
      </div>
    </div>
  );
};
