import { FC } from "react";

import { redirect } from "next/navigation";

interface UsernameProps {
  params: {
    username: string;
  };
}

const Username: FC<UsernameProps> = async ({ params }) => {
  redirect(`${params.username}/intro`);
};

export default Username;
