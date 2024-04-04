import { CardDetail } from "@/components/ui/CardDetail";
import { useFetchDataList } from "@/hooks/useFetchDataList";
import { Data } from "@/types/type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Playlist() {
  const { id: rawId } = useParams();
  const id = rawId || "";
  const { data, isError, isLoading } = useFetchDataList();
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      // Konversi tipe data id dari string ke number
      const playlistId = parseInt(id);
      // Filter data berdasarkan id yang diinginkan
      const filtered = data.data.filter((item) => item.id === playlistId);
      setFilteredData(filtered);
    }
  }, [data, isError, isLoading, id]);

  return (
    <main className="container py-12">
      <div className="py-12">
        <h3 className="text-center text-2xl font-semibold">Detail PlayList</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {filteredData.map((item) =>
          item.playlist.map((item, i) => (
            <CardDetail
              key={i}
              description={item.description}
              src={item.url}
              title={item.title}
              type={item.type}
            />
          ))
        )}
      </div>
    </main>
  );
}
