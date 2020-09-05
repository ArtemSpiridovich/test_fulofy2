import s from '../styles/home.module.sass'
import {Header} from "../components/Header";
import {Title} from "../components/Title";
import {useState} from "react";
import {ModalWindow} from "../components/ModalWindow";
import {UserEditInformation} from "../components/UserEditInformation";
import {UserCard} from "../components/UserCart";

export default function Home() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [values, setNewValues] = useState({})
  
  return (
    <div className={s.app}>
      <Header/>
      <Title />
      <UserCard href={'/'} text={'Закрыть'} src={'./close.svg'}/>
      <UserEditInformation setModalIsOpen={setModalIsOpen} setNewValues={setNewValues}/>
      {
        modalIsOpen ? <><ModalWindow values={values} setModalIsOpen={setModalIsOpen}/><div className={s.fon}> </div></> : <></>
      }
    </div>
  )
}