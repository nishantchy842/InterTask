import { useState } from "react";
import { useMovieDetails } from "../../hook";
import CustomSpinner from "../../components/customSpinner";

export default function DetailsPage() {
  const [detailsData, loading] = useMovieDetails();

  const [lineClamp, setLineClamp] = useState(false);

  return (
    <CustomSpinner spinning={loading}>
      <div className=" relative">
        <img src={detailsData?.image} alt="/" className=" w-full" />
        <div className=" absolute bottom-0 p-[60px] text-white">
          <div className=" flex">
            <p className="  font-bold text-[44px]">{detailsData?.title}</p>
            <span className=" w-fit h-fit rounded-md font-semibold p-1 bg-slate-50 text-black">
              {detailsData?.rating}
            </span>
          </div>
          <p className=" font-medium mb-3">
            {detailsData?.genres.map((item) => item.title).join(", ")}
          </p>
          <p
            className={` cursor-pointer ${
              lineClamp ? "w-full " : " w-[50%] line-clamp-5"
            }`}
            onClick={() => setLineClamp(!lineClamp)}
          >
            {detailsData?.summary}
          </p>
          <div className=" pt-[30px]">
            <button
              type="button"
              className=" border rounded-[25px] px-[20px] py-[10px]"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </CustomSpinner>
  );
}
