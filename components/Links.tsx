import SpotifyIcon from './icons/SpotifyIcon';
import IconLink from './IconLink';

const Links = () => (
  <div className={'flex justify-center gap-[5vw]'}>
    <IconLink
      label="Spotify Profile"
      href="https://open.spotify.com/user/1165742894?si=c3dfeed5c421480f"
      icon={<SpotifyIcon />}
    />
  </div>
);

export default Links;
