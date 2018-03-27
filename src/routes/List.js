import React from 'react';
import { connect } from 'dva';
import List from '../components/List';
import Add from '../components/Add';
import styles from './List.css';

const Lists = ({dispatch, lists, inputs}) => {
  function handleDelete(id) {
    dispatch({
      type: 'lists/delete',
      payload: id,
    });
  }

  function handleAdd(id) {
    dispatch({
      type: 'lists/add',
      payload: inputs.input,
    });
  }

  function handleChange(e) {
    dispatch({
      type: 'inputs/change',
      payload: e.target.value,
    });
  }

  return (
    <div>
      <Add />

    </div>
  )

};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(List);
