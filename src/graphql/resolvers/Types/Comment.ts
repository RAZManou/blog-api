import { BlogMember, Comment } from "@prisma/client";
import { Context } from "../../../types";

export default {
    author: async (
        comment: Comment,
        _: any,
        ctx: Context
    ): Promise<BlogMember | null> => {
        return await ctx.prisma.comment
            .findUnique({
                where: { id: comment.id },
            })
            .author();
    },
};
