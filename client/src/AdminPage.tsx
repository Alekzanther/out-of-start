import React from "react"

import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"

import { useQuery } from "urql"

import "./App.css"
import { AdminOrdersQuery, AdminOrder, ADMIN_ORDERS } from "./api/orderApi"
import { AdminOrderRow } from "./components/AdminOrderRow"
import {
  ConfirmationResultState,
  ConfirmationResultStatus,
} from "./components/ConfirmationResultStatus"
import { sendConfirmationToApi } from "./api/confirmationApi"

export const AdminPage = () => {
  const [result, refetchOrder] = useQuery<AdminOrdersQuery>({
    query: ADMIN_ORDERS,
  })
  const [state, setState] = React.useState<ConfirmationResultState>({
    kind: "idle",
  })

  const sendOrderConfirmation = async (order: AdminOrder) => {
    setState({ kind: "loading", orderId: order.id })
    const result = await sendConfirmationToApi(order.id)
    setState({ kind: "done", result })
  }

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (!data || error) return <p>Oh no... {error?.message}</p>

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />

      <Box paddingTop={4}>
        <Box height="40px" marginBottom={2}>
          <ConfirmationResultStatus state={state} />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Delivery date</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.orders.map((order) => (
                <AdminOrderRow
                  key={order.id}
                  order={order}
                  sendOrderConfirmation={sendOrderConfirmation}
                  confirmationPending={
                    state.kind === "loading" && order.id === state.orderId
                  }
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}
