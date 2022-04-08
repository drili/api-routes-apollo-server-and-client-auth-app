import { gql } from '@apollo/client'
export default function ViewerQueryFunction() {
    const ViewerQuery = gql`
        query ViewerQuery {
          viewer {
            id
            email
          }
        }
      `

    return (
        ViewerQuery
    )
}
