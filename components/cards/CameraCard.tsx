import { Camera } from "@/models/Camera";

interface CamProps {
  camera: Camera;
}
function CameraCard({ camera }: CamProps) {
  return (

    <div className="w-100 bg-white rounded-b-lg border-t-8 border-primary px-4 py-5 flex flex-col justify-around shadow-md">

      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold font-sans">{camera.brand}</p>
        <p className="text-lg font-bold font-sans">{camera.model}</p>
      </div>
      <div className="py-3">
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus rerum
          deleniti eaque ...
        </p>
      </div>
      <div className="flex justify-between">

        <div className="flex flex-col gap-3">
          <span>For:</span>

          <div>
            <div className="text-sm flex gap-2">
              {
                camera.greatfor?.map((item) => {
                  return <button className="bg-gray-300 px-2 text-xs rounded-sm transition-colors ease-in-out">
                    {item}
                  </button>
                })
              }


            </div>
          </div>

        </div>

      </div>
    </div>





  )
}

export default CameraCard;