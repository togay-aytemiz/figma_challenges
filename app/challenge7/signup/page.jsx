import Image from "next/image";
import React from "react";
import {
  UserIcon,
  LockClosedIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { styles } from "@/app/components/ch7/styles";
import Input from "@/app/components/ch7/Input";

const page = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-5 items-center ">
          <Image
            src="/ch7/signupbg.png"
            height={1024}
            width={989}
            className=" col-span-3 h-[100vh] object-cover"
          />
          <div className="col-span-2 mx-12 max-w-[420px]">
            <form className=" flex gap-5 flex-col">
              <h1 className={styles.header}>Sign Up</h1>
              <Input icon={UserIcon} placeholder={"Username"} />
              <Input icon={EnvelopeIcon} placeholder={"Email"} />
              <Input icon={PhoneIcon} placeholder={"Phone Number"} />
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
                <button>Sign Up</button>
              </Link>
              <p className="mt-10">Do you have an account?</p>
              <Link href="/challenge7" className={styles.secondaryButton}>
                <button>Log In</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
