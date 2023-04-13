import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertError({ isVisible, dismiss }) {
    const [show, setShow] = useState(isVisible);

    useEffect(() => {

        setShow(isVisible)

    }, [isVisible])

    if (show) {
        return (
            <Alert variant="danger" onClose={() => dismiss()} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Error:
                    The username or password, does not match.
                    Check and try one more time
                </p>
            </Alert>
        );
    }
}

export default AlertError