import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[5%]">
      <div>
        <div>
          <svg
            width="50px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M23.643 2.70502C22.808 3.07502 21.911 3.32502 20.968 3.43802C21.93 2.86202 22.668 1.94802 23.016 0.860023C22.116 1.39402 21.119 1.78202 20.058 1.99002C19.208 1.08602 17.998 0.52002 16.658 0.52002C14.086 0.52002 12 2.60602 12 5.18002C12 5.54402 12.042 5.89802 12.12 6.24002C8.24701 6.04502 4.81601 4.19002 2.51801 1.37202C2.11801 2.06202 1.88801 2.86202 1.88801 3.71402C1.88801 5.33002 2.71101 6.75702 3.96001 7.59202C3.19601 7.56702 2.47801 7.35802 1.85001 7.00902V7.06902C1.85001 9.32602 3.45501 11.209 5.58701 11.637C5.19501 11.743 4.78401 11.799 4.36001 11.799C4.06001 11.799 3.76701 11.771 3.48301 11.717C4.07601 13.567 5.79601 14.915 7.83501 14.951C6.24001 16.201 4.23101 16.946 2.04901 16.946C1.67301 16.946 1.30201 16.924 0.937012 16.881C2.99901 18.204 5.44701 18.974 8.07701 18.974C16.647 18.974 21.332 11.876 21.332 5.72002C21.332 5.52002 21.327 5.31802 21.318 5.11802C22.228 4.46002 23.018 3.64102 23.641 2.70802L23.643 2.70502Z"
              fill="#1D9BF0"
            />
          </svg>
        </div>
        <h1 className="text-[42px]/[49.22px] font-black py-[36px]">
          Log in to Twitter
        </h1>
        <div>
          <form className="flex flex-col justify-center">
            <input
              className="border rounded-md border-[#00000033] py-5 pl-[23px]"
              type="text"
              placeholder="Phone number, email address"
            />
            <input
              className="border rounded-md border-[#00000033] py-5 pl-[23px] mt-[25px]"
              type="password"
              placeholder="Password"
            />
            <input
              className="bg-[#1DA1F2] text-white font-bold rounded-[76px] py-[18px] px-[200px] mt-[25px]"
              type="submit"
              value="Log In"
            />
          </form>
        </div>
        <div className="flex flex-row justify-between gap-3 text-[#1DA1F2] pt-10">
          <span>Forgot password?</span>
          <span>Sign up to Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
