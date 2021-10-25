import img from "../constants/images";
import video from "../constants/video";
import { MicroTaskType, TaskType } from "./types";

export const DATA: TaskType[] = [{
    img: img.meditation,
    title: 'Taking care of your personal mindspace',
    subtitle: 'Learn more about meditation'
},
{
    img: img.innerBeing,
    title: 'How to listen to your inner self',
    subtitle: 'Learn more about mindset'
},]

export const microtasks: MicroTaskType[] = [
    {
      type: 'image',
      source: img.innerBeing,
    },
    {
      type: 'image',
      source: img.meditation,

    },
    {
      type: 'video',
      source: video.meditation,
    },
  ];
