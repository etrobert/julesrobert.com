import SpotifyIcon from './icons/SpotifyIcon';
import IconLink from './IconLink';
import InstagramIcon from './icons/InstagramIcon';

const Links = () => (
  <div className={'flex justify-center gap-[5vw]'}>
    <IconLink
      label="Spotify Profile"
      href="https://open.spotify.com/user/1165742894?si=c3dfeed5c421480f"
      icon={<SpotifyIcon />}
    />
    <IconLink
      label="Instagram Profile"
      href="https://www.instagram.com/jules_rbt2"
      icon={<InstagramIcon />}
    />
  </div>
);

export default Links;
