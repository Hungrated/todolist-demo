import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const List = ({onDelete, lists}) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title={'Delete?'} onConfirm={() => onDelete(record.id)}>
            <Button>delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return (
    <Table dataSource={lists} columns={columns} pagination={{pageSize: 6}}/>
  );
};

List.propTypes = {
  onDelete: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
};

export default List;
