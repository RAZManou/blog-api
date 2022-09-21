import { Blog } from "@prisma/client";
import { MutationCreateBlogArgs } from "src/graphql/generated/graphql";
import { Context } from "../../../../types";

export default {
    createBlog: async (
        _: any,
        args: MutationCreateBlogArgs,
        ctx: Context
    ): Promise<Blog> => {
        const { title, subTitle, coverUri, categories, tags, contents } =
            args.input;

        const createdBlog = await ctx.prisma.blog.create({
            data: {
                title,
                subTitle,
                coverUri,
                categories:
                    categories && categories.length ? categories : undefined,
                tags: tags && tags.length ? tags : undefined,
                contents:
                    contents && contents.length
                        ? {
                              create: contents,
                          }
                        : undefined,
            },
        });

        return createdBlog;
    },
};
