import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const ProjectDetails = ({ project }) => {
  const {
    title = "no title here.",
    images = [],
    techUsed = [],
    features = [],
    details = "no details here.",
    repo = null,
    preview = null,
  } = project;
  return (
    <div className="mt-4 space-y-2">
      <div>
        <h1 className="text-lg text-red-500">{title}</h1>
        <div className="flex gap-4">
          {repo && (
            <Link href={`https://github.com/amrxt1/${repo}`} target="_blank">
              [<span className="underline hover:text-green-400">view code</span>
              ]
            </Link>
          )}
          {preview && (
            <Link href={preview} target="_blank">
              [
              <span className="underline hover:text-green-400">
                live preview
              </span>
              ]
            </Link>
          )}
        </div>
      </div>
      {images.length > 0 && (
        <div className="my-8">
          <Swiper
            modules={[Scrollbar, Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex h-full w-full items-center justify-center"
              >
                <img
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="h-full max-h-96 w-full object-contain shadow-lg md:max-h-[500px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <p className="text-text/70">{details}</p>
      <p>made using: {techUsed.join(", ")}</p>
      {features.length && (
        <div>
          <h2>Features</h2>
          <div className="text-text/70">
            {features.map((f, i) => (
              <p key={i}>- {f}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
