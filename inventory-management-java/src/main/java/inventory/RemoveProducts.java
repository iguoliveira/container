package inventory;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.time.LocalDateTime;

public class RemoveProducts extends JFrame {
    JPanel panel;

    JLabel input_label;
    JTextField input;

    JButton delete;

    JTextArea products;

    RemoveProducts() throws IOException {
        this.setTitle("Remove Products");
        this.setSize(300,250);
        this.setLocationRelativeTo(null);
        this.setResizable(false);

        panel = new JPanel();
        panel.setLayout(new FlowLayout());
        this.add(panel);

        input_label = new JLabel("Name of the Product to be Removed");
        panel.add(input_label);

        input = new JTextField();
        input.setPreferredSize(new Dimension(250, 25));
        panel.add(input);

        delete = new JButton("Delete");
        delete.setForeground(Color.WHITE);
        delete.setBackground(Color.decode("#632218"));
        delete.setBorder(BorderFactory.createEmptyBorder(4, 4, 4, 4));
        delete.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == delete){
                    Log.addToLog("Item " + input.getText() + " was removed from TXT in " + LocalDateTime.now() + "\n");
                    Produto.removeProduct(input.getText());
                    input.setText("");
                }
            }
        });
        panel.add(delete);

        products = new JTextArea();
        products.setText(""+Produto.printRight(Produto.getItemsFromTxt()));
        panel.add(products);

        this.setVisible(true);
    }
}
