import React from "react";
import { Image as AntdImage } from "antd";
const MyImage = ({ style = {}, image = {}, quality = "md", ...props }) => {
  return (
    <AntdImage
      width={"100%"}
      src={image ? image[quality] : "error"}
      {...props}
      style={{
        ...style,
        width: style.width,
      }}
      preview={props.preview ? {} : false}
    />
  );
};

export default MyImage;
