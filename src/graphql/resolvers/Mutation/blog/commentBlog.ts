import { Comment } from "@prisma/client";
import { ApolloError } from "apollo-server";
import { ERROR_CODES, ERROR_MESSAGES } from "../../../../graphql/errors/errors";
import { MutationCommentBlogArgs } from "src/graphql/generated/graphql";
import { Context } from "../../../../types";

export default {
    commentBlog: async (
        _: any,
        args: MutationCommentBlogArgs,
        ctx: Context
    ): Promise<Comment> => {
        const { blogId, email, name, content } = args.input;

        const blog = await ctx.prisma.blog.findUnique({
            where: { id: blogId },
        });

        if (!blog) {
            throw new ApolloError(
                ERROR_MESSAGES.BLOG_NOT_FOUND,
                ERROR_CODES.BLOG_NOT_FOUND
            );
        }

        const createdComment = await ctx.prisma.comment.create({
            data: {
                content,
                blog: { connect: { id: blogId } },
                author: {
                    connectOrCreate: {
                        create: {
                            email,
                            name,
                        },
                        where: {
                            email,
                        },
                    },
                },
            },
        });

        return createdComment;
    },
};
