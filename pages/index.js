import s from '../styles/home.module.sass'
import {Header} from "../components/Header";
import {Title} from "../components/Title";
import {UserCard} from "../components/UserCart";
import {UserInformation} from "../components/UserInformation";
import {useEffect, useState} from "react";

export default function Home() {
  
  const [values, setValues] = useState({})
  
  useEffect(() => {
    const data = localStorage.getItem('_values')
    debugger
    if (data) {
      return  setValues(JSON.parse(data))
    }
  }, [])
  
  return (
    <div className={s.app}>
      <Header name={values.name}/>
      <Title />
      <UserCard name={values.name} href={'/edit'} text={'Редактировать'} src={'./edit.svg'}/>
      <UserInformation email={values.email} phone={values.phone}/>
    </div>
  )
}
