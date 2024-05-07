import { Card, Image } from "antd";
import { Link } from "react-router-dom";

export default function Cake(props) {
    return (
        <Card style={{ width: 300, marginLeft: 40 }}>
            <Link to={"/cake/" + props.data.cakeid}>
                <Image preview={false} height={200} src={props.data.image} width={250}></Image>
            </Link>
            <p>{props.data.name}</p>
            <p>{props.data.price}</p>
            {props.data.tag && <p>{props.data.tag}</p>}
        </Card>
    )
}