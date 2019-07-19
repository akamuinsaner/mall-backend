export default (
    list: any[],
    page: number,
    pageSize: number,
) => {
    return {
        data: list.filter((item, index) => {
            return (index >= ((page - 1) * pageSize)) && (index < page * pageSize);
        }),
        meta: {
            page,
            total: list.length,
            pageSize,
        },
    };
};
