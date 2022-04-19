import React, { useState} from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };


const FlashMessage = ({ message }) =>{

    const [open, setOpen] = useState(true);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return(
        <div>
             <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Obrigado por contactar o Arsenio.
                </Alert>
            </Snackbar>
        </div>
    )

}

export default FlashMessage;