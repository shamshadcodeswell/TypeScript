interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!data.ok) {
      throw data.status;
    }
    const finalData: todo = await data.json();
    console.log(finalData);
  } catch (error: any) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log(error);
  }
};
fetchData();
