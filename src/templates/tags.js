import React from 'react'
import {Link} from 'gatsby';

import Layout from '../components/layout';
import { slugify } from '../util/utilityFunctions';

import TagsTemplate from './templatesStyling/tagsTemplate.module.scss'

const Tags = ({pageContext}) => {
    const {tags} = pageContext;
    return (
        <Layout>
            <h2>tag list</h2>

            <ul className={TagsTemplate.separateTagList}>
                {tags.map(tag => (
                    <li key={tag}>
                        <Link to={`/tags/${slugify(tag)}`}>{tag}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default Tags; 