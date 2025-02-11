export type Tutor = {
    id: number,
    name: string,
    courses: string[],
    reviews?:string
};

export const Tutors: Tutor[] = [
    {
        id: 1,
        name: "James",
        courses: ["C#", "TypeScript"],
        reviews:"5stars"
    },
    {
        id: 2,
        name: "Smith",
        courses: ["java", "TypeScript"]
    }
];