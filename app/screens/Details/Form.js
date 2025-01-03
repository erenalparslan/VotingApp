import { StyleSheet, Text, View } from 'react-native'

import { Box, Button, Radio } from 'native-base'


const Form = ({ options}) => {


    return (
        <Box py={"3"}>
            <Radio.Group  >
                {options.map(options => (
                    <Radio my={1} key={options.id} value={options.id}>{options.text}</Radio>
                ))}
            </Radio.Group>
            <Button mt={5}>Submit</Button>
        </Box>
    )
}

export default Form

const styles = StyleSheet.create({})