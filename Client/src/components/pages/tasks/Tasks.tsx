import { Flex, Heading, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import CheckTask from "../../comuns/CheckTask";
import { AddIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { customScrollbar } from "../../../styles/helpers";
import api from "../../../API/Api";

type TaskTypes = {
    task: string,
    done: boolean,
    id: number
}

export default () => {
    const [newTask, setNewTask] = useState<string>('')
    const [Tasks, setTask] = useState<TaskTypes[]>()

    function getTasks() {
        api
            .get('/tarefas')
            .then(response => setTask(response.data.tarefa))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        api
            .get('/tarefas')
            .then(response => setTask(response.data.tarefa))
            .catch(error => console.log(error))
    }, [])


    function addTask() {
        api
            .post('/tarefas', { task: newTask, done: false })
            .then(response => { setNewTask(''); getTasks() })
            .catch(error => console.log(error))
    }

    function setCheck(id: number, done: boolean) {
        api
            .put(`/tarefas/${id}`, { done: !done })
            .then(response =>  getTasks())
            .catch(error => console.log(error))
    }

    return (
        <Flex flexDirection='column' w='60vw' h='100vh' mt='5%' alignItems='center'>
            <VStack alignItems='flex-start'>
                <Heading color='blue.200' >Adicione sua tarefa:</Heading>
                <InputGroup borderColor='white' w='40vw'>
                    <Input
                        value={newTask}
                        onChange={e => setNewTask(e.target.value)}
                        onKeyDown={(event) => { if (event.key == "Enter") { addTask() } }}
                        type='text'
                        focusBorderColor='white'
                        _hover={{ borderColor: 'white' }}
                        background='blue.200'
                        color='white'
                        _placeholder={{ color: 'white', opacity: '0.6' }}
                        placeholder="Dígite sua tarefa:"
                    />
                    <InputRightElement w='3rem'>
                        <AddIcon cursor='pointer' color='white' onClick={addTask} />
                    </InputRightElement>
                </InputGroup>
            </VStack>
            <VStack mt='7vh' alignItems='flex-start' w='40vw' h='70vh' bg='blue.200' borderRadius='8px' boxShadow='dark-lg' >
                <Flex m='20px' flexDirection='column' w='38vw' overflowY='auto' css={customScrollbar}>
                    {Tasks && Tasks.map(i => <CheckTask task={i.task} done={i.done} id={i.id} setChecked={setCheck} />)}
                    {!Tasks && <Heading>Lista Vazia</Heading>}
                </Flex>
            </VStack>
        </Flex>
    )
}