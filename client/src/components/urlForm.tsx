import { useState } from 'react';
import { Alert, Button, Card, Form, InputGroup } from 'react-bootstrap';
import { UrlType } from '../models/urlModel';
import { createShortUrl } from '../services/urlService';

const UrlForm = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [createdUrl, setCreatedUrl] = useState({} as UrlType);

    const saveUrl = () => {
        createShortUrl({ longUrl: inputUrl } as UrlType).then((res) => {
            if (res.status) {
                setCreatedUrl(res.data);
            } else {
                const error = { error: res?.message };
                setCreatedUrl(error as UrlType);
            }
        }).catch(err => {
            const error = { error: err?.response?.data?.message || err?.message || "Unknown error" };
            setCreatedUrl(error as UrlType);
        });
    }

    const onUrlValueChange = (event: any) => {
        const longUrl = event.target.value;
        setInputUrl(longUrl);
    }

    const resetUrl = () => {
        setCreatedUrl({} as UrlType);
        setInputUrl('');
    }

    return (
        <Card className='mt-5 w-auto'>
            <Card.Header>Convert URL</Card.Header>
            <Card.Body className="text-start">
                <Form.Label htmlFor="basic-url">Input your long URL and click convert to short</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Long URL"
                        aria-label="Long URL"
                        aria-describedby="basic-addon2"
                        onChange={onUrlValueChange}
                        value={inputUrl}
                    />
                    <Button variant="outline-primary" id="button-short" disabled={inputUrl === '' || inputUrl === undefined ? true : false} onClick={saveUrl}>
                        Short
                    </Button>
                </InputGroup>
                <Button variant="outline-primary" id="button-clear" onClick={resetUrl}>
                    Clear
                </Button>
                {createdUrl.date ? <Alert variant="primary" className="mt-3">
                    Click hear to navigate&nbsp;
                    <a rel="noopener noreferrer" href={createdUrl.longUrl} target="_blank">{createdUrl.shortUrl}</a>
                </Alert> : <></>}
                {createdUrl?.error ? <Alert variant="warning" className="mt-3">
                    {createdUrl?.error}
                </Alert> : <></>}
            </Card.Body>
        </Card>
    );
}

export default UrlForm;