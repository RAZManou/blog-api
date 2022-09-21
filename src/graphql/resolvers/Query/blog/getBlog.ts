import { Blog } from "@prisma/client";
import { ApolloError } from "apollo-server";
import { ERROR_CODES, ERROR_MESSAGES } from "../../../../graphql/errors/errors";
import { QueryGetBlogArgs } from "src/graphql/generated/graphql";
import { Context } from "../../../../types";

export default {
    getBlog: async (
        _: any,
        args: QueryGetBlogArgs,
        ctx: Context
    ): Promise<Blog> => {
        const { id } = args;

        const blog = await ctx.prisma.blog.findUnique({
            where: { id },
        });

        if (!blog) {
            throw new ApolloError(
                ERROR_MESSAGES.BLOG_NOT_FOUND,
                ERROR_CODES.BLOG_NOT_FOUND
            );
        }

        return blog;
    },
};
