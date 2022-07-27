
import style from './SideBar.module.css'

const SideBar = () => {
    return (<div>
       <div className={style.sideBar}>
        <div className={style.sideBar__header}>
          Transactions
        </div>
        <div className={style.sideBar__body}>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
       </div>
      </div>)
}

export default SideBar
