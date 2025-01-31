import Wrapper from '@/components/shared/Wrapper/Wrapper';
import styles from './About.module.scss';
import Image from 'next/image';
import image from '@/public/pregnant.png';
import Button from '@/components/shared/Button/Button';
import { ROUTES } from '@/utils/constants';

export default function About() {
  return (
    <div className={styles.container}>
      <Wrapper classNames={styles.wrapper}>
        <div>
          <Image src={image} alt="" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.title}>About Genevie</p>
          <p className={styles.description}>
            Starting a family raises a million questions, many of which can’t be
            fully addressed during limited time with our providers. From the big
            questions like, &quot;Will my baby be healthy? How will I know?
            Should I have genetic testing, and which option is best?&quot; to
            the smaller, daily concerns such as, &quot;Is this product safe to
            use?&quot; or &quot;Can I take this supplement or medication?&quot;
            Information online (or from friends) is often generic,
            contradictory, or outdated.
          </p>
          <p className={styles.description}>
            Despite the overwhelming need for reliable guidance, most families
            are never referred to a genetic counselor. For the few who are, it’s
            often a single-visit session later in pregnancy, leaving little time
            for education, testing or proactive planning. Patients need more
            than a brief consultation—they need early access to information and
            ongoing support to make informed testing and family-planning
            decisions.
          </p>
          <p className={styles.description}>
            This critical gap in preconception and prenatal care sparked the
            creation of GENEVIE—a service designed to address real patient
            needs. GENEVIE delivers two pivotal foundations of care:
            evidence-based guidance before pregnancy and ongoing personalized
            support throughout, empowering patients to feel confident and
            informed every step of their reproductive journey. 
          </p>
          <Button isTertiary classNames={styles.button} href={ROUTES.ABOUT}>
            Meet the founder
          </Button>
        </div>
      </Wrapper>
    </div>
  );
}
