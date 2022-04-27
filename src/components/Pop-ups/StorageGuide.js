import * as React from "react";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "80vw",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Chip
        variant="outlined"
        color="primary"
        size="small"
        icon={<InfoIcon />}
        label="How to check storage info?"
        onClick={handleOpen}
        sx={{ borderRadius: 0, border: 0 }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4 id="modal-modal-title">
            {<AppleIcon />}
            For Apple Products
          </h4>
          <p id="modal-modal-description">
            1. Go to Settings App. <br></br> 2. Go to General {">"} About{" "}
            <br></br>3. The device model, capacity and carrier will display in
            the list.
          </p>
          <h4 id="modal-modal-title">
            {<AdbIcon color="success" />}For Android Phones
          </h4>
          <p id="modal-modal-description">
            1. Go to Settings App. <br></br> 2. Go to Storage {">"} About{" "}
            <br></br>3. The capacity will be listed
          </p>
        </Box>
      </Modal>
    </div>
  );
}
