import React from 'react'
import type { Tag as TagType } from '../../types/Tag'
import Tag from './Tag'

type TagsProps = {
    tags: TagType[]
    className?: string
    numToShow?: number
}

const Tags = (props: TagsProps): React.ReactElement | null => {

    const { tags, className, numToShow } = props;

    if (!tags) return null;

    const defaultClasses = " ";

    const classNames = `${defaultClasses} ${className}`;

    const onRender = (tag: TagType, index: number): React.ReactElement => {

        return <Tag tag={tag} key={tag.name} />
    }

    const toHide = (index: number): boolean => {
        if (!numToShow) return false;
        return index >= numToShow;
    }


    return (
        <div>Tags</div>
    )
}

export default Tags