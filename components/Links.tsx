import SpotifyIcon from './icons/SpotifyIcon';
import IconLink from './IconLink';
import InstagramIcon from './icons/InstagramIcon';

const Links = () => (
  <div className={'flex justify-center gap-[5vw]'}>
    <IconLink
      label="Spotify Profile"
      href="https://open.spotify.com/user/31txgikw4bbkljisga7ebh5tg4vu?nd=1&dlsi=adeba3d7536d49f1"
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
