import type { Dispatch, SetStateAction } from "react"

export interface Itech {
    id: string,
    name: string,
    category: string,
    description: string,
    icon: string,
    rating: number,
    difficulty: string,
    badge: string
}

export interface ItechProps{
    techPromise : Promise<Itech[]>
}

export interface ItechCardProps{
    technologies: Itech[]
    selectedTechnology: Itech[]
    setSelectedTechnology: Dispatch<SetStateAction<Itech[]>>
}

export interface IstackProps{
    technologies: Itech[]
    setSelectedTechnology: Dispatch<SetStateAction<Itech[]>>
}
    