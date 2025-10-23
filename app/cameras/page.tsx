"use client";


import { useCameras } from "@/hooks/useCameras";


import CamsFilterBar from "@/sidebars/CamsFilterBar";

import CameraCard from "@/cards/CameraCard";

import LoadingOverlay from "@/overlays/LoadingOverlay";


export default function Home() {

    const { data, isPending, error } = useCameras()




    return (
        <div className="flex bg-gradient-to-tr from-gray-100 to-orange-200 ">
            <CamsFilterBar />

            {isPending && <LoadingOverlay text={"Fetching Models"} />}

            <div className="w-full p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        data?.map(camera => {
                            return <CameraCard key={camera.model} camera={camera} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}
