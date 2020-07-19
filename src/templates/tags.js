import React from 'react'
import {Link} from 'gatsby';

import Layout from '../components/layout';
import { slugify } from '../util/utilityFunctions';

const Tags = ({pageContext}) => {
    const {tags} = pageContext;
    return (
        <Layout>
            <h2>tag list</h2>

            <ul className="separateTagList">
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