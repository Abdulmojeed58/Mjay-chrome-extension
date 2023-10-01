
const path = (root: string, sublink: string) => `${root}${sublink}`

const ROOT = '/'
const ROOT_AUTH = '/auth'
const ROOT_PROFILE = '/profile'


export const PATHS = {
    home: {
        root: ROOT,
        feature: '#feature',
        description: '#description'
    },
    auth: {
        root: ROOT_AUTH,
        login: path(ROOT_AUTH, '/login')
    },
    profile: {
        root: ROOT_PROFILE,
        profile: path(ROOT_PROFILE, '/:id')
    },
}