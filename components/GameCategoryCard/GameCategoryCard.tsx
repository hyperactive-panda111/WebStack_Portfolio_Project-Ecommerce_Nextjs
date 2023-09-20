import { FC } from "react";
import gameCategoryCardClassNames from "./gameCategoryCardClassNames";
import Link from "next/link";
import Image from "next/image";

interface GameCatergoryCardProps {
    categoryImage: string;
    categoryName: string;
    slug: string;
}

const GameCategoryCard: FC<GameCatergoryCardProps> = (props) => {
    const { categoryImage, categoryName, slug } = props;
    const {image, name, container, arrow} = gameCategoryCardClassNames;

    return <Link href={`categories/${slug}`} className={container}>
        <Image 
        src={categoryImage} 
        alt={name} 
        className={image} 
        height={200}
        width={200}
        />

        <h3 className={name}>{categoryName}</h3>
        <Image 
        src="/images/arrow.svg"
        alt="view"
        className={arrow} 
        height={20}
        width={20}
        />
           </Link>
}

export default GameCategoryCard;