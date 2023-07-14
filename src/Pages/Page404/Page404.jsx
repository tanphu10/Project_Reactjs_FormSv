import React from "react";
import Lottie from "react-lottie";
import * as animation404 from "../../assets/animation/54613-error-404.json";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
const Page404 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Lottie options={defaultOptions} height={500} width={700} />
      <NavLink  to="/">
        <Button type="primary" danger>
          Quay về trang chủ
        </Button>
      </NavLink>
    </div>
  );
};

export default Page404;
