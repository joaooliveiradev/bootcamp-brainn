const PlayerVideo = ({ url, width, height }) => {
    const embedUrl = url.substring(url.indexOf(`=`)).substring(1);
    return (
        <div>
            <iframe width={width} height={height} src={`https://www.youtube.com/embed/${embedUrl}`} title="YouTube video player" allow="fullscreen"></iframe >
        </div>
    )
}

PlayerVideo.defaultProps = {
    url: 'https://www.youtube.com/watch?v=0R1PaXAm3qo',
    width: '300px',
    height: '200px'
}
export default PlayerVideo