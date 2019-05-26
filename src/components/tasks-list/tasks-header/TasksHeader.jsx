import React from 'react';
import { COL_ALIASES } from '../../../consts';
import SortFlag from './sort-flag/SortFlag';

const TaskHeader = props => {
    const {onSortChange, sortFieldName, sortType} = props;
    return (
        <tr>
            <th onClick={onSortChange(COL_ALIASES.ID)}>
                ID <SortFlag sortFieldName={sortFieldName} sortType={sortType} fieldName={COL_ALIASES.ID}/>
            </th>
            <th onClick={onSortChange(COL_ALIASES.USERNAME)}>
                User <SortFlag sortFieldName={sortFieldName} sortType={sortType} fieldName={COL_ALIASES.USERNAME}/>
            </th>
            <th onClick={onSortChange(COL_ALIASES.EMAIL)}>
                E-mail <SortFlag sortFieldName={sortFieldName} sortType={sortType} fieldName={COL_ALIASES.EMAIL}/>
            </th>
            <th onClick={onSortChange(COL_ALIASES.TEXT)}>
                Description <SortFlag sortFieldName={sortFieldName} sortType={sortType} fieldName={COL_ALIASES.TEXT}/>
            </th>
            <th onClick={onSortChange(COL_ALIASES.STATUS)}>
                Status <SortFlag sortFieldName={sortFieldName} sortType={sortType} fieldName={COL_ALIASES.STATUS}/>
            </th>
        </tr>
    );
};

export default TaskHeader;