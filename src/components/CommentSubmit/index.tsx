import React from 'react';
import { Form, Input, Button } from 'antd';
import { CommentForm } from './style';
import { TopProps } from '../../containers/Top';

export default ({ createComment }: TopProps) => {
  const onFinish = (values: any) => {
    createComment(values);
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
