import s from '../styles/user-information.module.sass'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useFormik} from "formik";
import * as axios from "axios";

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
  },
  label: {},
});

export function UserEditInformation({setNewValues, setModalIsOpen}) {
  const classes = useStyles()
  const formik = useFormik({
    validate: (values) => {
      const name = /^[А-Яа-яЁё]{4,}\s[А-Яа-яЁё]{4,}/g
      const email = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
      const phone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
      if (!name.test(values.name)) {
        if (values.name === '') {
          return {
            name: 'Введите фамилию и имя'
          }
        } else {
          return {
            name: 'Вы неверно указали фамилию и имя'
          }
        }
      } else if (!email.test(values.email)) {
        if (values.email === '') {
          return {
            email: 'Введите ваш email'
          }
        } else {
          return {
            email: 'Вы неверно указали email'
          }
        }
      } else if (!phone.test(values.phone)) {
        if (values.phone === '') {
          return {
            phone: 'Введите номер телефона'
          }
        } else {
          return {
            phone: 'Вы неверно указали номер телефона'
          }
        }
      }
    },
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    onSubmit: (values, a) => {
      axios.post("/api/posts", values)
        .then(res => {
          setModalIsOpen(true)
          setNewValues({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone
          })
          a.resetForm()
          return console.log(res.data)
        })
        .catch(res => {
          return console.log(res)
        })
    },
  })
  
  return (
    <div className={s.userInformation}>
      <div className={s.inputs}>
        <form onSubmit={formik.handleSubmit}>
          <div className={s.container}>
            <Input
              img={'./contacts.svg'}
              className={s.container__icon}
              classNameInput={s.container__input}
              error={formik.errors.name}
              label={'Фамилия и имя'}
              placeholder={'Укажите ваши фамилию и имя'}
              message={formik.errors.name}
              formik={formik.getFieldProps("name")}
            />
            <Input
              img={'./mail.svg'}
              className={s.container__icon}
              classNameInput={s.container__input}
              error={formik.errors.email}
              label={'E-mail'}
              placeholder={'Укажите ваш email'}
              message={formik.errors.email}
              formik={formik.getFieldProps("email")}
            />
            <Input
              img={'./phone.svg'}
              className={s.container__icon}
              classNameInput={s.container__input}
              error={formik.errors.phone}
              label={'Номер телефона'}
              placeholder={'Укажите номер телефона'}
              message={formik.errors.phone}
              formik={formik.getFieldProps("phone")}
            />
          </div>
          <Button disabled={formik.errors.phone || formik.errors.email || formik.errors.name} type={'submit'} classes={{
            label: classes.label,
            root: classes.root
          }} variant="contained" color="primary" disableRipple={true}>
            Сохранить изменения
          </Button>
        </form>
      </div>
    </div>
  )
}
