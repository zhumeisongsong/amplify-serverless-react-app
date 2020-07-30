import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { CommentForm } from './style';
import { TopProps } from '../../containers/Top';

export default ({ createComment, toggleLoadNew }: TopProps) => {
  const [form] = Form.useForm();
  const [isDisabled, setDisabled] = useState(true);
  const [delayDisabled, setDelayDisabled] = useState(false);
  const [value, setValue] = useState('');
  const input = useRef<Input>(null);

  const onFinish = (values: any) => {
    if (delayDisabled) return false;
    setDelayDisabled(true);
    setDisabled(true);
    if (createComment) {
      createComment(values);

      form.resetFields();
      input.current?.focus();
      setTimeout(() => {
        setDelayDisabled(false);
      }, 3000);

      if (toggleLoadNew) {
        toggleLoadNew(true);
      }
    }
  };

  useEffect(() => {
    !delayDisabled && setDisabled(!form.getFieldValue('content'));
  }, [delayDisabled, form, value]);

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
        <Form.Item name="content" normalize={(value) => value.trim()} rules={[{ required: true }, { max: 100 }]}>
          <Input placeholder="コメント入力してください" ref={input} onChange={(e) => setValue(e.target.value)} />
        </Form.Item>

        <Button htmlType="submit" disabled={isDisabled} style={{opacity: isDisabled ? 0.7 : 1}}>送る</Button>
      </Form>
    </CommentForm>
  );
};
