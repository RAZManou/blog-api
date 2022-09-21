import { Content } from "@prisma/client";
import { ApolloError } from "apollo-server";
import { ERROR_CODES, ERROR_MESSAGES } from "../../../../graphql/errors/errors";
import { MutationUpdateContentArgs } from "src/graphql/generated/graphql";
import { Context } from "../../../../types";

export default {
    updateContent: async (
        _: any,
        args: MutationUpdateContentArgs,
        ctx: Context
    ): Promise<Content> => {
        const { contentId, title, description } = args.input;

        const content = await ctx.prisma.content.findUnique({
            where: { id: contentId },
        });

        if (!content) {
            throw new ApolloError(
                ERROR_MESSAGES.CONTENT_NOT_FOUND,
                ERROR_CODES.CONTENT_NOT_FOUND
            );
        }

        const updatedContent = await ctx.prisma.content.update({
            where: { id: contentId },
            data: {
                title: title || undefined,
                description: description || undefined,
            },
        });

        return updatedContent;
    },
};
