import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import perfil from "../assets/guilherme.jpeg"

export default function Perfil() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={perfil}
                />
                <Text style={styles.nome}>Lucas Vieira</Text>
                <Text style={styles.curso}>Análise e Desenvolvimento de Sistemas</Text>
            </View>

            <View style={styles.conteudo}>
                <Text style={styles.titulo}>Meu Desempenho</Text>
                <View style={styles.card}>
                    <Ionicons name="book-outline" size={30} color={'#0f62fe'} />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.cardTitulo}>Diciplinas Ativas</Text>
                        <Text styles={styles.cardValor}>4</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6f8'
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#c8003c',
        paddingVertical: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 65,
        marginBottom: 10
    },
    nome: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    curso: {
        color: '#EAEAEAEA',
        fontSize: 15,
        marginTop: 15
    },
    conteudo: {
        flex: 1,
        padding: 20
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15
    },
    card:{
        backgroundColor: '#fff',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems:' center',
        padding: 15,
        marginBottom: 15,
        flex: 0.48
    },
    cardTitulo: {
        fontSize: 14,
        color: '#555'
    },
    cardValor: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});