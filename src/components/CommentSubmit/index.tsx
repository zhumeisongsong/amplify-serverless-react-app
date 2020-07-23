import React from 'react';
import { Form, Input, Button } from 'antd';

import { CommentForm } from './style';

export default ({ create }: any) => {
  const onFinish = (values: any) => {
    create(values);
  };
  return (
    <CommentForm>
      <Form
        name="form"
        initialValues={{
          content: ''
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="content"
          name="content"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">
            送る
        </Button>
        </Form.Item>
      </Form>
    </CommentForm>
  )
}
