'use client';
import {motion} from 'framer-motion';
import Image from "next/image";
import React from "react";


type Testimonial = {
  _id: number;
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

type TestimonialsColumnProps = {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
};

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration
}: TestimonialsColumnProps) => {
  return (
    <div className={className}>
      <motion.div animate={{
        translateY: '-50%',
      }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
        duration: duration || 10,
      }} className="flex flex-col gap-6 pb-6">
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ _id, text, imageSrc, username, name }) => (
              <div
                key={`${_id}-${index}`}
                className="card max-w-md p-4 border rounded-xl bg-white shadow-sm"
              >
                <div className="text-gray-700">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                    height={40}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="text-sm text-gray-500 leading-5 tracking-tight">
                      {username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
