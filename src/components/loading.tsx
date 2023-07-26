import React from "react"
import { css, styled } from "@kuma-ui/core"

const BackdropContainer = styled("div")`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  z-index: 1201;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const backdropOpenStyle = css`
  opacity: 1;
`
const backdropCloseStyle = css`
  opacity: 0;
  visibility: hidden;
`
type BackdropProps = {
  open?: boolean
}
const Backdrop = ({
  children,
  open,
}: React.PropsWithChildren<BackdropProps>): JSX.Element => (
  <BackdropContainer className={open ? backdropOpenStyle : backdropCloseStyle}>
    {children}
  </BackdropContainer>
)

const LoadingIconContainer = styled("div")`
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;

  @keyframes rotate-left {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes rotate-right {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const LoadingIconKeyframe = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
  opacity: .8;
`
const LoadingIcon = (): JSX.Element => (
  <LoadingIconContainer>
    <LoadingIconKeyframe
      className={css`
      border-top: 1px solid #8FB259;
      animation: rotate-left 1s linear infinite;
    `}
    ></LoadingIconKeyframe>
    <LoadingIconKeyframe
      className={css`
      border-right: 1px solid #CCCC52;
      animation: rotate-right 1s linear infinite;
    `}
    ></LoadingIconKeyframe>
    <LoadingIconKeyframe
      className={css`
      border-bottom: 1px solid #FFD933;
      animation: rotate-right 1s linear infinite;
    `}
    ></LoadingIconKeyframe>
    <LoadingIconKeyframe
      className={css`
      border-left: 1px solid #FF7F00;
      animation: rotate-right 1s linear infinite;
    `}
    ></LoadingIconKeyframe>
  </LoadingIconContainer>
)

type Props = {
  is?: boolean
}
const Loading = ({ is }: Props): JSX.Element => (
  <Backdrop open={is ?? true}>
    <LoadingIcon />
  </Backdrop>
)
export default Loading
