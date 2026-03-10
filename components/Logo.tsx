import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function Logo({
  className,
  width = 34,
  height = 34,
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="SMHN logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
