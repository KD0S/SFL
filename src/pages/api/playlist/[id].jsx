import axios from "axios";

const API_KEY = process.env.YOUTUBE_API_KEY

const calculateDaysAgo = (publishedDate) => {
  const currentDate = new Date();
  const publishedAtDate = new Date(publishedDate);

  // Calculate the difference in milliseconds
  const differenceInTime = currentDate - publishedAtDate;

  // Convert from milliseconds to days (1000 ms/s * 60 s/min * 60 min/h * 24 h/d)
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
};


export default async function ServerComponent(req, res) {

    const { id } = req.query;

    const axiosInstance = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        timeout: 5000, // Timeout if necessary
        header: {
          'ContentType': 'program/json',
          // Add all custom headers here
        },
      });
  
    const MusicVideosResponse = await axiosInstance.get('/playlistItems', {
        params: {
            part: 'snippet', // Specify the parts you want
            playlistId: id,
            key: API_KEY, // Your YouTube Data API key
            maxResults: 50, // Optional: specify the number of results
        },
    });

    console.log("test")
    console.log(MusicVideosResponse)

  const transformedData = MusicVideosResponse.data.items.map(item => {

      if(item.snippet.title === "Private video")
        return null;

      const publishedAt = item.snippet.publishedAt;
      const daysAgo = calculateDaysAgo(publishedAt);

      return {
          maxresThumbnail: item.snippet.thumbnails.high?.url, // Fallback to high if maxres doesn't exist
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          daysAgoPublished: daysAgo,
          embedId: item.snippet.resourceId.videoId
      };
  }).filter((item) => {if(!item) return false; else return true;});

  res.status(200).json(transformedData.reverse());

}