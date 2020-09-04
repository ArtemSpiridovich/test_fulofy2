import s from '../styles/user-information.module.sass'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useFormik} from "formik";


const Item = ({src, text}) => {
  return (
    <div className={s.item}>
      <img className={s.item__image} src={src}/>
      <span className={s.item__text}>{text}</span>
    </div>
  )
}

const Input = ({img, error, className, classNameInput, label, value, message, placeholder}) => {
  return (
    <div className={s.input}>
      <img className={className} src={img}/>
      <TextField
        placeholder={placeholder}
        error={error}
        className={classNameInput}
        label={label}
        defaultValue={value}
        helperText={message}
        variant="outlined"
      />
      <img className={s.line} src={'./Line-12.svg'}/>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    backgroundColor: '#01BDA7',
    padding: '15px 26px',
    marginBottom: '44px',
    borderRadius: '36px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '19px',
    textTransform: 'none',
    '&:hover, &:focus': {
      backgroundColor: '#01BDA7',
    },
    '@media screen and (max-width: 768px)': {
      marginBottom: '17px'
    }
  },
  label: {
  },
});

export function UserInformation({toggle, setModalIsOpen}) {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  })
  
  return (
    <div className={s.userInformation}>
      {
        toggle ? <>
        <Item src={'./mail.svg'} text="Ivanova@mail.ru"/>
        <Item src={'./phone.svg'} text="Введите номер телефона"/>
        </>
        : <div className={s.inputs}>
            <form onSubmit={formik.handleSubmit} className={s.container}>
              <Input
              img={'./contacts.svg'}
              className={s.container__icon}
              classNameInput={s.container__input}
              error={formik.errors.name}
              label={'Фамилия и имя'}
              placeholder={'Укажите ваши фамилию и имя'}
              message={formik.errors.name}
              />
              <Input
                img={'./mail.svg'}
                className={s.container__icon}
                classNameInput={s.container__input}
                error={formik.errors.email}
                label={'E-mail'}
                placeholder={'Укажите ваш email'}
                message={formik.errors.email}
              />
              <Input
                img={'./phone.svg'}
                className={s.container__icon}
                classNameInput={s.container__input}
                error={formik.errors.phone}
                label={'Номер телефона'}
                placeholder={'Укажите номер телефона'}
                message={formik.errors.phone}
              />
            </form>
            <Button onClick={() => setModalIsOpen(true)} classes={{
              label: classes.label,
              root: classes.root
            }} variant="contained" color="primary" disableRipple={true}>
              Сохранить изменения
            </Button>
        </div>
      }
    </div>
  )
}
