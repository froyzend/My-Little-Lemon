import { useState } from "react";
import { Modal as BaseModal } from "@mui/base/Modal";
import styles from "./ModalExample.module.css";

const ModalExample = ({ onConfirm }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  return (
    <div className={styles.btnContainer}>
      <button className={styles.triggerButton} onClick={handleOpen}>
        Confirm your order
      </button>
      <BaseModal
        open={open}
        onClose={handleClose}
        slots={{
          backdrop: ({ open, ...props }) => (
            <div
              className={styles.styledBackdrop}
              style={{ display: open ? "block" : "none" }}
              {...props}
            />
          ),
        }}
      >
        <div className={styles.modalContent}>
          <h2 style={{ fontSize: "1.5rem", margin: "0 0 16px" }}>
            Confirm your order
          </h2>
          <p style={{ fontSize: "1rem", color: "#666" }}>
            Please confirm your action. This cannot be undone.
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.triggerButton} ${styles.confirmButton}`}
              onClick={handleConfirm}
            >
              Confirm
            </button>
            <button
              className={`${styles.triggerButton} ${styles.cancelButton}`}
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </BaseModal>
    </div>
  );
};

export default ModalExample;
