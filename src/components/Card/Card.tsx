import type { CollectionEntry } from "astro:content"
import "./Card.css"
import type { HTMLProps } from "react"

export default function Card({
    post,
    ...rest
}: { post: CollectionEntry<"blog"> } & HTMLProps<HTMLLIElement>) {
    return (
        <li
            className={`border-2 border-blue-accent relative list-none container-card`}
            {...rest}
        >
            <CardTitle post={post} />
            <CardContent post={post} />
            <CardId post={post} />
            <CardTagList post={post} />
        </li>
    )
}

function CardId({ post }: { post: CollectionEntry<"blog"> }) {
    return (
        <div
            className={`absolute -top-5 -right-3 border-8 border-gray-medium px-1
            bg-blue-accent font-nasa font-semibold text-gray-medium`}
        >
            #{post.data.id}
        </div>
    )
}

function CardContent({ post }: { post: CollectionEntry<"blog"> }) {
    return (
        <div className={`flex flex-col m-3 gap-3 card-content-wrapper`}>
            <img
                src={post.data.image.src}
                alt={post.data.image.alt}
                className={`border-2 border-offwhite relative
                            h-full flex-shrink-0 object-cover aspect-[4/3]`}
            />
            <div className="flex-grow flex flex-col gap-2 relative pb-9">
                <div className="flex justify-between gap-2">
                    <p>
                        <label className="uppercase font-nasa font-normal text-xs text-offwhite">
                            author:
                        </label>
                        <span className="inline-block">{post.data.author}</span>
                    </p>
                    <p>
                        <label className="uppercase font-nasa font-normal text-xs text-offwhite">
                            Star date:
                        </label>
                        <span className="inline-block">
                            {post.data.publishDate.toLocaleDateString()}
                        </span>
                    </p>
                </div>
                <div className="flex-grow">
                    <label className="uppercase font-nasa font-normal text-xs text-offwhite">
                        description:
                    </label>
                    <p className={`text-ellipsis card-content`}>
                        {post.data.description}
                    </p>
                </div>
            </div>
            <a
                href={post.slug}
                className="text-gray-medium bg-blue-accent float-right self-end font-nasa px-2 hover:text-white absolute right-3 bottom-4 hover:text-glow-sm-white"
            >
                Read more...
            </a>
        </div>
    )
}

function CardTitle({ post }: { post: CollectionEntry<"blog"> }) {
    return (
        <h3
            className={`flex flex-wrap items-end gap-2
                        font-nasa uppercase text-gray-medium
                        m-3 pl-2 bg-offwhite`}
        >
            <a
                href={post.slug}
                className="hover:text-white hover:text-glow-sm-white"
            >
                {post.data.title}
            </a>
            {post.data.relatedUrls.length > 0 && (
                <span>
                    {"- "}
                    {post.data.relatedUrls.map((url, index) => {
                        //prettier-ignore
                        return ( url.slug !== post.slug ? 
                                <span key={index}>
                                    <a href={url.slug} className="underline hover:text-white hover:text-glow-sm-white">{index + 1}</a>{index !=post.data.relatedUrls.length - 1 && ", "}
                                </span>
                                :
                                <span key={index}>
                                    {index + 1}{index !=post.data.relatedUrls.length - 1 && ", "}
                                </span>
                            )
                    })}
                </span>
            )}
        </h3>
    )
}

function CardTagList({ post }: { post: CollectionEntry<"blog"> }) {
    return (
        <ul
            className={`font-nasa text-sm whitespace-nowrap text-ellipsis
                        absolute right-1 -bottom-3 px-1 
                        flex justify-end max-w-[95%] flex-wrap overflow-hidden h-6`}
        >
            {post.data.tags.map((tag, index) => (
                <li className="bg-gray-medium px-1" key={index}>
                    <a
                        href={"/tags/" + tag.slug}
                        className="text-offwhite hover:text-base hover:text-blue-accent hover:text-glow-sm-blue-accent"
                    >
                        /{tag.slug}
                    </a>
                </li>
            ))}
        </ul>
    )
}
