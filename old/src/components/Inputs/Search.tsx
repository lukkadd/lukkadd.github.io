import styles from "./Search.module.css"
import {
    type HTMLProps,
    useRef,
    forwardRef,
    ForwardedRef,
    useImperativeHandle,
} from "react"
import { X, MagnifyingGlass } from "@phosphor-icons/react"

const Search = forwardRef(function Search(
    { className, ...rest }: HTMLProps<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
) {
    const innerRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement)
    return (
        <label htmlFor="search" className={styles.searchWrapper}>
            <div className="inline-block w-full relative">
                <input
                    className={`${styles.search} ${className}`}
                    {...rest}
                    ref={innerRef}
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search..."
                />
                <button
                    className={styles.clearIcon}
                    onClick={() => {
                        if (innerRef.current) innerRef.current.value = ""
                    }}
                >
                    <X className="h-6" />
                </button>
            </div>
            <button className={styles.searchIcon}>
                <MagnifyingGlass size={24} />
            </button>
        </label>
    )
})

export default Search
