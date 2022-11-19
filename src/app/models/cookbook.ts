export interface Cookbook {

    id: number,
    name:string,
    profileId: number

}

export type CookbookDTO = Pick<Cookbook, 'name' | 'profileId'>