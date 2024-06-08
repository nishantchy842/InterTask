import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { ReactNode } from "react";

function CustomSpinner({
  spinning,
  children,
}: {
  spinning: boolean;
  children: ReactNode;
}) {
  return (
    <Spin
      spinning={spinning}
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 24,
          }}
          spin
        />
      }
    >
      {children}
    </Spin>
  );
}

export default CustomSpinner;
