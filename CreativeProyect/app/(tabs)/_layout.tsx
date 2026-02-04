import { Tabs } from "expo-router"

export default function TabLayout(){
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title: 'Home'}}/>
            <Tabs.Screen name = "sumadora" options={{title: 'Sumadora'}}/>
            <Tabs.Screen name="tablamulti" options={{title: 'Tabla'}}/>
        </Tabs>
    )
}