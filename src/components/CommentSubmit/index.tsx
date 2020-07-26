import React from 'react';
import { Form, Input, Button } from 'antd';
import { CommentForm } from './style';
import { TopProps } from '../../containers/Top';

export default ({ createComment, toggleLoadNew }: TopProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    if (createComment) {
      createComment(values);

      form.resetFields();

      if (toggleLoadNew) {
        toggleLoadNew(true);
      }
    }
  };
  return (
    <CommentForm>
      <Form
        name="form"
        form={form}
        initialValues={{
          content: '',
        }}
        onFinish={onFinish}
      >
        <Form.Item name="content" rules={[{ required: true }, { max: 100 }]}>
          <Input placeholder="コメント入力してください" />
        </Form.Item>

        <Button htmlType="submit">送る</Button>
      </Form>
    </CommentForm>
  );
};
