import commentBlog from "./commentBlog";
import createBlog from "./createBlog";
import likeOrDislikeBlog from "./likeOrDislikeBlog";

export default {
    ...createBlog,
    ...commentBlog,
    ...likeOrDislikeBlog,
};
