import React from 'react';
import {connect} from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';


const Pager = props => {
    const {page, pagesCount, onSetPage} = props;
    return (
        <ButtonToolbar>
            <Button variant="link" disabled={page <= 1} onClick={onSetPage(1)}>
                <FontAwesomeIcon icon={faAngleDoubleLeft}/>
            </Button>
            <Button variant="link" disabled={page <= 1}  onClick={onSetPage(page - 1)}>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </Button>

            <Button variant="link">
                {page} / {pagesCount}
            </Button>
            
            <Button variant="link" disabled={page === pagesCount}  onClick={onSetPage(page + 1)}>
                <FontAwesomeIcon icon={faAngleRight}/>
            </Button>
            <Button variant="link" disabled={page === pagesCount}  onClick={onSetPage(pagesCount)}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Button>

        </ButtonToolbar>
    );
};

const mapStateToProps = (state, ownProps) => ({
    pagesCount: state.tasksData.pagesCount,
    page: state.tasksData.page
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Pager);