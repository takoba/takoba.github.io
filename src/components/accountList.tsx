import React from "react"
import NextLink from "next/link"
import { FaGithub, FaTwitter } from "react-icons/fa"
import ScrapboxIcon from "@/components/scrapboxIcon"

const AccountList = (): JSX.Element => (
  <>
    <ul className="flex justify-center align-middle">
      <li className="p-1">
        <NextLink href="https://github.com/takoba">
          <FaGithub size="34px" />
        </NextLink>
      </li>
      <li className="p-1">
        <NextLink href="https://twitter.com/takoba_">
          <FaTwitter size="34px" />
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
