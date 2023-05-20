"use client"

import React from "react"
import NextLink from "next/link"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import TextSnippetIcon from "@mui/icons-material/TextSnippet"

const AccountList = (): JSX.Element => (
  <>
    <ul className="flex justify-center align-middle">
      <li>
        <NextLink href="https://github.com/takoba">
          <GitHubIcon />
        </NextLink>
      </li>
      <li>
        <NextLink href="https://twtter.com/takoba_">
          <TwitterIcon />
        </NextLink>
      </li>
      <li>
        <NextLink href="https://scrapbox.io/takoba/">
          <TextSnippetIcon />
        </NextLink>
      </li>
    </ul>
  </>
)
export default AccountList
