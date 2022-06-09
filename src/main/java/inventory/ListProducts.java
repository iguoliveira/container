package inventory;

import javax.swing.*;
import java.awt.*;

public class ListProducts extends JFrame {
    JPanel panel;

    JTextArea list;

    ListProducts(){
        this.setTitle("List Products");
        this.setSize(350, 300);
        this.setResizable(false);

        panel = new JPanel();
        panel.setLayout(new FlowLayout());
        this.add(panel);

        list = new JTextArea();
        list.setEditable(false);
        list.setText(txtFormatation.getProductItems());
        panel.add(list);
        this.setVisible(true);
    }
}
