import Image from "next/image";
import { FC } from "react";
type LinkCardProps = {
  img: string;
  title: string;
  tag: string;
};

const LinkCard: FC<LinkCardProps> = ({ img, title, tag }) => {
  return (
    <div className="">
      <Image src={img} alt="" width={60} height={60} />
      <h1>{title}</h1>
      <span>{tag}</span>
    </div>
  );
};

export default LinkCard;
