import styles from './Footer.module.css'

const Footer = (props) =>{
    return(
        <div className={styles.center}>
            <p className={styles.para}></p>
            <div className={styles.content}>
                <p>Total</p>
                {/* <p className={styles.box}>{`$${2199.96}`}</p> */}
                <p className={styles.box}>{`$${props.mainPrice.toFixed(2)}`}</p>
            </div>
            <button className={styles.box1} onClick={props.clearCart}>Clear Cart</button>
        </div>
    )
}

export default Footer;