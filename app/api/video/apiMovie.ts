import prisma from "../../utils/db";

interface iMovie {
    id: number;
    imageString: string;
    title: string;
    age: number;
    duration: number;
    overview: string;
    release: number;
    videoSource?: string;
    category?: string;
    youtubeString: string;
    WatchLists?: Array<{ id: string ; userId?: string | null}>;
    createdAt?: Date;
}

export async function getDataMovie()  {
    try {
    const data = await prisma.movie.findFirst ({
      select: {
        title: true,
        overview: true,
        videoSource: true,
        imageString: true,
        release: true,
        duration: true,
        id: true,
        age: true,
        youtubeString: true,
      },
    });
    return data;
  } catch (error) {
    return null;
  }}

  //TODO: add // : Promise<iMovie[]|null>
export async function fetchMoviesByUserId(userId: string){
    try {
    const data = await prisma.movie.findMany({
      select: {
        id: true,
        overview: true,
        title: true,
        WatchLists: {
          where: {
            userId: userId,
          },
        },
        imageString: true,
        youtubeString: true,
        age: true,
        release: true,
        duration: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
    });

    return data;
  } catch (error) {
    return null;
  }}

//   export async function createVideos(data1: Partial<iMovie>) {
//     try {
//       const result = await prisma.movie.createMany({
//         data: [data1],
//       });
//       return result;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
// }
