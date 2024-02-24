import { FlatList } from "react-native";

import { styles } from "./styles";

import { FilterProps } from "./filters";

import { Filter } from "../Filter";

export function Filters({ filters, filter, onChange }: FilterProps) {
    return (
        <FlatList
            data={filters}
            keyExtractor={item => item}
            renderItem={({ item }) => <Filter filter={item} selected={item === filter} onPress={() => onChange(item)} />}
            horizontal
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.content}
        />
    )
}