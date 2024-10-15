import React from 'react';
import Typography from "@/components/atoms/Typography";

type TypographyVariant = "logo-bg" | "logo-sm" | "logo-tag-bg" | "logo-tag-sm";
type LogoVersion = "sm" | "bg";

interface LogoStyle {
  containerStyle: string;
  logoVariant: TypographyVariant;
  tagVariant: TypographyVariant;
  margin?: string;
}

const LOGO_STYLES: Record<LogoVersion, LogoStyle> = {
  "sm": {
    containerStyle: "flex items-baseline justify-start",
    logoVariant: "logo-sm",
    tagVariant: "logo-tag-sm"
  },
  "bg": {
    containerStyle: "flex flex-col items-start md:flex-row md:items-baseline md:w-full",
    logoVariant: "logo-bg",
    tagVariant: "logo-tag-bg",
    margin: "-mt-10 md:mt-0",
  },
};

interface LogoProps {
  version?: LogoVersion;
  space?: string
}

const Logo: React.FC<LogoProps> = ({ version = "sm", space = "space" }) => {
  const { containerStyle, logoVariant, tagVariant, margin } = LOGO_STYLES[version];
  const finalContainerStyle = space === "no-space" ? `${containerStyle} md:justify-center` : `${containerStyle} md:justify-between`;

  return (
    <div className={finalContainerStyle}>
      <a href="/">
        <Typography variant={logoVariant}>
          SERENA .&nbsp;
        </Typography>
      </a>
      <a href="/">
        <Typography variant={tagVariant} className={margin}>
          food <span style={{ fontFamily: 'var(--font-inter-bold-italic)' }}>&</span> bev
        </Typography>
      </a>
    </div>
  );
};

export default Logo;
