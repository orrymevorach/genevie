import styles from './Information.module.scss';
import check from 'public/check.png';
import Image from 'next/image';

const items = [
  {
    title: 'Tailored testing options to meet diverse patient needs, including:',
    items: [
      'Carrier Screening',
      'Cancer Predisposition Screening',
      'Comprehensive Genetic and Genomic Testing',
    ],
  },
  {
    title: 'When you refer to Genevie, we’ll handle:',
    items: [
      'Ordering and interpreting genetic testing ',
      'Providing you with detailed, actionable reports',
      'Availability for patient care discussions ',
    ],
  },
];

export default function Information() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>For Providers</h2>
      <p className={styles.description}>
        At Genevie, we are dedicated to elevating patient care through
        comprehensive genetic assessment, cutting-edge testing, and personalized
        guidance for patients throughout their family-building journey. 
      </p>
      <div className={styles.itemsContainer}>
        {items.map(item => (
          <div className={styles.item} key={item.title}>
            <Image src={check} alt="" className={styles.check} />
            <div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <ul>
                {item.items.map(line => (
                  <li key={line} className={styles.line}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
