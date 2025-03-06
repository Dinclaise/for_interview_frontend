type RenameKeys<T> = {
    [P in keyof T as `new_${string & P}`]: T[P];
};

interface User {
    id: number;
    name: string;
}

type Renamed = RenameKeys<User>;
// {
//   new_id: number;
//   new_name: string;
// }
