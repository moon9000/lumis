export function VideoCard({videoUrl}) {
console.log(videoUrl);
return <iframe width="560" height="315" src={videoUrl} frameborder="0" allowfullscreen></iframe>
}

