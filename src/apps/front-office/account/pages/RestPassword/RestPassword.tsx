"use client";

import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import PasswordInput from "src/apps/front-office/design-system/components/form/PasswordInput";
import { Button } from "src/apps/front-office/design-system/components/ui/button";
import Breadcrumb from "src/apps/front-office/design-system/layouts/Breadcrumb";
import URLS from "src/apps/front-office/utils/urls";

export default function RestPassword() {
  return (
    <section className="w-full text-secondary">
      <Helmet title={trans("reset-password.title")} />
      <div className="breadcrumb relative">
        <div className="absolute w-full border-b-2 border-b-gray-200 top-full"></div>
        <div className="nav-links w-full">
          <Breadcrumb
            navItems={[
              { name: "Pages" },
              { name: "My Account", url: URLS.account.resetPassword },
            ]}
            attributes={{
              className: "justify-end items-end py-4 my-0",
            }}
          />
        </div>
      </div>

      <div className="py-[150px] w-full flex justify-center">
        <div className="">
          <img
            className=""
            src="https://nest-frontend-v6.netlify.app/assets/imgs/page/reset_password.svg"
            alt=""
          />
          <h2 className="text-[40px] font-bold my-[15px]">Set new password</h2>
          <p className="text-[16px] mb-[30px]">
            Please create a new password that you don’t use on any other site.
          </p>

          <div className="text-[16px] flex justify-between ">
            <Form className="flex flex-col items-center px-[12px] gap-[1rem]">
              <PasswordInput
                name="Password"
                placeholder="Password*"
                className="w-[380px]"
              />
              <PasswordInput
                name="ConfirmPw"
                placeholder="Confirm your password*"
                className="w-[380px]"
              />
              <div className="text-start w-full">
                <Button className="w-[210px] text-start">Reset Password</Button>
              </div>
            </Form>

            <div className="pr-[12px] pl-[50px]">
              <h6 className="mb-[15px] font-semibold">Password must:</h6>
              <p className="mb-[5px]">Be between 9 and 64 characters</p>
              <p className="mb-[5px]">Include at least tow of the following:</p>
              <ul className="list-disc pl-[19px]">
                <li>An uppercase character</li>
                <li>A lowercase character</li>
                <li>A number</li>
                <li>A special character</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
