import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { UrlType } from '../models/urlModel';
import { getAllUrls } from '../services/urlService';

const ListPage = () => {

    const [urlList, setUrlList] = useState([] as UrlType[]);

    useEffect(() => {
        getUrls();
    }, [])

    const getUrls = () => {
        getAllUrls().then((res) => {
            if (res.status) {
                setUrlList(res.data as UrlType[]);
            } else {
                setUrlList([]);
            }
        }).catch(err => {
            setUrlList([]);
        });
    }

    return (
        <>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Long URL</th>
                        <th>Short URL</th>
                    </tr>
                </thead>
                <tbody>

                    {urlList.map((url, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{index}</td>
                                    <td>{url.longUrl}</td>
                                    <td>
                                        <a rel="noopener noreferrer" href={url.longUrl} target="_blank">{url.shortUrl}</a>
                                    </td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </Table>
            <Button variant="primary" onClick={getUrls}>Refresh</Button>
        </>
    );
}

export default ListPage;
