import React from "react";
import tw from "twin.macro";

const SocialList = ({ isMobile = false }) => {
  const ListItem = tw.li`flex justify-center`;
  const ListLink = tw.a`h-10 hover:underline`;

  return (
    <ul
      css={[
        tw`w-full md:pr-6 md:pt-6 text-base`,
        isMobile ? tw`md:hidden mt-8` : tw`hidden md:block absolute`,
      ]}
    >
      <ListItem className="visible">
        <ListLink
          href="https://www.linkedin.com/in/marco-escaleira00/"
          target="_blank"
          rel="noreferrer"
        >
          &gt; LinkedIn
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink
          href="https://github.com/MarcoEscaleira"
          target="_blank"
          rel="noreferrer"
        >
          &gt; Github
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink href="mailto:marcoescaleira2000@gmail.com">
          &gt; Email
        </ListLink>
      </ListItem>
    </ul>
  );
};

export default SocialList;
