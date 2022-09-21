import { Blog } from "@prisma/client";
import { ApolloError } from "apollo-server";
import { ERROR_CODES, ERROR_MESSAGES } from "../../../../graphql/errors/errors";
import { MutationLikeOrDislikeBlogArgs } from "src/graphql/generated/graphql";
import { Context } from "../../../../types";

export default {
    likeOrDislikeBlog: async (
        _: any,
        args: MutationLikeOrDislikeBlogArgs,
        ctx: Context
    ): Promise<Blog> => {
        const { blogId, email } = args.input;

        const blog = await ctx.prisma.blog.findUnique({
            where: { id: blogId },
        });

        if (!blog) {
            throw new ApolloError(
                ERROR_MESSAGES.BLOG_NOT_FOUND,
                ERROR_CODES.BLOG_NOT_FOUND
            );
        }

        const blogLikers = await ctx.prisma.blogMember.findMany({
            where: { likedBlogs: { some: { id: blogId } } },
        });

        const blogLikersEmails = blogLikers.map((liker) => liker.email);

        const isBlogLikedByTheMember = blogLikersEmails.includes(email);

        // Unlike if the member already liked the blog
        if (isBlogLikedByTheMember) {
            return await ctx.prisma.blog.update({
                where: { id: blogId },
                data: {
                    likes: {
                        disconnect: { email },
                    },
                },
            });
        }

        // Like if the member had not yet liked the blog
        // Create the member if it does not exist
        return await ctx.prisma.blog.update({
            where: { id: blogId },
            data: {
                likes: {
                    connectOrCreate: {
                        create: {
                            email,
                        },
                        where: { email },
                    },
                },
            },
        });
    },
};
