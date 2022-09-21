import { Blog } from "@prisma/client";
import { Context } from "../../../../types";

export default {
    getBlogs: async (_: any, args: any, ctx: Context): Promise<Blog[]> => {
        const blogs = await ctx.prisma.blog.findMany();
        return blogs;
    },
};
