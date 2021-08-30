import Image from 'next/image'

export default function CategoryCard(props) {
  const {title, image} = props;

  return (
    <div className="category_card">
      <Image src={image} />
    </div>
  )
}
