"use client";
import Image from "next/image";
import { RxDownload } from "react-icons/rx";
import GooglePlayStore from "@/public/svg/google-playstore.svg";
import MobilePhone from "@/public/images/mobile-illustration.png";
import AppleLogo from "@/public/svg/apple-icon.svg";
import Walking from "@/public/svg/walking.svg";
import SearchLocation from "@/public/svg/search-location.svg";
import ChatCall from "@/public/svg/chat-square-call.svg";
import BankPillar from "@/public/svg/bank.svg";
import House from "@/public/svg/house.svg";
import UserCheck from "@/public/svg/user-follow.svg";
import RentSign from "@/public/svg/rent-sign.svg";
import Buildings from "@/public/svg/building.svg";
import AiAlgo from "@/public/svg/ai-mi-algorithm.svg";
import Insight from "@/public/svg/insight.svg";
import Exchange from "@/public/svg/exchange.svg";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <main>
            {/* HEADER NAVBAR */}
            <header className="shadow py-4">
                <div className="container md:px-0 px-3 flex justify-between gap-4 items-center m-auto">
                    <Image
                        src={"/images/logo-dark.png"}
                        alt="logo"
                        unoptimized
                        width={120}
                        height={120}
                    />

                    <button className="btn-primary flex items-center justify-center gap-3 w-fit px-7">
                        <RxDownload className="text-xl mb-1 font-semibold" />
                        <p>Download</p>
                    </button>
                </div>
            </header>

            <section>
                <div className="container py-16">
                    <h1
                        data-aos="fade-up"
                        className="md:text-6xl text-4xl text-center font-bold mb-8 max-w-5xl m-auto text-balance"
                    >
                        Find, Rent, or Buy Your{" "}
                        <span className="md:text-6xl text-4xl font-bold bg-gradient-to-br from-secondary to-secondary/50 [-webkit-text-stroke:_0.5px_rgb(var(--textcolor),0.2)] bg-clip-text text-transparent">
                            Dream{" "}
                        </span>
                        <span className="md:text-6xl text-4xl font-bold bg-gradient-to-br from-primary to-primary/50 [-webkit-text-stroke:_0.5px_rgb(var(--textcolor),0.2)] bg-clip-text text-transparent">
                            Property{" "}
                        </span>
                        — Easier & Faster!
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="max-w-2xl m-auto text-center px-2"
                    >
                        PerkPro connects you with verified listings, landlords,
                        and financing options—all in one app
                    </p>

                    <Image
                        data-aos="fade-up"
                        data-aos-delay="200"
                        width={400}
                        height={200}
                        className="w-full max-w-4xl m-auto my-24"
                        src={"/images/hero-image-house.png"}
                        alt="hero-image-house"
                    />

                    <div className="pb-8">
                        <h4 className="text-2xl font-semibold mb-4 text-center">
                            Get the app
                        </h4>

                        <div className="flex flex-wrap items-center gap-4 justify-center">
                            <button className="btn bg-black ring-1 ring-black border-white border-2 border-spacing-3 flex w-fit px-4 py-1 items-center gap-4 rounded-lg shadow-sm text-light">
                                <Image
                                    width={50}
                                    height={50}
                                    alt="GooglePlayStore"
                                    src={GooglePlayStore}
                                    className="text-sm w-11"
                                />
                                <div className="flex flex-col items-start">
                                    <small className="text-xs font-light">
                                        Get it on
                                    </small>
                                    <p className="text-lg tracking-wide font-semibold leading-4">
                                        Google Play
                                    </p>
                                </div>
                            </button>

                            <button className="btn bg-black ring-1 ring-black border-white border-2 border-spacing-3 flex w-fit px-4 py-1 items-center gap-4 rounded-lg shadow-sm text-light">
                                <Image
                                    width={50}
                                    height={50}
                                    alt="AppleLogo"
                                    src={AppleLogo}
                                    className="text-sm w-11"
                                />
                                <div className="flex flex-col items-start">
                                    <small className="text-xs font-light">
                                        Download on the
                                    </small>
                                    <p className="text-lg tracking-wide font-semibold leading-4">
                                        App Store
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-16">
                    <h3 className="text-3xl font-semibold text-center">
                        For Property Seekers
                    </h3>

                    <div className="bg-accent py-16 md:px-10 px-4 rounded-2xl w-full mt-8">
                        <div className="md:flex justify-between gap-6 flex-row grid grid-cols-2">
                            <div className="flex items-center justify-center flex-col gap-3 max-w-sm py-4 h-full">
                                <Image
                                    width={50}
                                    height={50}
                                    alt="SearchLocation"
                                    src={SearchLocation}
                                    className="text-sm md:w-20 w-10 object-cover"
                                />
                                <p className="text-light font-semibold text-lg md:text-2xl text-center">
                                    Advanced Search & Filters
                                </p>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-3 max-w-sm py-4 h-full">
                                <Image
                                    width={50}
                                    height={50}
                                    alt="Walking"
                                    src={Walking}
                                    className="text-sm md:w-20 w-10 object-cover"
                                />
                                <p className="text-light font-semibold text-lg md:text-2xl text-center">
                                    Virtual Tours
                                </p>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-3 max-w-sm py-4 h-full">
                                <Image
                                    width={50}
                                    height={50}
                                    alt="BankPillar"
                                    src={BankPillar}
                                    className="text-sm md:w-20 w-10 object-cover"
                                />
                                <p className="text-light font-semibold text-lg md:text-2xl text-center">
                                    Rent Financing
                                </p>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-3 max-w-sm py-4 h-full">
                                <Image
                                    width={50}
                                    height={50}
                                    alt="ChatCall"
                                    src={ChatCall}
                                    className="text-sm md:w-20 w-10 object-cover"
                                />
                                <p className="text-light font-semibold text-lg md:text-2xl text-center">
                                    Chat & Call Landlords
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-16 pb-10">
                    <h3 className="text-3xl font-semibold text-center">
                        For Landlords & Agents
                    </h3>

                    <div className="bg-dark py-16 md:px-10 px-4 rounded-2xl w-full mt-8">
                        <div className="md:flex justify-between gap-6 flex-row grid grid-cols-2">
                            <div className="flex items-center justify-center flex-col gap-3 max-w-sm py-4 h-full">
                                <Image
                                    width={50}
                                    height={50}
                                    alt="House"
                                    src={House}
                                    className="text-sm md:w-20 w-10 object-cover"
                                />
                                <p className="text-light font-semibold text-lg md:text-2xl text-center">
                                    Property Management Tools
                                </p>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-3 max-w-sm py-4 h-full">
                                <Image
                                    width={50}
                                    height={50}
                                    alt="UserCheck"
                                    src={UserCheck}
                                    className="text-sm md:w-20 w-10 object-cover"
                                />
                                <p className="text-light font-semibold text-lg md:text-2xl text-center">
                                    Tenant Screening
                                </p>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-3 max-w-sm py-4 h-full">
                                <Image
                                    width={50}
                                    height={50}
                                    alt="RentSign"
                                    src={RentSign}
                                    className="text-sm md:w-20 w-10 object-cover"
                                />
                                <p className="text-light font-semibold text-lg md:text-2xl text-center">
                                    Automated Rent Collection
                                </p>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-3 max-w-sm py-4 h-full">
                                <Image
                                    width={50}
                                    height={50}
                                    alt="Buildings"
                                    src={Buildings}
                                    className="text-sm md:w-20 w-10 object-cover"
                                />
                                <p className="text-light font-semibold text-lg md:text-2xl text-center">
                                    Lease Agreement Generator
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-16">
                    <div className="gap-6 md:grid md:grid-cols-3 flex items-center justify-center flex-wrap">
                        <div className="flex items-center justify-center flex-col gap-3 max-w-sm py-4 h-full">
                            <Image
                                width={50}
                                height={50}
                                alt="AiAlgo"
                                src={AiAlgo}
                                className="text-sm md:w-20 w-14 object-cover"
                            />
                            <p className="text-textcolor text-lg text-center">
                                AI-powered Property Recommendations
                            </p>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3 max-w-sm py-4 h-full">
                            <Image
                                width={50}
                                height={50}
                                alt="Insight"
                                src={Insight}
                                className="text-sm md:w-20 w-14 object-cover"
                            />
                            <p className="text-textcolor text-lg text-center">
                                Location Insights Nearby schools, hospitals, and
                                transit.
                            </p>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3 max-w-sm py-4 h-full">
                            <Image
                                width={50}
                                height={50}
                                alt="Exchange"
                                src={Exchange}
                                className="text-sm md:w-20 w-14 object-cover"
                            />
                            <p className="text-textcolor text-lg text-center">
                                Multi-language & Currency Support
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mb-8 px-3">
                    <h3 className="text-3xl font-semibold text-center">
                        How It Works For Landlords & Agents
                    </h3>
                    <div className="grid grid-cols-12 mt-10">
                        <div className="col-span-6 flex flex-col gap-8 pt-16">
                            <div className="flex flex-col gap-2">
                                <div className="h-10 w-10 bg-primary p-6 rounded-full text-center flex items-center justify-center text-light">
                                    <p className="text-xl">1</p>
                                </div>

                                <p className="text-lg font-semibold">
                                    Sign Up & Set Preferences
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="h-10 w-10 bg-primary p-6 rounded-full text-center flex items-center justify-center text-light">
                                    <p className="text-xl">2</p>
                                </div>

                                <p className="text-lg font-semibold">
                                    Browse Verified Listings
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="h-10 w-10 bg-primary p-6 rounded-full text-center flex items-center justify-center text-light">
                                    <p className="text-xl">3</p>
                                </div>

                                <p className="text-lg font-semibold">
                                    Chat, Schedule Visits & Apply
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="h-10 w-10 bg-primary p-6 rounded-full text-center flex items-center justify-center text-light">
                                    <p className="text-xl">4</p>
                                </div>

                                <p className="text-lg font-semibold">
                                    Secure Payments & Financing
                                </p>
                            </div>
                        </div>

                        <div className="col-span-6">
                            <Image
                                width={50}
                                height={50}
                                alt="MobilePhone"
                                unoptimized
                                src={MobilePhone}
                                className="object-contain w-full max-w-xs md:h-fit h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary">
                <div className="container px-5 py-24 mx-auto flex md:flex-row flex-col">
                    <div className="text-light flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                        <p className="text-lg text-center">
                            House Listing, Rent Financing, Purchase Properties.
                        </p>
                        <h1 className="md:text-3xl text-2xl font-medium">
                            Download the Perkpro Mobile App{" "}
                        </h1>
                    </div>
                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                        <button className="btn bg-black ring-1 ring-black border-white border-2 border-spacing-3 flex w-fit px-4 py-1 items-center gap-4 rounded-lg shadow-sm text-light">
                            <Image
                                width={50}
                                height={50}
                                alt="GooglePlayStore"
                                src={GooglePlayStore}
                                className="text-sm w-11"
                            />
                            <div className="flex flex-col items-start">
                                <small className="text-xs font-light">
                                    Get it on
                                </small>
                                <p className="text-lg tracking-wide font-semibold leading-4">
                                    Google Play
                                </p>
                            </div>
                        </button>
                        <button className="btn bg-black ring-1 ring-black border-white border-2 border-spacing-3 flex w-fit px-4 py-1 items-center gap-4 rounded-lg shadow-sm text-light">
                            <Image
                                width={50}
                                height={50}
                                alt="AppleLogo"
                                src={AppleLogo}
                                className="text-sm w-11"
                            />
                            <div className="flex flex-col items-start">
                                <small className="text-xs font-light">
                                    Download on the
                                </small>
                                <p className="text-lg tracking-wide font-semibold leading-4">
                                    App Store
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <footer className="bg-textcolor text-light">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link
                        href={"/"}
                        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                    >
                        <Image
                            src={"/images/logo-white.png"}
                            alt="logo"
                            unoptimized
                            width={120}
                            height={120}
                        />
                    </Link>
                    <p className="text-sm text-light/75 sm:ml-4 pl-4 md:border-l-2 py-6 md:py-2">
                        © 2021 —
                        <a
                            href="#"
                            className="text-light/75 ml-1"
                            rel="noopener noreferrer"
                        >
                            @perkpro
                        </a>
                    </p>
                </div>
            </footer>
        </main>
    );
}

