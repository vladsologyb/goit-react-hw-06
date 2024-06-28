import css from "./Contact.module.css"
import {remove} from '../../redux/contactsSlice.js';
import { useDispatch } from "react-redux";
export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
    return <div className={css.container}>
    <div className={css.containerForP}>
        <p className={css.text}>{name}</p>
       
        <p className={css.text}>{number}</p>
          </div>
      <button className={css.btn} onClick={()=>dispatch(remove(id))}>
        Delete
      </button>
    </div>
}