import React from 'react';

function Square(props) {
    let style = 'square';
    if (props.winner) {
        style = style + ' green';
    }

    return (
        <button className={style} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;