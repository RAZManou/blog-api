import { Blog, Comment } from "@prisma/client";
import { ApolloError } from "apollo-server";
import { ERROR_CODES, ERROR_MESSAGES } from "../../../../graphql/errors/errors";
import {
    MutationCommentBlogArgs,
    MutationUpdateBlogArgs,
} from "src/graphql/generated/graphql";
import { Context } from "../../../../types";

export default {
    updateBlog: async (
        _: any,
        args: MutationUpdateBlogArgs,
        ctx: Context
    ): Promise<Blog> => {
        const { blogId, title, subTitle, coverUri, categories, tags } =
            args.input;

        const blog = await ctx.prisma.blog.findUnique({
            where: { id: blogId },
        });

        if (!blog) {
            throw new ApolloError(
                ERROR_MESSAGES.BLOG_NOT_FOUND,
                ERROR_CODES.BLOG_NOT_FOUND
            );
        }

        const updatedBlog = await ctx.prisma.blog.update({
            where: { id: blogId },
            data: {
                title: title || undefined,
                subTitle: subTitle || undefined,
                coverUri: coverUri || undefined,
                categories: categories || undefined,
                tags: tags || undefined,
            },
        });

        return updatedBlog;
    },
};
