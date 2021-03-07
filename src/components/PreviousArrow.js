import React from 'react';

import "./../resources/css/PreviousArrow.css";

function PreviousArrow(props) {
    const {onClick} = props;

    return (
        <button onClick={onClick} className={"prev-btn"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17.719 29.782">
                <path id="Path_822" data-name="Path 822" d="M0,0,13.478,13.477,26.954,0"
                      transform="translate(16.305 1.414) rotate(90)" fill="none" stroke="#fff" strokeWidth="4"/>
                <script xmlns=""/>
            </svg>
        </button>
    );
}

export default PreviousArrow;