class TablaMultiplicar:
    def generar_tabla(self, numero):
        tabla = []
        for i in range (1,11):
            resultado = numero * i
            tabla.append(f"{numero} x {i} = {resultado}")
        return tabla
    
tabla = TablaMultiplicar()
for linea in tabla.generar_tabla(int(input("Dame un valor para generar la tabla: "))):
    print (linea)
