export const validateUrl = (url: string): string => {
    try {
        const parsed = new URL(url);

        if (
            parsed.protocol !== "http:" &&
            parsed.protocol !== "https:"
        ) {
            throw new Error();
        }

        return parsed.origin;
    } catch {
        throw new Error("Invalid URL");
    }
};