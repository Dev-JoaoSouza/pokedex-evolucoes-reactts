import { Loading, LoaderItem } from "./styles";
import { ILoader } from "./types";

const Loader = ({hide}: ILoader) => {
    return (
        <Loading hide={hide}>
            <LoaderItem item={1}></LoaderItem>
            <LoaderItem item={2}></LoaderItem>
            <LoaderItem item={3}></LoaderItem>
            <LoaderItem item={4}></LoaderItem>
            <LoaderItem item={5}></LoaderItem>
            <LoaderItem item={6}></LoaderItem>
            <LoaderItem item={7}></LoaderItem>
            <LoaderItem item={8}></LoaderItem>
            <LoaderItem item={9}></LoaderItem>
            <LoaderItem item={10}></LoaderItem>
            <LoaderItem item={11}></LoaderItem>
            <LoaderItem item={12}></LoaderItem>
            <LoaderItem item={13}></LoaderItem>
            <LoaderItem item={14}></LoaderItem>
            <LoaderItem item={15}></LoaderItem>
            <LoaderItem item={16}></LoaderItem>
            <LoaderItem item={17}></LoaderItem>
            <LoaderItem item={18}></LoaderItem>
            <LoaderItem item={19}></LoaderItem>
            <LoaderItem item={20}></LoaderItem>
        </Loading>
    )
}

export { Loader }