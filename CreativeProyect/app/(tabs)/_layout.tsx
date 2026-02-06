import { Tabs } from "expo-router"

export default function TabLayout(){
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title: 'Inicio'}}/>
            <Tabs.Screen name = "sumadora" options={{title: 'Sumadora'}}/>
            <Tabs.Screen name="tablamulti" options={{title: 'Tabla'}}/>
            <Tabs.Screen name="numletter" options={{title: 'Numero a Letra'}}/>
        </Tabs>
    )
}