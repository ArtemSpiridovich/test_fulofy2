import s from '../styles/home.module.sass'
import {Header} from "../components/Header";
import {Title} from "../components/Title";
import {useEffect, useState} from "react";
import {ModalWindow} from "../components/ModalWindow";
import {UserEditInformation} from "../components/UserEditInformation";
import {UserCard} from "../components/UserCart";

export default function Home() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [values, setValues] = useState({})
  
  useEffect(() => {
    const data = localStorage.getItem('_values')
    if (data) {
      return  setValues(JSON.parse(data))
    }
  }, [])
  
  return (
    <div className={s.app}>
      <Header name={values.name}/>
      <Title />
      <UserCard name={values.name} href={'/'} text={'Закрыть'} src={'./close.svg'}/>
      <UserEditInformation setModalIsOpen={setModalIsOpen} setNewValues={setValues}/>
      {
        modalIsOpen ? <>
          <ModalWindow values={values} setModalIsOpen={setModalIsOpen}/>
          <div className={s.fon}> </div>
        </> : <>
        </>
      }
    </div>
  )
}