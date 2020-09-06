import s from '../styles/home.module.sass'
import {Header} from "../components/Header";
import {Title} from "../components/Title";
import {UserCard} from "../components/UserCart";
import {UserInformation} from "../components/UserInformation";
import {useEffect, useState} from "react";
//icons
import Edit from '@material-ui/icons/Edit';
import Head from "next/head";
import {repository} from "../components/localStorage";

export default function Home() {
  
  const [values, setValues] = useState({})
  
  useEffect(() => {
    const data = repository.getUserData()
    if(data) return setValues(data)
  }, [])
  
  return (
    <div className={s.app}>
      <Head>
        <title>Home | Test Fulogy</title>
      </Head>
      <Header name={values.name}/>
      <Title />
      <UserCard name={values.name} href={'/edit'} text={'Редактировать'}>
        <Edit/>
      </UserCard>
      <UserInformation email={values.email} phone={values.phone}/>
    </div>
  )
}
