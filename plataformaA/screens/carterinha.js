import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';


import perfil from "../assets/lucas.jpg";

import logo from "../assets/logo.png"; 

export default function Carteirinha({ navigation }) {
return (
    <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnVoltar}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.tituloHeader}>Carteirinha Digital</Text>
        <View style={{ width: 28 }} />
    </View>

    <View style={styles.content}>
        

        <View style={styles.card}>

            <View style={styles.cardTopo}>
                <Image source={logo} style={styles.logoUnisep} resizeMode="contain" />
                <Text style={styles.textoTopo}>Carteira de Identificação Estudantil</Text>
            </View>


            <View style={styles.cardBody}>
                <View style={styles.rowPerfil}>
                    <Image source={perfil} style={styles.fotoPerfil} />
                    <View style={styles.dadosPessoais}>
                        <Text style={styles.label}>Nome do Aluno</Text>
                        <Text style={styles.valor}>Lucas Vieira</Text>
                        
                        <Text style={styles.label}>RA</Text>
                        <Text style={styles.valor}>202300159</Text>
                    </View>
                </View>

                <View style={styles.linhaDivisoria} />

                <View style={styles.dadosCurso}>
                    <Text style={styles.label}>Curso</Text>
                    <Text style={styles.valor}>Análise e Desenv. de Sistemas</Text>
                    
                    <View style={styles.rowInfo}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.label}>Validade</Text>
                            <Text style={styles.valor}>12/2025</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.label}>CPF</Text>
                            <Text style={styles.valor}>***.456.789-**</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.qrCodeArea}>
                    <View style={styles.qrPlaceholder}>
                        <Ionicons name="qr-code-outline" size={80} color="#2c3b48" />
                    </View>
                    <Text style={styles.qrTexto}>Escaneie para validar</Text>
                </View>
            </View>

            <View style={styles.cardFooter} />
        </View>

    </View>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
},
header: {
    backgroundColor: '#c8003c',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
},
tituloHeader: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
},
content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
},
card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    overflow: 'hidden', 
},
cardTopo: {
    backgroundColor: '#2c3b48',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
},
logoUnisep: {
    width: 120, 
    height: 40,
    tintColor: '#fff', 
    marginBottom: 5,
},
textoTopo: {
    color: '#fff',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
},
cardBody: {
    padding: 20,
},
rowPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
},
fotoPerfil: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#c8003c',
},
dadosPessoais: {
    marginLeft: 15,
    flex: 1,
},
label: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
},
valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
},
linhaDivisoria: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
},
rowInfo: {
    flexDirection: 'row',
    marginTop: 10,
},
qrCodeArea: {
    alignItems: 'center',
    marginTop: 25,
},
qrPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
},
qrTexto: {
    marginTop: 8,
    fontSize: 12,
    color: '#999',
},
cardFooter: {
    height: 15,
    backgroundColor: '#c8003c',
}
});