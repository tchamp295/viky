import React, { FC } from "react";
import { 
  Github, 
  Linkedin, 
  X, 
  Instagram, 
  Mail 
} from "lucide-react";
import { LucideIcon } from "lucide-react";

const socialData = [
  {
    platform: "GitHub",
    username: "@victorndemoh",
    icon: Github,
    link: "https://github.com/victorndemoh",
    gradient: "bg-gray-800"
  },
  {
    platform: "LinkedIn",
    username: "Victor Ndemo",
    icon: Linkedin,
    link: "https://linkedin.com/in/victorndemoh",
    gradient: "bg-blue-600"
  },
  {
    platform: "Twitter",
    username: "@victorndemoh",
    icon: X,
    link: "https://twitter.com/victorndemoh",
    gradient: "bg-sky-500"
  },
  {
    platform: "Instagram",
    username: "@victorndemoh",
    icon: Instagram,
    link: "https://instagram.com/victorndemoh",
    gradient: "bg-pink-500"
  },
  {
    platform: "Email",
    username: "victor.ndemo@example.com",
    icon: Mail,
    link: "mailto:victor.ndemo@example.com",
    gradient: "bg-red-500"
  }
];

type LinkCardProps = {
  platform: string;
  username: string;
  icon: LucideIcon;
  link: string;
  gradient: string;
};

const LinkCard: FC<LinkCardProps> = ({ 
  platform, 
  username, 
  icon: Icon, 
  link, 
  gradient 
}) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      <div className={`
        group relative overflow-hidden rounded 
        bg-white border border-gray-200
        text-gray-800 p-5 shadow-md transition-all duration-300 
        hover:shadow-xl hover:scale-[1.02]
      `}>
        <div className="flex items-center relative z-10">
          <div className={`p-3 rounded-full mr-4 bg-gradient-to-r ${gradient}`}>
            <Icon size={28} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-wide">{platform}</h2>
            <p className="text-sm text-gray-600">{username}</p>
          </div>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

const Links = () => {
  return (
    <div className="max-w-xl mx-auto space-y-6 p-6 ">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-600">
        Let&apos;s Connect
      </h1>
      {socialData.map((social) => (
        <LinkCard
          key={social.platform}
          platform={social.platform}
          username={social.username}
          icon={social.icon}
          link={social.link}
          gradient={social.gradient}
        />
      ))}
      <div className="text-center text-gray-500 mt-4 text-sm">
        Feel free to reach out and connect!
      </div>
    </div>
  );
};

export default Links;