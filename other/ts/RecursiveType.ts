type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [key: string]: JSONValue };

const data: JSONValue = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};



// for tree

interface TreeNode {
    value: string;
    children?: TreeNode[];
}

const tree: TreeNode = {
    value: "root",
    children: [
        { value: "child1" },
        {
            value: "child2",
            children: [
                { value: "grandchild1" }
            ]
        }
    ]
};
