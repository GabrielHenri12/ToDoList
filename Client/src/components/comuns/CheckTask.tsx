import { Checkbox, Text } from "@chakra-ui/react";

export type ListTasks = {
    task: string,
    done: boolean,
    id: number
}

export default (props: ListTasks) => {
    return (
        <Checkbox
            pt="10px"
            border='#ecc'
            colorScheme='linkedin'
            alignItems='baseline'
            isChecked={props.done}
            key={props.id}
        >
            <Text fontSize='larger' color='white'>
                {props.task}
            </Text>
        </Checkbox>
    )
}