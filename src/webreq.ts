import axios, { type AxiosResponse } from "axios";

interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const data: AxiosResponse<todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log("todo", data.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("Axios Error", error.message);
    }
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
fetchData();
