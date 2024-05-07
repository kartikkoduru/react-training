import { Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import Cake from "./Cake";

export default function Search() {
    var [query, setQuery] = useSearchParams()
    var text = query.get("q");
    var [cakes, setCakes] = useState();

    useEffect(() => {
        getCakeList()
    }, [cakes]);

    function getCakeList() {
        axios({
            url: "http://apibyauw.eu-4.evennode.com/api/searchcakes?q=" + text,
            method: "get"
        }).then((response) => {
            console.log('Response from API: ' + response);
            setCakes(response.data.data);
            console.log('cakes:' + cakes);
        },
            (error) => {
                console.log('Error from API: ' + error);
            })
    }

    return (
        <>
            <Row>
                {
                    cakes?.map((each, index) => {
                        return < Cake data={each} key={index} />
                    })
                }
            </Row>
        </>
    )
}