import { Button, Card, Stack, TextField } from '@mui/material'
import React from 'react'
import style from './addprivacy.module.css'
const AddPrivacy = () => {
  return (
    <div className={style.main}>
        <Card className={style.Privacycard}>
            <Stack direction={'row'} gap={4}>

        <TextField id="standard-basic" label="Privacy Policy" variant="standard"  fullWidth/>
        <Button variant="contained" sx={{px:6}}>Save</Button>
            </Stack>
        </Card>
    </div>
  )
}

export default AddPrivacy