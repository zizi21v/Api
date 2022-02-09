import styles from "./style.module.css";

function Card (props){
 
    const {image, name, status} = props;
    return (<div className={styles.cards}>
     <img className={styles.picture}  src ={image} alt=""/>
     <h2 className={styles.name}>{name}</h2>
     <h2 className={styles.status}>{status}</h2>
    
  </div>)

}

export  { Card }