#Blog API

- Front:
    - Get all posts
    - Get specific post
    - Get all categories
    - Get posts filtered by category
    - Get all post created by logged user
    - Get all post filtered by user
    - Pagination of posts
    - CRUD on posts
    - Create categories

    ```json
    {
        "total": 68,
        "prev" : 'localhost:9000/api/v1/posts?offset=51&limit=60',
        "next" : 'localhost:9000/api/v1/posts?offset=61&limit=68',
        "data" : [
            {
                "id" : 1,
                "title": "example",
                "content" : "Lorem ipsum",
                "createdBy" : {
                    "id" : "20",
                    "name": "Jane Doe",
                    "email": "test@test.com"
                },
                "category": {
                    "id" : 4,
                    "name": "Technology"
                }
            }
        ]
    }

/api/v1

/users
    - /me
    - /me/posts
    - /me/posts/:id
    - /:id

/categories
    - /:id
    - /:id/posts

/posts
    - /:id