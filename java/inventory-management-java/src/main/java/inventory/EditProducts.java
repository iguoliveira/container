package inventory;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.time.LocalDateTime;

public class EditProducts extends JFrame {
    JPanel panel;

    JTextArea products;

    JLabel name_label;
    JTextField name_input;

    JLabel qtd_label;
    JTextField qtd_input;

    JButton submit;

    EditProducts() throws IOException {
        this.setTitle("Edit Product");
        this.setSize(300,250);
        this.setLocationRelativeTo(null);
        this.setResizable(false);

        panel = new JPanel();
        panel.setLayout(new FlowLayout());
        this.add(panel);

        name_label = new JLabel("Name of the Product");
        panel.add(name_label);

        name_input = new JTextField();
        name_input.setPreferredSize(new Dimension(250, 25));
        panel.add(name_input);

        qtd_label = new JLabel("Quantity");
        panel.add(qtd_label);

        qtd_input = new JTextField();
        qtd_input.setPreferredSize(new Dimension(250, 25));
        panel.add(qtd_input);

        submit = new JButton("Edit Product");
        submit.setForeground(Color.WHITE);
        submit.setBackground(Color.decode("#632218"));
        submit.setBorder(BorderFactory.createEmptyBorder(4, 4, 4, 4));
        submit.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == submit){
                    Log.addToLog("Product " + name_input.getText()+" had been edited at " + LocalDateTime.now() + "\n");
                    Produto.changeQtdProduct(name_input.getText(), qtd_input.getText());
                    name_input.setText("");
                    qtd_input.setText("");
                }
            }
        });
        panel.add(submit);

        products = new JTextArea();
        products.setText(""+Produto.printRight(Produto.getItemsFromTxt()));
        panel.add(products);

        this.setVisible(true);
    }
}
