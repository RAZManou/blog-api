import { Blog } from "@prisma/client";
import { ApolloError } from "apollo-server";
import { ERROR_CODES, ERROR_MESSAGES } from "../../../../graphql/errors/errors";
import { MutationDeleteBlogArgs } from "src/graphql/generated/graphql";
import { Context } from "../../../../types";

export default {
    deleteBlog: async (
        _: any,
        args: MutationDeleteBlogArgs,
        ctx: Context
    ): Promise<Blog> => {
        const { blogId } = args;

        const blog = await ctx.prisma.blog.findUnique({
            where: { id: blogId },
        });

        if (!blog) {
            throw new ApolloError(
                ERROR_MESSAGES.BLOG_NOT_FOUND,
                ERROR_CODES.BLOG_NOT_FOUND
            );
        }

        const deletedBlog = await ctx.prisma.blog.delete({
            where: { id: blogId },
        });

        return deletedBlog;
    },
};
