
function ShowPost({post}) {
    console.log(post);

    const { title, body, id, userId } = post;
    return (
        <div className="box">
            <p>id: {id} </p>
            <p>title: {title} </p>
            <p>title: {userId} </p>
            <p>body: {body} </p>
        </div>
    )
}

export default ShowPost;