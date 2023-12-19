import Image, { StaticImageData } from 'next/image'

interface CardProps {
    title: string,
    icon: StaticImageData,
    description: string
}

export default function CardServices({ title, icon, description }: CardProps) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg  h-full">
            <Image src={icon} alt={title} className="w-full" />
            <div className="px-6 py-4 bg-slate-300 h-full">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>

    )
}