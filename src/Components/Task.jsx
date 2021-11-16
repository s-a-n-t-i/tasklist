import {Button, Card, CardContent, Dialog, DialogActions, DialogContent} from "@mui/material";
import {useState} from "react";

export const Task = ({id, title}) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  const renderDetailsDialog = () =>
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth={true}>
      <DialogContent>
        <h2>Task #{id} - {title}</h2>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Complete</Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>

  return (
    <>
      {renderDetailsDialog()}
      <Card sx={{minWidth: 250}} onClick={() => setOpen(true)} className="task">
        <CardContent>
          <p>Task #{id}</p>
          <p>{title}</p>
        </CardContent>
      </Card>
    </>
  )
}