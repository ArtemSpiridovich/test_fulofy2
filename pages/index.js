import s from '../styles/home.module.sass'
import {Header} from "../components/Header";
import {Title} from "../components/Title";
import {UserCard} from "../components/UserCart";
import {UserInformation} from "../components/UserInformation";
import {useState} from "react";
import {ModalWindow} from "../components/ModalWindow";

export default function Home() {
  
  const [toggle, setToggle] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  return (
    <div className={s.app}>
      <Header />
      <Title />
      <UserCard setToggle={setToggle} toggle={toggle}/>
      <UserInformation toggle={toggle} setModalIsOpen={setModalIsOpen}/>
      {
        modalIsOpen ? <><ModalWindow setToggle={setToggle} setModalIsOpen={setModalIsOpen}/><div className={s.fon}></div></> : <></>
      }
    </div>
  )
}
