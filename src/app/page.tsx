import Image from "next/image";

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

const html = `
<style>
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: #f37055;
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #f37055, 0 0 5px #f37055;
      opacity: 1;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: #f37055;
      border-left-color: #f37055;
      border-radius: 50%;
      -webkit-animation: nprogresss-spinner 400ms linear infinite;
      animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes nprogress-spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
</style>
<main
    id="to_export"
    data-theme="synthwave"
    style="font-family: '__Nunito_4541b9', '__Nunito_Fallback_4541b9'">
    <header class="bg-base-100">
        <nav
            class="container flex items-center justify-between px-5 py-4 mx-auto"
            aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5 flex gap-2 md:gap-4 items-center"
                    ><span class="sr-only">MAU Coin</span
                    ><img
                        class="object-cover object-center w-12 h-12 rounded-full"
                        alt="Logo"
                        width="64"
                        height="64"
                        style="aspect-ratio: 1"
                        src="https://make-landing.s3.amazonaws.com/6618e7f1b642608baf3ca9db/6618e7f1b642608baf3ca9de/logo_1712908504405.jpeg" />
                    <h2
                        class="font-medium text-lg md:text-xl"
                        style="font-family: var(--font-inter)">
                        MAU Coin
                    </h2>
                </a>
            </div>
            <div class="flex lg:hidden">
                <button
                    type="button"
                    id="open-menu-mobile"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-base-content/90">
                    <span class="sr-only">Open main menu</span
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:justify-end lg:flex-1">
                <div class="flex flex-row justify-center items-center gap-4">
                    <a
                        class="btn btn-primary btn-block"
                        href="https://venomscan.com/accounts/0:d7f3e31982a8000b7d3d613a9e9c3fab79f675b79c3db3825595091ee70b3ffd"
                        >View on VenomScan</a
                    >
                </div>
            </div>
        </nav>
        <div class="relative z-50 hidden" id="menu-mobile">
            <div
                class="fixed inset-y-0 right-0 z-10 w-full px-5 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300">
                <div class="flex items-center justify-between">
                    <a href="#" aria-label="home" class="-m-1.5 p-1.5"
                        ><span class="sr-only">MAU Coin</span
                        ><img
                            class="object-cover object-center w-12 h-12 rounded-full"
                            alt="Logo"
                            width="64"
                            height="64"
                            style="aspect-ratio: 1"
                            src="https://make-landing.s3.amazonaws.com/6618e7f1b642608baf3ca9db/6618e7f1b642608baf3ca9de/logo_1712908504405.jpeg" /></a
                    ><button
                        type="button"
                        id="close-menu-mobile"
                        class="-m-2.5 rounded-md p-2.5 text-base-content/80">
                        <span class="sr-only">Close menu</span
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="flow-root mt-8">
                    <div class="py-4">
                        <div class="flex flex-col gap-y-4 items-start">
                            <a
                                class="btn btn-primary btn-block"
                                href="https://venomscan.com/accounts/0:d7f3e31982a8000b7d3d613a9e9c3fab79f675b79c3db3825595091ee70b3ffd"
                                >View on VenomScan</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="bg-base-100">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
                class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg"
                alt="Hero Image"
                width="576"
                height="512"
                style="aspect-ratio: 1.125"
                src="https://make-landing.s3.amazonaws.com/6618e7f1b642608baf3ca9db/6618e7f1b642608baf3ca9df/headline_1712909196715.jpeg" />
            <div class="text-center lg:w-2/3 w-full">
                <h1
                    class="sm:text-4xl text-3xl mb-4 font-medium text-base-content"
                    style="font-family: var(--font-inter)">
                    Join the MAU Meme Coin Revolution
                </h1>
                <p
                    class="mb-8 leading-relaxed text-base-content/80"
                    style="font-family: var(--font-inter)">
                    Welcome to MAU, a unique meme coin that fuses the fandom of felines with the
                    unpredictable thrill of the crypto world. Our coin, inspired by the captivating
                    charm of Egyptian Mau and Arabian Mau cats, is all set to make a grand impact in
                    the Venom chain. Being a part of this journey allows you to tap into an
                    innovative digital currency experience, backed by solid blockchain technology
                    and a fun-loving community.
                </p>
                <div class="flex flex-col justify-center items-center gap-4">
                    <a
                        class="btn btn-primary"
                        target="_blank"
                        href="https://haha-team.gitbook.io/mau-coin"
                        >Documents</a
                    >
                </div>
            </div>
        </div>
    </section>
    <section class="text-base-content/80">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0">
                <img
                    class="object-cover object-center rounded-lg h-full w-full"
                    alt="Feature Image"
                    width="512"
                    height="512"
                    style="aspect-ratio: 1"
                    src="https://make-landing.s3.amazonaws.com/6618e7f1b642608baf3ca9db/6618e7f1b642608baf3ca9df/headline_1712909290809.jpeg" />
            </div>
            <div
                class="lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left w-full text-center flex flex-col lg:items-start items-center lg:justify-center">
                <div class="mb-8">
                    <div
                        class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6">
                            <path
                                fill-rule="evenodd"
                                d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <div class="">
                    <h2
                        class="text-base-content text-2xl sm:text-3xl font-medium mb-6"
                        style="font-family: var(--font-inter)">
                        Inspired by Cat Fandom
                    </h2>
                    <p class="leading-relaxed text-base" style="font-family: var(--font-inter)">
                        Our love for Egyptian Mau and Arabian Mau cats has inspired us to create
                        MAU. This infuses a special charm and unique value to our meme coin, making
                        it a fun investment.
                    </p>
                    <div class="mt-6">
                        <div
                            class="flex flex-col justify-start items-center lg:items-start gap-4 md:gap-6">
                            <a
                                class="btn btn-primary"
                                target="_blank"
                                href="https://haha-team.gitbook.io/mau-coin"
                                >Documents</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="text-base-content/80">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div
                class="lg:py-6 lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 lg:text-right text-center flex flex-col lg:items-end items-center lg:justify-center">
                <div class="mb-8">
                    <div
                        class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6">
                            <path
                                fill-rule="evenodd"
                                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                clip-rule="evenodd"></path>
                            <path
                                d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
                        </svg>
                    </div>
                </div>
                <div class="">
                    <h2
                        class="text-base-content text-2xl sm:text-3xl font-medium mb-6"
                        style="font-family: var(--font-inter)">
                        Pre-Launch Exclusive Offers
                    </h2>
                    <p class="leading-relaxed text-base" style="font-family: var(--font-inter)">
                        Join the MAU Coin community of investors right before the launch. Get
                        exclusive access to pre-launch offers, guaranteed returns and opportunity to
                        be part of early supporters.
                        <br />
                        <br />
                        (App Coming Soon)
                    </p>
                    <div class="mt-6">
                        <div
                            class="flex flex-col justify-start items-center lg:items-end gap-4 md:gap-6">
                            <a
                                class="whitespace-nowrap bg-black inline-flex py-3 px-5 rounded-lg items-center ring-1 ring-[#a6a6a675] focus:outline-none cursor-pointer select-none"
                                href="/"
                                target="_blank"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-9 h-9 -m-2"
                                    id="svg60"
                                    version="1.1"
                                    viewBox="-4.12599 -7.65905 35.75858 45.9543">
                                    <defs id="defs38">
                                        <linearGradient
                                            gradientUnits="userSpaceOnUse"
                                            y2="21.86"
                                            x2="-5.9"
                                            y1="1.87"
                                            x1="14.09"
                                            id="linear-gradient">
                                            <stop id="stop4" stop-color="#008eff" offset="0"></stop>
                                            <stop
                                                id="stop6"
                                                stop-color="#008fff"
                                                offset=".01"></stop>
                                            <stop
                                                id="stop8"
                                                stop-color="#00acff"
                                                offset=".26"></stop>
                                            <stop
                                                id="stop10"
                                                stop-color="#00c0ff"
                                                offset=".51"></stop>
                                            <stop
                                                id="stop12"
                                                stop-color="#00cdff"
                                                offset=".76"></stop>
                                            <stop
                                                id="stop14"
                                                stop-color="#00d1ff"
                                                offset="1"></stop>
                                        </linearGradient>
                                        <linearGradient
                                            gradientUnits="userSpaceOnUse"
                                            y2="15.32"
                                            x2="-2.37"
                                            y1="15.32"
                                            x1="26.45"
                                            id="linear-gradient-2">
                                            <stop
                                                id="stop17"
                                                stop-color="#ffd800"
                                                offset="0"></stop>
                                            <stop
                                                id="stop19"
                                                stop-color="#ff8a00"
                                                offset="1"></stop>
                                        </linearGradient>
                                        <linearGradient
                                            gradientUnits="userSpaceOnUse"
                                            y2="45.15"
                                            x2="-9.41"
                                            y1="18.05"
                                            x1="17.69"
                                            id="linear-gradient-3">
                                            <stop
                                                id="stop22"
                                                stop-color="#ff3a44"
                                                offset="0"></stop>
                                            <stop
                                                id="stop24"
                                                stop-color="#b11162"
                                                offset="1"></stop>
                                        </linearGradient>
                                        <linearGradient
                                            gradientUnits="userSpaceOnUse"
                                            y2="3.81"
                                            x2="8.92"
                                            y1="-8.29"
                                            x1="-3.19"
                                            id="linear-gradient-4">
                                            <stop
                                                id="stop27"
                                                stop-color="#328e71"
                                                offset="0"></stop>
                                            <stop
                                                id="stop29"
                                                stop-color="#2d9571"
                                                offset=".07"></stop>
                                            <stop
                                                id="stop31"
                                                stop-color="#15bd74"
                                                offset=".48"></stop>
                                            <stop
                                                id="stop33"
                                                stop-color="#06d575"
                                                offset=".8"></stop>
                                            <stop
                                                id="stop35"
                                                stop-color="#00de76"
                                                offset="1"></stop>
                                        </linearGradient>
                                    </defs>
                                    <g transform="translate(.004)" id="g58">
                                        <g id="g56">
                                            <path
                                                id="path40"
                                                d="M.55.48A2.39 2.39 0 000 2.15v26.34a2.41 2.41 0 00.55 1.67l.09.09 14.75-14.76v-.35L.64.39z"
                                                fill="url(#linear-gradient)"></path>
                                            <path
                                                id="path42"
                                                d="M20.31 20.41l-4.92-4.92v-.35l4.92-4.91.11.06 5.83 3.31c1.67.94 1.67 2.49 0 3.44l-5.83 3.31z"
                                                fill="url(#linear-gradient-2)"></path>
                                            <path
                                                id="path44"
                                                d="M20.42 20.35l-5-5L.55 30.16a2 2 0 002.45.07l17.39-9.88"
                                                fill="url(#linear-gradient-3)"></path>
                                            <path
                                                id="path46"
                                                d="M20.42 10.29L3 .4A1.93 1.93 0 00.55.48l14.84 14.84z"
                                                fill="url(#linear-gradient-4)"></path>
                                            <path
                                                id="path48"
                                                d="M20.31 20.24L3 30.06a2 2 0 01-2.39 0l-.09.09.09.09a2 2 0 002.39 0l17.39-9.88z"
                                                opacity=".1"></path>
                                            <path
                                                id="path50"
                                                d="M.55 30A2.43 2.43 0 010 28.32v.17a2.41 2.41 0 00.55 1.67l.09-.09z"
                                                class="cls-7"></path>
                                            <path
                                                id="path52"
                                                d="M26.25 16.86l-5.94 3.38.11.11L26.25 17a2.11 2.11 0 001.25-1.72 2.21 2.21 0 01-1.25 1.58z"
                                                class="cls-7"></path>
                                            <path
                                                id="path54"
                                                d="M3 .58l23.25 13.19a2.2 2.2 0 011.25 1.55 2.09 2.09 0 00-1.25-1.72L3 .4C1.36-.54 0 .24 0 2.15v.17C0 .42 1.36-.37 3 .58z"
                                                fill="#fff"
                                                opacity=".3"></path>
                                        </g>
                                    </g></svg
                                ><span
                                    class="ml-4 flex items-start text-white flex-col leading-none"
                                    ><span class="text-[10px] mb-0.5 opacity-90">GET IT ON</span
                                    ><span class="font-medium">Google Play</span></span
                                ></a
                            ><a
                                class="whitespace-nowrap bg-black inline-flex py-3 px-5 rounded-lg items-center ring-1 ring-[#a6a6a675] focus:outline-none cursor-pointer select-none"
                                href="/"
                                target="_blank"
                                ><svg
                                    fill="#fff"
                                    class="w-7 h-7"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 22.773 22.773">
                                    <g>
                                        <g>
                                            <path
                                                d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573    c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>
                                            <path
                                                d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334    c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0    c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019    c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464    c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648    c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>
                                        </g>
                                    </g></svg
                                ><span
                                    class="ml-4 text-white flex items-start flex-col leading-none"
                                    ><span class="text-[10px] mb-0.5 opacity-90"
                                        >Download on the</span
                                    ><span class="font-medium">App Store</span></span
                                ></a
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2 w-full">
                <iframe
                    class="object-cover object-center rounded-lg h-full w-full"
                    src="https://www.youtube.com/embed/Cn8TYYUN44o"
                    title="Mau app"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen=""></iframe>
            </div>
        </div>
    </section>
    <section class="text-base-content/80">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0">
                <img
                    class="object-cover object-center rounded-lg h-full w-full"
                    alt="Feature Image"
                    width="512"
                    height="576"
                    style="aspect-ratio: 0.8888888888888888"
                    src="https://make-landing.s3.amazonaws.com/6618e7f1b642608baf3ca9db/6625c7c0c2255635bc55c03d/headline_1713754413031.jpeg" />
            </div>
            <div
                class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="mb-5">
                        <div
                            class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6">
                                <path
                                    d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <h2
                            class="text-base-content text-lg font-medium mb-3"
                            style="font-family: var(--font-inter)">
                            Open-Source Crypto Ecosystem: Empowering Transparency and Innovation
                        </h2>
                        <p class="leading-relaxed text-base" style="font-family: var(--font-inter)">
                            Explore the inner workings of our TIP-3 token standard coin contract
                            deployed on the Venom Chain. This smart contract empowers the creation
                            and management of our native cryptocurrency, fostering a decentralized
                            economy built on trust and efficiency.
                        </p>
                        <div class="mt-3">
                            <div class="inline-flex items-center gap-2 md:gap-4">
                                <a
                                    class="link link-hover link-primary"
                                    href="https://github.com/Permutize/mau-token"
                                    >Read Source Code</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="mb-5">
                        <div
                            class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6">
                                <path
                                    d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z"></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <h2
                            class="text-base-content text-lg font-medium mb-3"
                            style="font-family: var(--font-inter)">
                            Backend
                        </h2>
                        <p class="leading-relaxed text-base" style="font-family: var(--font-inter)">
                            Our robust backend system serves as the backbone of our platform,
                            facilitating seamless interactions between users and the blockchain.
                            Utilizing advanced verification mechanisms, it ensures the security and
                            validity of wallet addresses while orchestrating the distribution of
                            airdrops to our community.
                        </p>
                        <div class="mt-3">
                            <div class="inline-flex items-center gap-2 md:gap-4">
                                <a
                                    class="link link-hover link-primary"
                                    href="https://github.com/Permutize/venom-backend"
                                    >Read Source Code</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="mb-5">
                        <div
                            class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6">
                                <path
                                    fill-rule="evenodd"
                                    d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <h2
                            class="text-base-content text-lg font-medium mb-3"
                            style="font-family: var(--font-inter)">
                            Mobile Application
                        </h2>
                        <p class="leading-relaxed text-base" style="font-family: var(--font-inter)">
                            Engage with our mobile application, your gateway to the crypto world.
                            Seamlessly integrated with social media platforms like Twitter, it
                            enables users to participate in our ecosystem by following, tweeting,
                            and receiving airdrops. Enter your wallet address and witness the magic
                            unfold as our system verifies your eligibility and rewards your
                            engagement.
                        </p>
                        <div class="mt-3">
                            <div class="inline-flex items-center gap-2 md:gap-4">
                                <a
                                    class="link link-hover link-primary"
                                    href="https://github.com/Permutize/haha-venom-mobile"
                                    >Read Source Code</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-24 bg-base-100 container mx-auto sm:px-5">
        <div class="w-full bg-primary sm:rounded-lg">
            <div
                class="flex flex-col md:flex-row justify-center items-center p-8 md:p-16 gap-8 md:gap-16 lg:md:gap-24">
                <h2
                    class="text-2xl font-medium text-primary-content text-center md:text-left"
                    style="font-family: var(--font-inter)">
                    Unlock a universe of themed fun with the unique MAU Coin in your cryptocurrency
                    portfolio
                </h2>
                <div class="mx-auto md:mx-0">
                    <div class="flex flex-col justify-center items-center gap-4">
                        <a
                            class="btn"
                            href="https://venomscan.com/accounts/0:d7f3e31982a8000b7d3d613a9e9c3fab79f675b79c3db3825595091ee70b3ffd"
                            >View on VenomScan</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer
        class="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <a href="#" class="flex items-center md:justify-start justify-center text-base-content"
            ><img
                class="w-12 h-12 rounded-full"
                alt="Logo"
                width="64"
                height="64"
                style="aspect-ratio: 1"
                src="https://make-landing.s3.amazonaws.com/6618e7f1b642608baf3ca9db/6618e7f1b642608baf3ca9de/logo_1712908504405.jpeg" />
            <div class="font-medium text-lg md:text-xl ml-3" style="font-family: var(--font-inter)">
                MAU Coin
            </div></a
        >
        <div class="divider divider-horizontal"></div>
        <p class="mt-4 sm:mt-0 text-sm text-base-content/80" style="font-family: var(--font-inter)">
            Copyright © HaHa Technologies, Inc. 2024 - All right reserved
        </p>
    </footer>
</main>
`;
