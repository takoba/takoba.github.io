import React from "react"
import { Backdrop, CircularProgress } from "@mui/material"

type Props = {
  is?: boolean
}
const Loading = ({ is }: Props): JSX.Element => (
  <Backdrop open={is ?? true}>
    <CircularProgress color="inherit" />
  </Backdrop>
)
export default Loading
