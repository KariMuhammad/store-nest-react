import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { Link } from "@mongez/react-router";
import { Button } from "src/apps/front-office/design-system/components/ui/button";
import Footer from "src/apps/front-office/design-system/layouts/Footer";
import Header from "src/apps/front-office/design-system/layouts/Header";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import CheckBoxInput from "../components/checkBoxInput";
import BaseLayout from "src/apps/front-office/design-system/layouts/BaseLayout";
import Helmet from "@mongez/react-helmet";
import URLS from "src/apps/front-office/utils/urls";
import { useLogin } from "../../../hooks";

export default function LoginPage() {
  const handleSubmit = useLogin();

  return (
    <>
      <Helmet title={trans("login")} />
      <BaseLayout>
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-[900px] flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden">
          {/* Image (hidden on small screens) */}
          <div className="hidden lg:block w-1/2">
            <img
              className="h-full w-full object-contain rounded-[15px]"
              src="/images/login/login-1.png"
              alt="Woman working on laptop"
            />
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2 p-8">
            <h1 className="text-6xl text-mainColor font-semibold mb-4">
              {trans("login")}
            </h1>
            <p className="text-base text-[#7E7E7E] font-normal leading-6 mb-5">
              {trans("register")}
              <Link
                to={`/register`}
                className="cursor-pointer text-priceNowColor font-semibold duration-300 hover:text-[#FDC040] ml-1">
                {trans("createHere")}
              </Link>
            </p>

            <Form className="space-y-4" onSubmit={handleSubmit}>
              <EmailInput
                name="email"
                className="w-full px-4 py-2 border border-rateColor rounded-lg focus:outline-none focus:border-priceNowColor h-16"
                placeholder={trans("email")}
                required
                minLength={14}
              />
              <PasswordInput
                name="password"
                className="w-full px-4 py-2 border border-rateColor rounded-lg focus:outline-none focus:border-priceNowColor h-16"
                placeholder={trans("password")}
                required
                minLength={6}
                maxLength={16}
              />
              <div className="flex items-center justify-between !mb-[50px]">
                <label className="flex items-center text-sm ">
                  <CheckBoxInput name="rememberMe" />
                  <span className="text-sm !ml-2">{trans("rememberMe")}</span>
                </label>
                <Link
                  to={URLS.auth.forgetPassword}
                  className="text-sm cursor-pointer text-rateColor font-semibold duration-300">
                  {trans("forgetPassword")}
                </Link>
              </div>
              <Button className="bg-mainColor hover:bg-primary text-white !px-10 !py-[15px]">
                {trans("loginButton")}
              </Button>
            </Form>
          </div>
        </div>
      </div>
      </BaseLayout>
    </>
  );
}
