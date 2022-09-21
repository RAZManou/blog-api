import { Blog, Comment, Content } from "@prisma/client";
import { BlogRecentPostsArgs } from "src/graphql/generated/graphql";
import { Context } from "../../../types";

export default {
    contents: async (blog: Blog, _: any, ctx: Context): Promise<Content[]> => {
        return await ctx.prisma.blog
            .findUnique({
                where: { id: blog.id },
            })
            .contents();
    },
    comments: async (blog: Blog, _: any, ctx: Context): Promise<Comment[]> => {
        return await ctx.prisma.blog
            .findUnique({
                where: { id: blog.id },
            })
            .comments();
    },
    commentsCount: async (
        blog: Blog,
        _: any,
        ctx: Context
    ): Promise<number> => {
        return await ctx.prisma.comment.count({
            where: {
                blogId: blog.id,
            },
        });
    },
    recentPosts: async (
        blog: Blog,
        args: BlogRecentPostsArgs,
        ctx: Context
    ): Promise<Blog[]> => {
        return await ctx.prisma.blog.findMany({
            where: { id: { not: blog.id } },
            orderBy: {
                createdAt: "desc",
            },
            take: args.count || 4,
        });
    },
};
