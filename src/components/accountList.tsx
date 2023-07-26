import React from "react"
import NextLink from "next/link"
import { FaGithub, FaTwitter } from "react-icons/fa"
import ScrapboxIcon from "@/components/scrapboxIcon"
import { css } from "@kuma-ui/core"

const liSpacingStyle = css`
  margin: auto 0.5vw;
`

const AccountList = (): JSX.Element => (
  <>
    <ul className="flex justify-center align-middle">
      <li className={`p-1 ${liSpacingStyle}`}>
        <NextLink href="https://github.com/takoba">
          <FaGithub size="8vw" />
        </NextLink>
      </li>
      <li className={`p-1 ${liSpacingStyle}`}>
        <NextLink href="https://twitter.com/takoba_">
          <FaTwitter size="8vw" />
        </NextLink>
      </li>
      {/* アイコンが縦長なので、視覚調整としてpadding修正 */}
      <li className={`p-1 pl-0.5 pr-0.5 ${liSpacingStyle}`}>
        <NextLink href="https://scrapbox.io/takoba/">
          <ScrapboxIcon size="8vw" />
        </NextLink>
      </li>
    </ul>
  </>
)
export default AccountList
