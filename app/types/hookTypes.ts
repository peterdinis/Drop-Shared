export type CopiedValue = string | null;
export type CopyFn = (text: string) => Promise<boolean>;

export type ArrayType = {
    map: Function
}