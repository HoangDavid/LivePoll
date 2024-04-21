import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import {Box, Button} from '@mui/material'
import { useState } from 'react';

function createData(
    no: number,
    name: string,
    quantity: number,
    dateAdded: string,
    expiresIn: number
  ) {
    return { no, name, quantity, dateAdded, expiresIn };
  }

function FridgeTable() {
    
    const [isAdd, setisAdd] = useState(false)
    const addState = () => setisAdd(true)
    const closeState = () => setisAdd(false)

    const [values, setValues] = useState({
        Name: '',
        Quantity: 0,
        DateAdded: '',
        ExpiresIn: 0
    })

    const handleValueChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    const onSave = () => {
        const newRow = createData(rows.length + 1, values.Name, values.Quantity, values.DateAdded, values.ExpiresIn);
        setRows([...rows, newRow]);
        setValues({ Name: '', Quantity: 0, DateAdded: '', ExpiresIn: 0 }); // Clear input fields after saving
    }

    // limit 14 rows
    const [rows, setRows] = useState([
        createData(1, 'Apples', 2, '04/21/2024', 14),
        createData(2, 'Cooking Oil', 1, '04/21/2024', 100),
        createData(3, 'Carrots', 2, '04/21/2024', 5),
        createData(4, 'Soy Sauce', 1, '04/21/2024', 100),
        createData(5, 'Rice', 5, '04/21/2024', 100)
    ]);

    const AddField = {
        width: '100px',
        textAlign: 'center',
        fontSize: '0.875rem'
    }

    const ButtonHolder = {
        width: '700px',
        textAlign: 'right',
        marginTop: '20px',
    }

    return (
        <>
        <TableContainer component={Paper} sx={{height: '500px'}}>
            <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>No. </TableCell>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>Quantity</TableCell>
                        <TableCell align='center'>Date Added</TableCell>
                        <TableCell align='center'>Expires In</TableCell>
                    </TableRow>
                 </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell align='center'>{row.no}</TableCell>
                        <TableCell align='center'>{row.name}</TableCell>
                        <TableCell align='center'>{row.quantity}</TableCell>
                        <TableCell align='center'>{row.dateAdded}</TableCell>
                        <TableCell align='center'>{row.expiresIn}</TableCell>
                    </TableRow>
                    ))}
                    { isAdd == true ?
                    <TableRow>
                        <TableCell align='center'>{rows.length + 1}</TableCell>

                        <TableCell align='center'>
                            <TextField 
                                id="standard-basic" 
                                variant="standard" 
                                sx={AddField} 
                                name='Name'
                                value={values.Name}
                                onChange={handleValueChange}>
                            </TextField>              
                        </TableCell>

                        <TableCell align='center'>
                            <TextField 
                                id="standard-basic" 
                                variant="standard" 
                                sx={AddField} 
                                name='Quantity'
                                value={values.Quantity}
                                onChange={handleValueChange}>
                            </TextField>
                        </TableCell>

                        <TableCell align='center'>
                            <TextField 
                                id="standard-basic" 
                                variant="standard" 
                                sx={AddField} 
                                name='DateAdded'
                                value={values.DateAdded}
                                onChange={handleValueChange}>
                            </TextField>                        
                        </TableCell>

                        <TableCell align='center'>
                            <TextField 
                                id="standard-basic" 
                                variant="standard" 
                                sx={AddField} 
                                name='ExpiresIn'
                                value={values.ExpiresIn}
                                onChange={handleValueChange}>
                            </TextField>                        
                        </TableCell>
                    </TableRow>
                    : <></>
                    }      
                </TableBody>
            </Table>
        </TableContainer>
        
        <Box sx={ButtonHolder}>
        {isAdd == false ? 
        <Button variant='contained' onClick={addState}> Add Item</Button> : 
        <>
            <Button variant='contained' sx={{backgroundColor: 'green', marginRight:'10px'}} onClick={async() => {onSave(); closeState()}}>Save</Button>
            <Button variant='contained' sx={{backgroundColor: 'red', marginLeft:'10px'}} onClick={closeState}>Cancel</Button>
        </>
        }
    </Box>
    </>
    )
}


export default FridgeTable;