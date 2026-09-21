export function parseBlogDate(blog) {
    const t = new Date(blog.date).getTime();
    return Number.isNaN(t) ? 0 : t;
}

export function sortBlogs(list, order = 'newest') {
    const sorted = [...list].sort((a, b) => parseBlogDate(b) - parseBlogDate(a));
    return order === 'oldest' ? sorted.reverse() : sorted;
}

export function getExcerpt(blog, max = 150) {
    const first =
        blog.content?.find((block) => block.type === 'paragraph')?.text || '';
    const clean = first.replace(/\s+/g, ' ').trim();
    if (clean.length <= max) return clean;
    const cut = clean.slice(0, max);
    const lastSpace = cut.lastIndexOf(' ');
    return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut) + '…';
}

export function blogMatchesQuery(blog, query) {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (words.length === 0) return true;
    const haystack = [blog.title, blog.category, blog.author, ...(blog.tags || [])]
        .join(' ')
        .toLowerCase();
    return words.every((word) => haystack.includes(word));
}
