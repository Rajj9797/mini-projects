import React, { useState } from "react";
import styles from "./HomePage.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

export default function Homepage() {

    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleClick = () => {
        setIsFormOpen(true);
    }
    return (
        <div className={styles.modal}>
            <h1 className={styles.title}>User Details Modal</h1>
            <Button handleClick={handleClick} variant="primary">
                Open Form
            </Button>
            <Modal isOpen={isFormOpen} setIsOpen={setIsFormOpen}>
                <Form />
            </Modal>
        </div>
    );
}
