import styles from "./Navbar.module.css"

const Navbar = (props) =>{

    const color = {
        color: "black",
        fontSize: "20px"
    };

    return (
        <div className="navbar">
            <h1>UseReducer</h1>
            <div className={styles.align}>
                <i class="fa-solid fa-heart" id={styles.red}></i>
                <p style={color}>{props.itemsInCart}</p>
            </div>
        </div>
    )
}

export default Navbar;