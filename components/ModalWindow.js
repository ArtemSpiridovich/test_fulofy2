import s from '../styles/modalWindow.module.sass'
import {useState} from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  save: {
    backgroundColor: '#01BDA7',
    marginBottom: '28px',
    padding: '16px 63px',
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
      marginBottom: '17px',
    }
  },
  good: {
    backgroundColor: '#01BDA7',
    marginBottom: '28px',
    padding: '16px 63px',
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
      marginBottom: '17px',
      display: 'none'
    }
  },
  unsave: {
    padding: '16px 53px',
    borderRadius: '36px',
    color: '#01BDA7',
    borderColor: '#01BDA7',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '19px',
    textTransform: 'none',
  },
  label: {},
});

export function ModalWindow({setModalIsOpen, setToggle}) {
  const classes = useStyles()
  const [save, setSave] = useState(false)
  const [text, setText] = useState('')
  
  const SaveData = () => {
    setText('Данные успешно сохранены')
    setSave(true)
    setToggle(true)
  }
  
  const onTouch = () => {
    setSave(false)
    setModalIsOpen(false)
  }
  
  return (
    <div className={`${s.modal} ${save ? s.success : ''}`}>
      {
        !save ? (
          <>
            <span className={s.modal__text}>Сохранить изменения?</span>
            <Button classes={{
              label: classes.label,
              root: classes.save
            }} onClick={() => SaveData()} variant="contained" color="primary" disableRipple={true}>
              Сохранить
            </Button>
            <Button onClick={() => setModalIsOpen(false)} classes={{
              label: classes.label,
              root: classes.unsave
            }} variant="outlined" color="primary" disableRipple={true}>
              Не сохранять
            </Button>
            <img onClick={() => setModalIsOpen(false)} className={s.modal__close} src={'./close-modal.svg'}/>
          </>
        ) : (
          <>
            <span className={`${s.modal__text} ${s.second}`}>{text}</span>
            <Button classes={{
              label: classes.label,
              root: classes.good
            }} onClick={() => setModalIsOpen(false)} onTouchStart={() => onTouch()} variant="contained" color="primary" disableRipple={true}>
              Хорошо
            </Button>
          </>
        )
      }
    
    </div>
  )
}
