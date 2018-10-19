import React from 'react';

const Button = (props) =>{
    return (
        <button {...props}>{props.children}
            <style jsx>
                {`
                    button {
                        border: 1px solid #fff;
                        padding: 10px;
                        margin: 5px;
                        background: transparent;
                        color: #fff;
                        font-weight: bold;
                        font-family: 'Abel', sans-serif;
                        font-size: 14px;
                    }
                    button:hover {
                        cursor: pointer;
                        background: rgba(255, 255, 255, .3);
                        transition: all .25s;
                    }
                `}
            </style>
        </button>
    )
}
export default Button;