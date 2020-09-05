import s from '../styles/user-information.module.sass'

const Item = ({src, text}) => {
  return (
    <div className={s.item}>
      <img className={s.item__image} src={src}/>
      <span className={s.item__text}>{text}</span>
    </div>
  )
}

export function UserInformation({email = 'Ivanova@mail.ru', phone = 'Введите номер телефона'}) {
  return (
    <div className={s.userInformation}>
      <Item src={'./mail.svg'} text={email}/>
      <Item src={'./phone.svg'} text={phone}/>
    </div>
  )
}
