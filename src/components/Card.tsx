import Image from 'next/image';
import { BorderBeam } from '@/components/ui/border-beam';

interface CardProps {
	src: string;
	alt: string;
	colorTo: string;
	colorFrom: string;
}

const Card: React.FC<CardProps> = ({ src, alt, colorTo, colorFrom }) => (
  <div className="m-4 hover:m-2">
    <div className=" -m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={417}
        quality={100}
        className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
      />
      <BorderBeam
        size={250}
        duration={12}
        delay={9}
        colorTo={colorTo}
        colorFrom={colorFrom}
      />
    </div>
  </div>
);

export default Card;
