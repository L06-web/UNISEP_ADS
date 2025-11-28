import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';


import perfil from "../assets/lucas.jpg"; 

export default function Perfil({ navigation }) {
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
                        <Text style={styles.cardTitulo}>Disciplinas Ativas</Text>
                        <Text style={styles.cardValor}>4</Text>
                    </View>
                </View>
                <Text style={styles.titulo}>Serviços</Text>
                
                <TouchableOpacity 
                    style={styles.card} 
                    onPress={() => navigation.navigate('carteirinha')}
                >
                    <Ionicons name="card-outline" size={30} color={'#c8003c'} />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.cardTitulo}>Carteirinha Digital</Text>
                        <Text style={styles.cardValor}>Visualizar</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
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
        marginTop: 15,
        textAlign: 'center',
        paddingHorizontal: 20
    },
    conteudo: {
        flex: 1,
        padding: 20
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 10
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 15,
        width: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2
    },
    cardTitulo: {
        fontSize: 14,
        color: '#555'
    },
    cardValor: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    }
});