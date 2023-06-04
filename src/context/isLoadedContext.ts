import React, { Dispatch, createContext } from "react"

const IsLoadedContext = createContext<boolean>(false)
const SetIsLoadedContext = createContext<
  Dispatch<React.SetStateAction<boolean>>
>(() => undefined)

export { IsLoadedContext, SetIsLoadedContext }
