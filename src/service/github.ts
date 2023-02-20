const GITHUB_API_URL = "https://raw.githubusercontent.com/callmeyan/react-page-demo/data"

interface _Article {
    id: number
    title: string
    category: number
    time: string
}

export interface ArticleItem extends _Article {
    content: string
}

export interface ArticleListItem extends _Article {
    url: string
}

function request<T>(api: string) {
    return new Promise<T>((resolve, reject) => {
        fetch(`${GITHUB_API_URL}${api}`).then(r => r.json()).then(resolve).catch(reject);
    });
}

export function articleList() {
    return request<ArticleListItem[]>('/list.json')
}

export function articleDetail(id: string) {
    return request<ArticleItem>(`/article/${id}.json`)
}