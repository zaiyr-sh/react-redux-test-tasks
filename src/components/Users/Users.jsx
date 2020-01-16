import React from 'react';
import styles from './users.module.css';
import userPhoto from "../../assets/images/userPhoto.jpg";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.pagination}>
                        <ul>
                            {pages.map(p => {
                                return <a className={props.currentPage === p && styles.selectedPage}
                                            onClick={() => {
                                                props.onPageChanged(p, props.currentPage, props.pageSize)}}
                                            >{p}</a>
                            })}
                        </ul>
                    </div>
                </div>
                <div className={styles.pagination__blocks}>
                    <div className={styles.pagination__block}>
                        {
                            props.users.map(u => 
                                <div key={u.id} className={styles.pagination__items}>
                                    <ul className={styles.pagination__list}>
                                        <li className={styles.pagination__user}>
                                            <img src={userPhoto}
                                                className={styles.userPhoto}/>
                                            <h3>{u.name}  {u.surname}</h3>
                                            <p>{u.desc}</p>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                    <div className={styles.pagination__block}>
                        <div className={styles.pagination__item}>
                            <ul className={styles.pagination__list}>
                                <li className={styles.pagination__user}>
                                    <img src={userPhoto}
                                        className={styles.userPhoto}/>
                                    <h3>{props.allUsers.name} {props.allUsers.surname}</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.pagination}>
                        <ul>
                            {pages.map(p => {
                                return <a className={props.currentPage === p && styles.selectedPage}
                                            onClick={() => {
                                                props.onPageChanged(p, props.currentPage, props.pageSize)}}
                                            >{p}</a>
                            })}
                        </ul>
                    </div>
                </div>
            </section>   

}


export default Users;