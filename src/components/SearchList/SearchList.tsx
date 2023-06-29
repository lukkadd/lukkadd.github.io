import { ChangeEvent, useEffect, useMemo, useState } from "react"
import Fuse from "fuse.js"

import type { CollectionEntry } from "astro:content"
import Search from "../Inputs/Search"
import Card from "../Card/Card"

export default function SearchList({
    posts,
}: {
    posts: CollectionEntry<"blog">[]
}) {
    const [search, setSearch] = useState("")
    const [filteredPosts, setFilteredPosts] =
        useState<CollectionEntry<"blog">[]>(posts)

    const fuse = useMemo(
        () =>
            new Fuse(posts, {
                keys: [
                    "data.author",
                    "data.description",
                    "data.relatedUrls.slug",
                    "data.tags.slug",
                    "data.title",
                ],
            }),
        []
    )

    useEffect(() => {
        if (search == "") setFilteredPosts(posts)
        else {
            const results = fuse.search(search)
            setFilteredPosts(results.map((res) => res.item))
        }
    }, [search, posts])

    return (
        <>
            <div className="flex justify-end mb-4">
                <div className="w-full max-w-xs">
                    <Search
                        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                            setSearch(ev.target.value)
                        }
                    />
                </div>
            </div>
            <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                    <Card post={post} key={index}></Card>
                ))}
            </ul>
        </>
    )
}
