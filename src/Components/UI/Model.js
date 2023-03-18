import classes from './Model.module.css'
import ReactDOM from 'react-dom'

const BackDrop = props =>{
    return <div className={classes.backdrop} onClick={props.closeCart}/>
}

const ModelOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
    return <>
    {ReactDOM.createPortal(<BackDrop closeCart={props.closeCart}/>,portalElement)}
    {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
    </>
}

export default Modal

