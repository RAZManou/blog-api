import commentBlog from "./commentBlog";
import createBlog from "./createBlog";
import deleteBlog from "./deleteBlog";
import likeOrDislikeBlog from "./likeOrDislikeBlog";
import updateBlog from "./updateBlog";

export default {
    ...createBlog,
    ...commentBlog,
    ...likeOrDislikeBlog,
    ...updateBlog,
    ...deleteBlog,
};
