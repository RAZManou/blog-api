import { Blog, Comment, Content } from "@prisma/client";
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
};
