import { getTodoService } from "@/services/getTodoService";
import { Todo } from "@/types";
const Home = async () => {
  const Tododata = await getTodoService();
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
