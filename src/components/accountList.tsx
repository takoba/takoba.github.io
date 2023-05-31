"use client"

import React from "react"
import NextLink from "next/link"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import ScrapboxIcon from "@/components/scrapboxIcon"

const AccountList = (): JSX.Element => (
  <>
    <ul className="flex justify-center align-middle">
      <li className="p-1">
        <NextLink href="https://github.com/takoba">
          <GitHubIcon fontSize="large" />
        </NextLink>
      </li>
      <li className="p-1">
        <NextLink href="https://twitter.com/takoba_">
          <TwitterIcon fontSize="large" />
        </NextLink>
      </li>
      {/* アイコンが縦長なので、視覚調整としてpadding修正 */}
      <li className="p-1 pl-0.5 pr-0.5">
        <NextLink href="https://scrapbox.io/takoba/">
          <ScrapboxIcon size="large" />
        </NextLink>
      </li>
    </ul>
  </>
)
export default AccountList
