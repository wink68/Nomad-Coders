import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
    nameOfMyUser: string,
}

function Followers() {
    const { nameOfMyUser } = useOutletContext<IFollowersContext>();
    return <h2>Heare are {nameOfMyUser}의 followers</h2>;
}
export default Followers;
