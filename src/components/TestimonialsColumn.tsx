import { twMerge } from "tailwind-merge";
import Image from 'next/image';



type Testimonials = {
    _id: number;
    text: string;
    imageSrc: string;
    name: string;
    username: string;
}[]

export const TestimonialsColumn = (props: {className?: string; testimonials: Testimonials}) => {
    return (
      <div className={twMerge("flex flex-col gap-6 ites-center mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]", props.className)} >
      {props.testimonials.map(({ text, imageSrc, username, name }) => (
        <div className="card">
          <div className="">{text}</div>
          <div className="flex items-center gap-2 mt-5">
            <Image
              src={imageSrc}
              alt={name}
              className="h-10 w-10 rounded-full"
              height={40}
              width={40}
            />
  
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5 ">
                {name}
              </div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    )
  }