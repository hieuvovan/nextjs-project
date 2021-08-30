import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/CategoryCard.module.css'

export default function CategoryCard(props) {
  const {title, image} = props;

  return (
    <div className={styles.category_card}>
      <Image className={styles.card_img} src={image} width={480} height={700} width={1300} />
      <div className={`p-6 ${styles.card_content}`}>
        <Link href={`/category/${title.toLowerCase()}`}>
          <a>
            <h3 className={`text-xl font-bold text-center ${styles.card_title}`}>{title}</h3>
            <p className={`uppercase font-medium text-center ${styles.card_label}`}>shop now</p>
          </a>
        </Link>
      </div>
    </div>
  )
}
