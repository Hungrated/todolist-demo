import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, Button } from 'antd';

const Add = (onAdd, onChange, input) => {
  return (
    <div>
      <Input placeholder={'Enter your username'}
             prefix={<Icon type={'user'}/>}
             value={input}
             onChange={onChange}
      />
    </div>
  );
};

Add.propTypes = {
  onAdd: PropTypes.func.isRequired,
  input: PropTypes.string.isReuired,
};

export default Add;
