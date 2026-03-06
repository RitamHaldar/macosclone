import MacWndow from "./MacWndow"

const Spotify = ({ windowname, setwindowState }) => {
    return (
        <MacWndow windowname={windowname} setwindowState={setwindowState}>
            <div className="spotify-container">
                <iframe data-testid="embed-iframe" style={{ borderRadius: 12 + 'px' }} src="https://open.spotify.com/embed/playlist/6SAUxRqgv0EdwHHnjBRmoE?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWndow>

    )
}

export default Spotify