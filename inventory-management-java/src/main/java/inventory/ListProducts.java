package inventory;

import javax.swing.*;
import java.awt.*;
import java.io.IOException;

public class ListProducts extends JFrame {
    JPanel panel;

    JTextArea list;

    ListProducts() throws IOException {
        this.setTitle("List Products");
        this.setSize(350, 300);
        this.setLocationRelativeTo(null);
        this.setResizable(false);

        panel = new JPanel();
        panel.setLayout(new FlowLayout());
        this.add(panel);

        list = new JTextArea();
        list.setEditable(false);
        list.setPreferredSize(new Dimension(300, 300));
        list.setText(""+Produto.printRight(Produto.getItemsFromTxt()));
        panel.add(list);
        this.setVisible(true);
    }
}
