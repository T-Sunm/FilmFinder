import React, { useState } from "react";

import "./style.scss";

import { PlayIcon } from "../../../assets/PlayIcon";
import VideoPopup from "../VideoPopup/VideoPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../../../Hooks/useFetch";
import { BtnCategory } from "../../../components/Button/BtnCategory";
import LoadingSkeleton from "../../../components/Loading/LoadingSkeleton";

const VideosSection = ({ id, mediaType, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const data = useFetch(`/${mediaType}/${id}/videos?language=en-US`)
    return (
        <div className="px-14 my-[50px]">
            <div className="">
                <BtnCategory title={'Official Videos'} />
                {!loading && data ? (
                    <div className="my-4">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={5}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {data?.data?.results?.map((video) => (
                                <SwiperSlide
                                    key={video.key}
                                    onClick={() => {
                                        setVideoId(video.key)
                                        setShow(true)
                                    }}
                                >
                                    <div className="videoThumbnail">
                                        <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                                        <PlayIcon />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {Array(6).fill(0).map((item, i) => (
                            <SwiperSlide>
                                <div key={i} className="videoThumbnail mt-5 ">
                                    <LoadingSkeleton className="w-[100%] h-[100px] rounded-lg" />
                                    <PlayIcon />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                )}
            </div>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;