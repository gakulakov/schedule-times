export interface IMaster {
    name: string,
    phoneNumber: number | string,
    sphere: string,
    description: string,
    id?: any
}

export interface IDay {
    date: string,
    hours: [number],
    allHours?: [number]
}