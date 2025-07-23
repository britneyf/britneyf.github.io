import React from "react";
import Image from "next/image";
import Link from "../Global/Link";
import nameLogo from "../../assets/name.svg";
import { socials } from "../../constants";

const Intro = () => {
    return (
        <div className="space-y-4">
            <div className="font-bold text-2xl">Britney Forsyth</div>
            <Image src="/profile.jpg" alt="Britney Forsyth - Data Scientist and Machine Learning Engineer" height={180} width={180} quality={85} priority={true} itemProp="image" />
            <p className="body">Hi, I'm Britney. I'm a data scientist and machine learning engineer. I build tools that bring AI to the forefront of biology and healthcare.</p>

            <div className="space-y-1">
                <div className="body font-bold">EDUCATION</div>
                <div className="body">Columbia University — M.S. in Data Science</div>
                <div className="body">Pennsylvania State University — B.S. in Mathematics and Biomedical Engineering</div>
            </div>

            <div className="space-y-1">
                <div className="body font-bold">EMAIL</div>
                <div className="body">britneyforsyth8@gmail.com</div>
                <div className="body text-xs text-slate-500">If you want to say hi, feel free to reach me here.</div>
            </div>

            <div className="space-y-1">
                <div className="body font-bold">LINKS</div>
                <div className="flex flex-wrap">
                    {socials.map((social, index) => (
                        <span key={social.name}>
                            <Link text={social.name} href={social.url} className="pr-2 space-x-1 body" />
                            {index < socials.length - 1 && <span className="pr-2 sm:pr-0 sm:invisible sm:block inline">•</span>}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Intro;
