import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { CommentForm } from './style';
import { TopProps } from '../../containers/Top';

interface InputProps extends TopProps {
  toggleError?: any;
}

export default ({ createComment, toggleLoadNew, toggleError }: InputProps) => {
  const [form] = Form.useForm();
  const [isDisabled, setDisabled] = useState(true);
  const [delayDisabled, setDelayDisabled] = useState(false);
  const [value, setValue] = useState('');
  const input = useRef<Input>(null);

  const onFinish = (values: any) => {
    if (delayDisabled) return false;
    const value = {
      content: values.content.trim(),
    };

    if (values.content.length > 80) {
      toggleError(
        <>
          投稿できる文字数の上限を
          <br />
          超えています。
        </>
      );
      return false;
    }

    setDelayDisabled(true);
    setDisabled(true);

    if (createComment) {
      createComment(value);

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
    !delayDisabled && setDisabled(!value.trim());
  }, [delayDisabled, value]);

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
        <Form.Item
          name="content"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="コメント入力してください"
            ref={input}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Item>

        <Button
          htmlType="submit"
          disabled={isDisabled}
          style={{ 
            opacity: isDisabled ? 0.5 : 1,
            cursor: isDisabled ? 'default' : 'pointer',
          }}
        >
          送る
        </Button>
      </Form>
    </CommentForm>
  );
};
