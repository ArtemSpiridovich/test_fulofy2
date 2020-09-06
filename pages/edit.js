import s from '../styles/home.module.sass'
import {Header} from "../components/Header";
import {Title} from "../components/Title";
import {useEffect, useState} from "react";
import {ModalWindow} from "../components/ModalWindow";
import {UserEditInformation} from "../components/UserEditInformation";
import {UserCard} from "../components/UserCart";
import {repository} from "../components/localStorage";
import Head from "next/head";
//icons
import Close from '@material-ui/icons/Close';

export default function Home() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [values, setValues] = useState({})
  
  useEffect(() => {
    const data = repository.getUserData()
    if(data) return setValues(data)
  }, [])
  
  return (
    <div className={s.app}>
      <Head>
        <title>Edit | Test Fulogy</title>
      </Head>
      <Header name={values.name}/>
      <Title />
      <UserCard name={values.name} href={'/'} text={'Закрыть'}>
        <Close/>
      </UserCard>
      <UserEditInformation setModalIsOpen={setModalIsOpen} setValues={setValues}/>
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