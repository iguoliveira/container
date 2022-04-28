package delivery;

import javax.swing.*;
import java.awt.*;

public class Pedido extends JFrame{
//    Container
    JPanel container;

//    Pedido Label and Input
    JLabel label;
    JTextField menu;

    Pedido(){
        this.setTitle("Cardapio");
        this.setSize(100,200);
        this.setResizable(false);

        container = new JPanel();
        this.add(container);

        label = new JLabel("Pedido: ");
        container.add(label);

        menu = new JTextField();
        menu.setPreferredSize(new Dimension(100, 25));
        container.add(menu);

        this.setVisible(true);
    }
}
