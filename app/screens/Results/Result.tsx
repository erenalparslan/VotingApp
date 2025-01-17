import { View, Text } from 'react-native'
import React from 'react'
import  {RESULTS_SUBSCRIPTION}  from '@/app/graphql/queries'
import { useSubscription } from "@apollo/client";
import Loading from '@/app/components/Loading';
import ResultItem from './ResultItem';

const Results = ({ id }) => {
    const { loading, error, data } = useSubscription(RESULTS_SUBSCRIPTION, {
        variables: {
            id
        }
    })

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Text>{JSON.stringify(error)}</Text>
    }

    const { options } = data.questions_by_pk
    const total = options.reduce(
        (total, item) => total + item.answers_aggregate.aggregate.count, 0
    )

    console.log("total", total)
    return (
        <View>
            {options.map((item) => (
                <ResultItem item={item} key={item.id} total={total} />
            ))}
        </View>
    )
}

export default Results
