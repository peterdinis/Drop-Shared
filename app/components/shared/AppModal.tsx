import { FC, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { SvgIcon, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@/components/ui/button";
import Typography from "@mui/material/Typography";
import { IAppModalProps } from "@/app/types/modalTypes";
import {style} from "./style";

const AppModal: FC<IAppModalProps> = ({
  children,
  icon,
  btnName,
  tooltipName,
  headerName,
}: IAppModalProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip title={tooltipName}>
        <Button variant={"ghost"} size="sm" onClick={handleOpen}>
          {" "}
          <SvgIcon children={icon} />
          {btnName}
        </Button>
      </Tooltip>
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
