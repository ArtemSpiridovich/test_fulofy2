import s from '../styles/user-information.module.sass'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useFormik} from "formik";
import * as axios from "axios";
import {ValidateEmail, ValidateName, ValidatePhone} from "./validate";

const instance = axios.create({
  baseURL: `/api/posts`,
})

const Input = ({img, error, className, classNameInput, label, value, message, placeholder, formik}) => {
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
        {...formik}
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
  }
});

export function UserEditInformation({setValues, setModalIsOpen}) {
  const classes = useStyles()
  
  const formik = useFormik({
    validate: (values) => {
      if (!ValidateName(values.name)) return {name: 'Вы неверно указали фамилию и имя'}
      if (values.name === '') return {name: 'Введите фамилию и имя'}
      if (!ValidateEmail(values.email)) return {email: 'Вы неверно указали email'}
      if (values.email === '') return {email: 'Введите ваш email'}
      if (!ValidatePhone(values.phone)) return {phone: 'Вы неверно указали номер телефона'}
      if (values.phone === '') return {phone: 'Введите номер телефона'}
    },
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    onSubmit: (values, a) => {
      instance.post('',values)
        .then(res => {
          setValues({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone
          })
          setModalIsOpen(true)
          a.resetForm()
          return console.log(res.data)
        })
        .catch(res => {
          return console.log(res)
        })
    },
  })
  
  const renderInput = (img, name, label, placeholder) => {
    return <Input
      img={img}
      className={s.container__icon}
      classNameInput={s.container__input}
      error={formik.errors[name]}
      label={label}
      placeholder={placeholder}
      message={formik.errors[name]}
      formik={formik.getFieldProps(`${name}`)}
    />
  }
  
  return (
    <div className={s.userInformation}>
      <div className={s.inputs}>
        <form onSubmit={formik.handleSubmit}>
          <div className={s.container}>
            {renderInput('./contacts.svg', 'name', 'Фамилия и имя', 'Укажите ваши фамилию и имя')}
            {renderInput('./mail.svg', 'email', 'E-mail', 'Укажите ваш email')}
            {renderInput('./phone.svg', 'phone', 'Номер телефона', 'Укажите номер телефона')}
          </div>
          <Button disabled={formik.errors.phone || formik.errors.email || formik.errors.name} type={'submit'} classes={{
            root: classes.root
          }} variant="contained" color="primary" disableRipple={true}>
            Сохранить изменения
          </Button>
        </form>
      </div>
    </div>
  )
}
