import React from "react";
import Link from "next/link";
import { Space } from "antd";
import { Container } from "./style";
import MyImage from "../../common/img";
import Navbar from "./navbar";

const Header = () => {
  return (
    <Container>
      <div className="navbar-container">
        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Link href="/" passHref>
            <a>
              <MyImage
                src="/static/logo.png"
                alt="logo"
                width={46}
                height={46}
              />
            </a>
          </Link>
          <Navbar />
        </Space>
      </div>
    </Container>
  );
};

export default Header;
