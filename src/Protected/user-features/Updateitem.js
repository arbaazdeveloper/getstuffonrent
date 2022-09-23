import React, { useState } from 'react';

import { Button, Modal} from 'antd';
import { useRef } from 'react';

const Updateitem = (props) => {
  const {reff}=props
  const ref=useRef(reff)
  const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
   
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>


      
    </div>
  )
}

export default Updateitem