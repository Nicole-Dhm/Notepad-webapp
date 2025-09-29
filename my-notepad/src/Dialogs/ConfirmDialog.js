import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";

//This is a reusable component, title and Input can be customized, probably will need more confirms later anyway
export default function ConfirmDialog({open, onClose, onConfirm, title, input}) {
    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle><strong>{title || 'Confirm Selection'}</strong></DialogTitle>
            <DialogContent>{input || 'Are you sure you want confirm? These may be irreversible changes!'}</DialogContent>
            <DialogActions>
                <Button onClick={onClose}> <strong>Cancel</strong></Button>
                <Button onClick= {()=>{ onConfirm(); onClose() }}><strong>Confirm</strong></Button>
            </DialogActions>
        </Dialog>
    )
}