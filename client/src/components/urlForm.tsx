import { useEffect, useState } from 'react';
import { Alert, Button, Card, Form, InputGroup } from 'react-bootstrap';
import { UrlType } from '../models/urlModel';
import { createShortUrl } from '../services/urlService';

const UrlForm = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [isValidUrl, setIsValidUrl] = useState({ status: false, message: '' });
    const [createdUrl, setCreatedUrl] = useState({} as UrlType);

    useEffect(() => {
        // checkValidityURL();
    }, [])


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

    const onUrlValueChange = async (event: any) => {
        const longUrl = event.target.value;
        await setInputUrl(longUrl);
        checkValidityURL();
    }

    const resetUrl = () => {
        setCreatedUrl({} as UrlType);
        setInputUrl('');
    }

    const checkValidityURL = () => {
        const urlPattern = new RegExp(
            /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        );
        const urlValidity = urlPattern.test(inputUrl);
        if (urlValidity) {
            setIsValidUrl({ status: true, message: '' });
        } else {
            setIsValidUrl({ status: false, message: 'Incorrect URL format' });
        }
    }

    return (
        <Card className='mt-5 w-auto'>
            <Card.Header>Convert URL</Card.Header>
            <Card.Body className="text-start">
                <Form noValidate >
                    <Form.Label htmlFor="basic-url">Input your long URL and click convert to short</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Long URL"
                            aria-label="Long URL"
                            aria-describedby="basic-addon2"
                            onChange={onUrlValueChange}
                            value={inputUrl}
                            isInvalid={isValidUrl.message !== ''}
                        />
                        <Button variant="outline-primary" id="button-short" disabled={inputUrl === '' || inputUrl === undefined || isValidUrl.message !== '' ? true : false} onClick={saveUrl}>
                            Short
                        </Button>
                        <Form.Control.Feedback type="invalid">{isValidUrl.message}</Form.Control.Feedback>
                    </InputGroup>
                </Form>
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