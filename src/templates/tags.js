import React from 'react'
import {Link, graphql} from 'gatsby';

import Layout from '../components/layout';
import { slugify } from '../util/utilityFunctions';

const Tags = ({pageContext}) => {
    const {tags} = pageContext;
    return (
        <Layout>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolores suscipit alias amet minus, unde eaque harum blanditiis aut eos neque quod inventore iste et doloremque animi maiores officia eum!

            <ul>
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