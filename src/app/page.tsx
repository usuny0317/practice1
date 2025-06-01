import { useGetTodoQuery } from "@/hooks/tanstack/getTodoQuery";
import { Todo } from "@/types";
const Home = () => {
  const { data: Tododata } = useGetTodoQuery();
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

export default Home;
