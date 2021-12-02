import React from "react";
import styled from "styled-components";
import { Form, Input } from "antd";
import CustomButton from "./common/customButton";

const InputWrap = styled(Input)`
  height: 50px;
`;

const NewPost = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="row-container">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          labelCol={{
            span: 24,
          }}
        >
          <InputWrap placeholder="Enter title" />
        </Form.Item>

        <Form.Item
          label="Image Url"
          name="image_url"
          labelCol={{
            span: 24,
          }}
        >
          <InputWrap placeholder="Enter Image Url" />
        </Form.Item>

        <Form.Item>
          <CustomButton type="primary" htmlType="submit">
            Submit
          </CustomButton>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewPost;
