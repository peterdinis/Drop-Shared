import { FC, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { SvgIcon } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@/components/ui/button";
import Typography from "@mui/material/Typography";
import { IAppModalProps } from "@/app/types/modalTypes";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AppModal: FC<IAppModalProps> = ({
  children,
  icon,
  btnName,
  headerName,
}: IAppModalProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant={"ghost"} size="sm" onClick={handleOpen}>
        {" "}
        <SvgIcon children={icon} />
        {btnName}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {headerName}
            </Typography>
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AppModal;
