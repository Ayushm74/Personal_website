import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe, contactInfo, profileImage } from "../constants";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub, AiFillFilePdf, AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
    >
      <div className={` ${layout.sectionInfo}`}>
        <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
        >
        {aboutMe.tagLine}
        </p>
        <div className="font-poppins font-normal text-dimWhite text-[14px] leading-[28px] mt-4">
          <p><AiFillMail className="inline mr-2 text-teal-200" />{contactInfo.email}</p>
          <p><AiFillPhone className="inline mr-2 text-teal-200" />{contactInfo.phone}</p>
          <p><FaLocationDot className="inline mr-2 text-teal-200" />{contactInfo.location}</p>
        </div>
        <div className="flex flex-row mt-4">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2">
          {/* styles is a prop */}
          <a href={resumeLink} target="_blank">
            <Button
              styles="mt-10 mr-3 inline-flex items-center justify-center"
              text="Resume"
              icon={AiFillFilePdf}
            />
          </a>
          <a href={repoLink} target="_blank">
            <Button
              styles="mt-10 inline-flex items-center justify-center"
              text="GitHub"
              icon={AiFillGithub}
            />
          </a>
        </div>
      </div>

      <div className="md:ml-auto mt-10 md:mt-0">
        <img
          src={profileImage}
          alt="Ayush Mishra"
          className="w-[200px] h-[200px] border-2 border-teal-200 relative z-[5] rounded-full"
        />
      </div>
    </div>
    <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
      <p>
        Built with React, Framer Motion, and AI-focused engineering by Ayush Mishra.
      </p>
    </div>
  </footer>
);

export default Footer;
