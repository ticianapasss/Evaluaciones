from kivymd.app import MDApp
from kivymd.uix.label import MDLabel  # Error: debería ser MDLabel
from kivymd.uix.button import MDRaisedButton
from kivymd.uix.boxlayout import MDBoxLayout
from kivymd.uix.screen import Screen
from kivymd.uix.toolbar import MDTopAppBar

class ContadorApp(MDApp):
    def build(self):
        self.contador = 0  # sacamos comillas pq si no sería string

        layout = MDBoxLayout(orientation="vertical", padding=20)  # cambiamos la orientacion horizontal por vertical
        layout.add_widget(MDTopAppBar(title="Contador KivyMD"))  # usar 'title'

        self.label = MDLabel(
            text=str(self.contador), #convertimos en string para mostrar en pantalla
            halign="center",
            font_style="H3"
        )
        layout.add_widget(self.label)

        btn_layout = MDBoxLayout(spacing=20)
        btn_mas = MDRaisedButton(text="+", on_release=self.incrementar)  # Error: propiedad correcta es on_release
        btn_menos = MDRaisedButton(text="-", on_release=self.decrementar)
        btn_layout.add_widget(btn_menos)
        btn_layout.add_widget(btn_mas)

        layout.add_widget(btn_layout)

        screen = Screen()
        screen.add_widget(layout)
        return screen

    def incrementar(self, instance):
        self.contador += 1  # Error: contador es string
        self.label.text = str(self.contador)

    def decrementar(self, instance):
        self.contador -= 1  # Error: contador es string
        self.label.text = str(self.contador)

if __name__ == "__main__":
    MDApp().run()