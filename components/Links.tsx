import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';
import IconLink from './IconLink';

const Links = () => (
  <div className={'flex justify-center gap-[5vw]'}>
    <IconLink
      label="Linkedin Profile"
      href="https://www.linkedin.com/in/ad%C3%A8le-robert-6b7276224"
      icon={<LinkedinIcon />}
    />
    <IconLink
      label="Instagram Profile"
      href="https://www.instagram.com/adele.robert"
      icon={<InstagramIcon />}
    />
  </div>
);

export default Links;
