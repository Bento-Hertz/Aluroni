import styles from './style.module.scss';
import options from './options.json';
import classNames from 'classnames';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
    ordenator: string,
    setOrdenator: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenator({ordenator, setOrdenator}: Props) {

    const [open, setOpen] = useState(false);
    const nameOrdenator = ordenator && options.find(option => option.value === ordenator)?.name

    return (
        <button 
            className={classNames({
                [styles.ordenator]: true,
                [styles["ordenator--active"]]: ordenator !== ""
            })} 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
        >
            <span>{nameOrdenator || "Order by"}</span>
            {open ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
            <div className={classNames({
                [styles.ordenator_options]: true,
                [styles["ordenator_options--active"]]: open,
            })}>
                {options.map((option) => (
                    <div className={styles.ordenator_option} key={option.value} onClick={() => { return setOrdenator(option.value) }}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    );
}