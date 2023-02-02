import fetcher from "./fetcher"

type Body = {
    email: string,
    password: string
}

export const auth = (mode: 'signin' | 'signup', body: Body) => {
    return fetcher(`/${mode}`, body);
};