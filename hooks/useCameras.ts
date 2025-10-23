import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { type Camera } from "@/models/Camera";


const fetchCameras = async (): Promise<Camera[]> => {
  const { data } = await axios.get<Camera[]>(
    "https://api.alexanast.gr/index.php?resource=cameras"
  );
  return data;
};


export const useCameras = () => {
  return useQuery({
    queryKey: ["cameras"],
    queryFn: fetchCameras,
  });
};


