import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';
import IconLink from './IconLink';

const Links = () => (
  <div className={'flex justify-center gap-[5vw]'}>
    <IconLink
      label="Linkedin Profile"
      href="https://www.linkedin.com/in/etienne-robert-dev/"
      icon={<LinkedinIcon />}
    />
    <IconLink
      label="Instagram Profile"
      href="https://www.instagram.com/thesoft.emperor"
      icon={<InstagramIcon />}
    />
  </div>
);

export default Links;
