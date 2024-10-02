export interface Task {
    id: string;
    title: string;
    tag: number;
    tag_name: string;
    created_at: string;
    updated_at: string;
}

export interface Tag {
    id: number;
    name: string;
}

export interface EditTask {
    id: number;
    title: string;
    tag: number;
}

export interface EditTag {
    id: number;
    name: string;
}

