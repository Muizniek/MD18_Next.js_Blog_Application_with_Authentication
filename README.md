This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



Pievienot info par to kā palais projektu. 


GET /blogs/:id
Description: Fetches details of a specific blog post.
Parameters:
    id (Path Parameter): The unique identifier of the blog post.
Response:
    Success Code: 200 OK
        Body: JSON object containing details of the blog post.
    Error Codes:
        404 Not Found: Blog post not found.

POST /blogs
Description: Adds a new blog post to the database.
Request Body:
    FormData: Form data containing information about the new blog post.
Response:
    Success Code: 200 OK
        Body: No content.
    Error Codes:
        500 Internal Server Error: Unable to add the blog post.

DELETE /blogs/:id
Description: Deletes a specific blog post and its associated comments.
Parameters:
    id (Path Parameter): The unique identifier of the blog post to be deleted.
Response:
    Success Code: 200 OK
        Body: No content.
    Error Codes:
        500 Internal Server Error: Unable to delete the blog post and associated comments.
        404 Not Found: Blog post not found.

POST /blogs/:id/comments
Description: Adds a new comment to a specific blog post.
Parameters:
    id (Path Parameter): The unique identifier of the blog post.
Request Body:
FormData: Form data containing information about the new comment.
Response:
    Success Code: 200 OK
        Body: No content.
    Error Codes:
        500 Internal Server Error: Unable to add the comment.
        404 Not Found: Blog post not found.