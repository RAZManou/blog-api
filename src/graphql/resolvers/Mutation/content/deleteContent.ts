import { Content } from "@prisma/client";
import { ApolloError } from "apollo-server";
import { ERROR_CODES, ERROR_MESSAGES } from "../../../../graphql/errors/errors";
import { MutationDeleteContentArgs } from "src/graphql/generated/graphql";
import { Context } from "../../../../types";

export default {
    deleteContent: async (
        _: any,
        args: MutationDeleteContentArgs,
        ctx: Context
    ): Promise<Content> => {
        const { contentId } = args;

        const content = await ctx.prisma.content.findUnique({
            where: { id: contentId },
        });

        if (!content) {
            throw new ApolloError(
                ERROR_MESSAGES.CONTENT_NOT_FOUND,
                ERROR_CODES.CONTENT_NOT_FOUND
            );
        }

        const deletedContent = await ctx.prisma.content.delete({
            where: { id: contentId },
        });

        return deletedContent;
    },
};
