// External Libraries
import React, { useState } from "react";

// Assets
import { MissingImageSVG } from "../../../../assets/icons/MissingImage";

// Styles
import { Cover, CoverFallback, Icon, Text } from "./styles";

type Props = {
  coverUrl: string;
  title: string;
};

export const BookCover: React.FC<Props> = ({ coverUrl, title }) => {
  const [imgErrored, setImgErrored] = useState(false);

  return !imgErrored ? (
    <Cover
      src={coverUrl}
      alt={`Cover of ${title}`}
      onError={() => setImgErrored(true)}
    />
  ) : (
    <CoverFallback>
      <Icon>
        <MissingImageSVG />
      </Icon>
      <Text>Missing Image</Text>
    </CoverFallback>
  );
};
