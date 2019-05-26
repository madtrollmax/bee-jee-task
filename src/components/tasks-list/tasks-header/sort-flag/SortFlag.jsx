import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';
import { SORT_TYPE } from '../../../../consts';

const SortFlag = props => {
    const {sortFieldName, sortType, fieldName} = props;
    return (
        (sortFieldName === fieldName) 
            ? (sortType === SORT_TYPE.DESC 
                ? <FontAwesomeIcon icon={faCaretUp}/> 
                : <FontAwesomeIcon icon={faCaretDown}/>)
            : null
    );
};

export default SortFlag;