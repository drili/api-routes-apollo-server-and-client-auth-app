import excuteQuery from './db';

export async function CreatePostMessage({message, user}) {
    try {
        const result = await excuteQuery({
            query: 'INSERT INTO post_messages (post_message, post_user)',
            values: [message, user]
        })
    } catch (error) {
        console.log(error)
    }

    return result;
}