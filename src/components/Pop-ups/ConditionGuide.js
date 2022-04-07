import * as React from "react";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";
import GradeTabs from "./GradeTabs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
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
        label="Condition Guidelines"
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
          <GradeTabs />
        </Box>
      </Modal>
    </div>
  );
}
