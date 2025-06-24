import Image, { ImageProps } from 'next/image';
import EvoLogoPNG from '@/public/images/Evo_Logo.png';

export type EvoLogoProps = {
  className: string;
};

export default function EvoLogo({ className }: EvoLogoProps) {
  return (
    <Image src={EvoLogoPNG} className={className} width={128} alt="Evo Logo" />
  );
}
