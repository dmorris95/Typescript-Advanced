import { UserInfoProps } from "../models/UserInfoProps.model";

const UserInfo: React.FC<UserInfoProps> = (props) => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h5>Age: {props.age}</h5>
            <p>Email: {props.email}</p>
        </div>
    )
};

export default UserInfo;