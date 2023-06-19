import {useState} from 'react'
import './App.css'
import {Modal} from "modal-rml";
import 'modal-rml/dist/style.css'

function App() {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <Modal visible={modalVisible}/>
            <button onClick={() => setModalVisible(!modalVisible)}>Toggle Modal</button>
        </>
    )
}

export default App
