import React from 'react'
import 'antd/dist/antd.css';
import { Alert } from 'antd';

const Alerts = (props) => {
  return (
    <div>
      <Alert
      description={props.message}
      type="error"
      showIcon
      closable
    />
    </div>
  )
}

export default Alerts