import { Footer } from "flowbite-react"
import { MdFacebook } from "react-icons/md";
import { FaDribbble, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import type { FC } from 'react'

const VriteFooter:FC = function() {
  return  <div>
  <Footer container className=" ">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 gap-y-6  lg:flex-row lg:justify-between lg:gap-y-0">
      <Footer.LinkGroup>
        <Footer.Link href="#" className="mr-3 mb-3 lg:mb-0">
          Terms and conditions
        </Footer.Link>
        <Footer.Link href="#" className="mr-3 mb-3 lg:mb-0">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
      <Footer.LinkGroup>
        <div className="flex gap-x-1">
          <Footer.Link
            href="#"
            className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
          >
            <MdFacebook className="text-lg" />
          </Footer.Link>
          <Footer.Link
            href="#"
            className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
          >
            <FaInstagram className="text-lg" />
          </Footer.Link>
          <Footer.Link
            href="#"
            className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
          >
            <FaTwitter className="text-lg" />
          </Footer.Link>
          <Footer.Link
            href="#"
            className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
          >
            <FaGithub className="text-lg" />
          </Footer.Link>
          <Footer.Link
            href="#"
            className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
          >
            <FaDribbble className="text-lg" />
          </Footer.Link>
        </div>
      </Footer.LinkGroup>
    </div>
  </Footer>
  <p className="my-8 text-center text-sm text-gray-500 dark:text-gray-300">
    &copy; 2023 vRite.com All rights reserved.
  </p>
</div>
}

export {VriteFooter}