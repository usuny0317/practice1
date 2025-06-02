import { API_URL, ERORR } from "@/constants";

export const doneTodoService = async ({
  id,
  done,
}: {
  id: string;
  done: boolean;
}) => {
  const res = await fetch(API_URL + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      done: !done,
    }),
  });
  if (!res.ok) {
    throw new Error(ERORR.DONE);
  }
  return res.json();
};
