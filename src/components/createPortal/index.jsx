import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './index.scss';
import { useEffect } from 'react';
const Modal = ({ visible, onClose }) => {
  const [show, setShow] = useState(visible);
  // console.log('visible', visible);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  return ReactDOM.createPortal(
    show && (
      <>
        <div className='modal-mask'> </div>
        <div className='modal-wrap'>
          <div className='modal-content'>
            可以看到Modal组件所在位置为body标签内，而不是引用组件的地方
          </div>
          <div className='modal-close' onClick={onClose}>
            X
          </div>
        </div>
      </>
    ),
    document.body
  );
};

const CreatePortal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='component'>
      <h2>这个例子演示react.createProtal的使用</h2>
      <p>react.createProtal在Modal这样的弹框组件使用较为广泛</p>
      <button onClick={() => setVisible(true)}>打开Modal</button>
      <Modal visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
};

export default CreatePortal;
