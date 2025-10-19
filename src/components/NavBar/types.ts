export interface INavBar {
    currentPage: number;
    totalPages: number;
    first: () => void;
    previus: () => void;
    next: () => void;
    last: () => void;
    pageUser: (param: number) => void;
}