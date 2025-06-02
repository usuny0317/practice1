"use client";

import { useGetTodoQuery } from "@/hooks/tanstack/getTodoQuery";
import { Todo } from "@/types";

const Todolist = () => {
  const { data: Tododata, isPending, isError } = useGetTodoQuery();
  if (isPending) {
    return <div>데이터를 로딩 중입니다.</div>;
  }
  if (isError) {
    return <div>데이터 로딩에 실패했습니다.</div>;
  }
  return (
    <div>
      투두리스트를 만들어보자.
      <div>
        {Tododata.map((data: Todo) => {
          return <div key={data.id}>{data.title} </div>;
        })}
      </div>
    </div>
  );
};

export default Todolist;
