import "./ModalStatus.css";
import { memo, useState } from "react";
import { Modal } from "antd";
import { useBattery } from "@uidotdev/usehooks";
import { BatteryChargingIcon, BatteryIcon } from "lucide-react";

const ModalStatus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bat = useBattery();
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
    <>
      <div
        onClick={showModal}
        className="size-12 cursor-pointer z-50 fixed bottom-20 md:bottom-10 right-6 md:right-10 bg-mainColor rounded-full flex items-center justify-center "
      >
        {bat.charging ? <BatteryChargingIcon /> : <BatteryIcon />}
      </div>
      <Modal
        title="Battery Status"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        centered={true}
        zIndex={100}
      >
        {bat.charging ? (
          <div className='my-5 text-center flex flex-col items-center gap-5 justify-center'>
            <BatteryChargingIcon size={56} />
            <p className='text-xl md:text-3xl font-semibold'>Battery is charging</p>
          </div>
        ) : (
          <div className='my-5 text-center flex flex-col items-center gap-5 justify-center'>
            <BatteryIcon size={56} />
            <p className='text-xl md:text-3xl font-semibold'>Battery is not charging</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default memo(ModalStatus);
