import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Field from '../components/field'
import { useQuery } from '@apollo/client'
import ViewerQueryFunction from '../components/query_ViewerQuery'

export default function About() {
    const ViewerQuery = ViewerQueryFunction()
    const router = useRouter()
    const { data, loading, error } = useQuery(ViewerQuery)
    const viewer = data?.viewer
    console.log({viewer})

    async function handleSubmit(event) {
        event.preventDefault()
        const userElement = event.currentTarget.elements.user.value
        const messageElement = event.currentTarget.elements.message.value

        try {
            console.log(userElement)
            console.log(messageElement)
        } catch (error) {
            console.log(error)
        } finally {
            router.push({
                pathname: '/post_message',
                query: {
                    userElement: userElement,
                    messageElement: messageElement
                }
            })
        }
    }

    return (
        <div>
            Welcome to the about page. Go to the{' '}
            <Link href="/">
                <a>Home</a>
            </Link>{' '}
            page.

            <div>
                <h1>Hello {viewer?.email}</h1>
                <p>Post a random message here:</p>
                <div className='form-message'>
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="user"
                            type="text"
                            required
                            label="User"
                        />
                        <Field
                            name="message"
                            type="text"
                            required
                            label="Message"
                        />
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
