import { title } from '../app/fonts';
import JustifiedText from './JustifiedText';
import Links from './Links';

const BusinessCardText = () => (
  <div className="text-[1.5rem] lg:text-[2rem]">
    <h1 className={`text-[2em] tracking-tight leading-none ${title.className}`}>
      Jules Robert
    </h1>
    <JustifiedText className={'text-[0.87em] leading-tight'}>
      Japan Expert and Equestrian
    </JustifiedText>
    <Links />
  </div>
);

export default BusinessCardText;
