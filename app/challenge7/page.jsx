import Image from "next/image";
import React from "react";
import Input from "../components/ch7/Input";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { styles } from "../components/ch7/styles";

const page = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-5 items-center ">
          <Image
            src="/ch7/signinbg.png"
            height={1024}
            width={989}
            className=" col-span-3 h-[100vh] object-cover"
          />
          <div className="col-span-2 mx-12 max-w-[420px]">
            <form className=" flex gap-5 flex-col">
              <h1 className={styles.header}>Sign In</h1>
              <Input icon={UserIcon} placeholder={"Username"} />
              <Input icon={LockClosedIcon} placeholder={"Password"} />
              <div className="flex gap-1 items-center mb-2">
                <input
                  type="checkbox"
                  name=""
                  id="concents"
                  className="mr-2 h-[20px] w-[20px]"
                />
                <label htmlFor="concents">
                  I agree{" "}
                  <span className="font-bold">
                    Terms and Conditions & Private Policy
                  </span>{" "}
                  by Signing in
                </label>
              </div>
              <Link
                href="/challenge7/farmanalytics"
                className={styles.primaryButton}
              >
                <button>Log In</button>
              </Link>
              <p className="mt-10">If you don't have an account...</p>
              <Link
                href="/challenge7/signup"
                className={styles.secondaryButton}
              >
                <button>Sign Up</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
