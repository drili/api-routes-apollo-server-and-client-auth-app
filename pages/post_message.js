import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Field from '../components/field'
import { useQuery } from '@apollo/client'
import ViewerQueryFunction from '../components/query_ViewerQuery'
import CreatePostMessage from '../lib/CreatePostMessage'

export default function PostMessage() {
    const ViewerQuery = ViewerQueryFunction()
    const { data, loading, error } = useQuery(ViewerQuery)
    const viewer = data?.viewer
    const router = useRouter()
    console.log(router.query);
    
    CreatePostMessage(router.query.userElement, router.query.messageElement)

    return (
        <div>
            Post Message {viewer?.email}
            <h2>Your message:</h2>
            <p>User: {router.query.userElement}</p>
            <p>Message: {router.query.messageElement}</p>

            <p>Uploading to database...</p>
        </div>
    )
}