import React from 'react';
import './InputBox.css'

const InputBox = (props) =>{
    return(
        <div className="InputText">
            {
                props.Input ?
                <label>
                <span>{props.label}</span>
                <input
                className={`${props.className} InputBox`}
                type ='text'
                placeholder ={props.placeholder}
                onChange={props.onChange}
                />
                </label>
                :
                <label>
                 <span>{props.label}</span>
                <select style={{ width: '200px' }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                </label>
            }
            
        </div>
    )
}

export default InputBox;