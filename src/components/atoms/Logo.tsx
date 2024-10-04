import React from 'react';
import Typography from "@/components/atoms/Typography";

type TypographyVariant = "logo-bg" | "logo-sm" | "logo-tag-bg" | "logo-tag-sm"
type LogoVersion = "sm" | "bg-row" | "bg-col";

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
  "bg-row": {
    containerStyle: "flex items-baseline justify-between w-full",
    logoVariant: "logo-bg",
    tagVariant: "logo-tag-bg"
  },
  "bg-col": {
    containerStyle: "flex flex-col items-start",
    logoVariant: "logo-bg",
    tagVariant: "logo-tag-bg",
    margin: "-mt-10",
  },
};

interface LogoProps {
  version?: LogoVersion;
}

const Logo: React.FC<LogoProps> = ({ version = "sm" }) => {
  const { containerStyle, logoVariant, tagVariant, margin } = LOGO_STYLES[version];

  return (
    <div className={containerStyle}>
      <Typography variant={logoVariant}>
        SERENA .&nbsp;
      </Typography>
      <Typography variant={tagVariant} className={margin}>
        food & bev
      </Typography>
    </div>
  );
};

export default Logo;
