import React from "react";
import LandingBackground from "../Images/landingBack.png";
import GoogleIco from "../Images/Icons/google.png";

const Landing = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="flex flex-row flex-grow ">
        <div
          className="flex flex-col justify-center bg-cover bg-no-repeat bg-center w-full max-[1024px]:hidden"
          style={{
            backgroundImage: `url(${LandingBackground})`,
          }}
        >
          <div className="flex flex-col justify-center max-h-[380px] max-w-[100%]">
            <svg
              width="auto"
              height="50%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M23.643 2.70502C22.808 3.07502 21.911 3.32502 20.968 3.43802C21.93 2.86202 22.668 1.94802 23.016 0.860023C22.116 1.39402 21.119 1.78202 20.058 1.99002C19.208 1.08602 17.998 0.52002 16.658 0.52002C14.086 0.52002 12 2.60602 12 5.18002C12 5.54402 12.042 5.89802 12.12 6.24002C8.24701 6.04502 4.81601 4.19002 2.51801 1.37202C2.11801 2.06202 1.88801 2.86202 1.88801 3.71402C1.88801 5.33002 2.71101 6.75702 3.96001 7.59202C3.19601 7.56702 2.47801 7.35802 1.85001 7.00902V7.06902C1.85001 9.32602 3.45501 11.209 5.58701 11.637C5.19501 11.743 4.78401 11.799 4.36001 11.799C4.06001 11.799 3.76701 11.771 3.48301 11.717C4.07601 13.567 5.79601 14.915 7.83501 14.951C6.24001 16.201 4.23101 16.946 2.04901 16.946C1.67301 16.946 1.30201 16.924 0.937012 16.881C2.99901 18.204 5.44701 18.974 8.07701 18.974C16.647 18.974 21.332 11.876 21.332 5.72002C21.332 5.52002 21.327 5.31802 21.318 5.11802C22.228 4.46002 23.018 3.64102 23.641 2.70802L23.643 2.70502Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col flex-grow justify-center min-w-[750px] gap-5 pl-[2%] text-left max-[1024px]:items-center max-[1024px]:p-[5%]">
          <div id="logo">
            {" "}
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
          <h1 className="font-black text-[84px]/[98.44px] max-[1024px]:text-6xl">
            Happening now
          </h1>
          <h2 className="font-black text-[42px]/[49.22px]">
            Join Twitter today
          </h2>
          <a className="flex flex-shrink-0 items-center gap-1 justify-center max-h-[52px] min-w-[139px] w-[403px] pt-[22px] pb-[15px] px-[70px] rounded-[42px] border border-[#E4EAED] font-medium text-xl">
            <img src={GoogleIco} />
            Sign up with Google
          </a>
          <a className="flex flex-shrink-0 items-center gap-1 justify-center max-h-[52px] min-w-[139px] w-[403px] pt-[22px] pb-[15px] px-[70px] rounded-[42px] border border-[#E4EAED] font-medium text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              overflow="visible"
              viewBox="0 0 857.52942 999.99992"
            >
              <g
                fill-rule="evenodd"
                clip-rule="evenodd"
                transform="translate(3e-8 -.00025013) scale(.85753)"
              >
                <path
                  fill="#61bb46"
                  stroke="#61bb46"
                  stroke-miterlimit="2.61310005"
                  stroke-width="6.28089046"
                  d="M54.232461 423.0098c.348572-.57566.718141-1.14287 1.087711-1.69954C115.05402 328.95469 209.27966 274.90015 297.88826 274.90015c90.22756 0 146.94605 49.66861 221.52778 49.66861 72.36642 0 116.44394-49.74031 220.75925-49.74031 78.81501 0 162.37771 43.09815 221.89737 117.62109-16.45637 9.05021-31.30215 19.32551-44.57099 30.6193l-863.269209-.0589z"
                />
                <path
                  fill="#61bb46"
                  stroke="#61bb46"
                  stroke-miterlimit="2.61310005"
                  stroke-width="6.28089046"
                  d="M661.04954 191.61588c37.86412-48.83359 66.66537-117.78556 56.22711-188.28314-61.90716 4.26153-134.31558 43.84038-176.60824 95.36246-38.37648 46.8051-70.05869 116.22095-57.7243 183.65049 67.5872 2.11073 137.50311-38.41488 178.10543-90.72981z"
                />
                <path
                  fill="#fdb827"
                  d="M51.151054 421.64891C25.42683 462.11947 7.6276563 520.12542 2.9042342 571.00351l834.5498858-.0215c9.02332-55.66242 39.02667-108.84145 86.58225-149.27157l-872.885316-.0615h.04925z"
                />
                <path
                  fill="#f5821f"
                  stroke="#f5821f"
                  stroke-miterlimit="2.61310005"
                  stroke-width="6.28089046"
                  d="M10.482518 719.0309c-8.1095407-51.96489-9.4219338-102.06365-4.3277482-148.02531l828.0487802-.0213c-8.09905 49.84363-1.30189 101.71362 19.18405 148.07802l-842.905082-.0317z"
                />
                <path
                  fill="#e03a3e"
                  stroke="#e03a3e"
                  stroke-miterlimit="2.61310005"
                  stroke-width="6.28089046"
                  d="M50.950428 867.04567c-19.55361-49.72976-32.942121-99.67671-40.46791-148.01477l842.905082.0317c26.09457 59.07939 74.38644 109.27093 142.38522 135.06361-2.02003 4.51035-3.96868 8.82458-5.84383 12.98278l-938.978562-.0632z"
                />
                <path
                  fill="#963d97"
                  stroke="#963d97"
                  stroke-miterlimit="2.61310005"
                  stroke-width="6.28089046"
                  d="M989.9269 867.10682c-23.34591 51.54106-36.8793 78.29106-69.18727 127.67077-4.34665 6.63161-8.83819 13.41511-13.51452 20.26181l-778.04344.072c-2.4925-3.7281-4.9619-7.454-7.3935-11.1504-29.088937-44.49017-52.638522-90.61629-70.837742-136.91744l938.976472.0632z"
                />
                <path
                  fill="#009ddc"
                  stroke="#009ddc"
                  stroke-miterlimit="2.61310005"
                  stroke-width="6.28089046"
                  d="M907.22511 1015.0394c-47.59473 70.0126-111.49253 147.0574-189.02664 147.7891-75.65684.6895-95.06557-49.4409-197.70942-48.8758-102.64386.5757-124.07261 49.7509-199.72945 49.0403-80.88753-.7507-143.69762-76.4165-191.57793-147.8819l778.04344-.072z"
                />
              </g>
            </svg>
            Sign up with Apple
          </a>
          <a className="flex flex-shrink-0 items-center gap-1 justify-center max-h-[52px] min-w-[139px] w-[403px] pt-[20px] pb-[19px] px-[70px] rounded-[42px] border border-[#E4EAED] font-medium text-xl">
            Sign up with phone or email
          </a>
          <span className="w-[372px]">
            By singing up you agree to the{" "}
            <a href="/" className="text-[#1E97E1]">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/" className="text-[#1E97E1]">
              Privacy Policy
            </a>{" "}
            including{" "}
            <a href="/" className="text-[#1E97E1]">
              Cookie Use
            </a>
            .
          </span>
          <span>
            Already have an account?{" "}
            <a href="/" className="text-[#1E97E1]">
              Log in
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-col basis-auto shrink-0 box-border">
        <nav className="flex flex-row flex-wrap flex-shrink-0 justify-center basis-auto items-stretch gap-2 py-4 text-[13px]">
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            About
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Help Center
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Terms of Service
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Privacy Policy
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Cookie Policy
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Ads info
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Blog
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Status
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Carrres
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Brand Resources
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Advertsing
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Marketing
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Twitter for Business
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Developers
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Directory
          </a>
          <a className="box-border block mb-1 mt-1 pr-4" href="/">
            Settings
          </a>
          <span className="box-border block mb-1 mt-1 pr-4">
            © 2023 Twitter, Inc.
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Landing;
