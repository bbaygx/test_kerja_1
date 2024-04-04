import { useFetchDataList } from "@/hooks/useFetchDataList";
import { CardList } from "./ui/CardList";

export function ProductList() {
  const { data, isError, isLoading } = useFetchDataList();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <div className="container">
      {/* Map here */}

      <div className="flex flex-wrap justify-center md:justify-start gap-5 py-5">
        {data?.data.map((item, i) => (
          <CardList
            src={item.banner}
            title={item.title}
            description={item.description}
            key={i}
            id={item.id}
          />
        ))}
        {/* {data?.data.map((item) =>
          item.playlist.map((item, i) => (
            <CardDetail
              src={item.url}
              title={item.title}
              type={item.type}
              description={item.description}
              key={i}
            />
          ))
        )} */}
      </div>
    </div>
  );
}
