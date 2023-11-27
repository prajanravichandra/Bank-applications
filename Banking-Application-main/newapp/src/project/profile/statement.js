import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container,Box } from '@mui/material';
import MiniDrawer from './maindash';

// Generate Order Data
function createData(id, date, name, Amount, totalAmount) {
  return { id, date, name, Amount,totalAmount };
}

const rows = [
  createData(
    1,
    '16 Mar, 2019',
    'Debits',
    500,
    4500
  ),
  createData(
    2,
    '18 Mar, 2019',
    'Credits',
    500,
    5000
  ),
  createData(
    3,
    '21 Mar, 2019',
    'Credits',
    5000,
    9500
  ),
  createData(
    4,
    '16 Mar, 2019',
    'Credits',
    500,
    10000
  ),
  createData(
    5,
    '16 Mar, 2019',
    'Debits',
    4000,
    9000
  ),
  
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <div>
        <MiniDrawer/>
    <section style={{ backgroundColor: 'white' }}>
      <Container style={{
          backgroundColor: "#fffb",
          backdropFilter: "blur(12px)",
          position: "absolute",
          top: "70%",
          left: "53%",
          transform: "translate(-50%,-50%)",
          borderColor:'black',
          // marginTop:"120px"
        }}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h1>Statements</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Process</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell >TotalBalance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.Amount}</TableCell>
              <TableCell >Rs.{row.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
        </Box>
      </Container>
    </section>
    </div>
  );
}