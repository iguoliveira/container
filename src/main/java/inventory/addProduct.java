package inventory;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class addProduct extends JFrame {
    JPanel panel;

    JLabel name_label;
    JLabel qtd_label;

    JTextField input_name;
    JTextField input_qtd;

    JButton submit;
    addProduct(){
        this.setTitle("Add Product");
        this.setSize(250,200);
        this.setResizable(false);

        panel = new JPanel();
        panel.setLayout(new FlowLayout());
        this.add(panel);

        name_label = new JLabel("Product Name");
        panel.add(name_label);

        input_name = new JTextField();
        input_name.setPreferredSize(new Dimension(225,25));
        panel.add(input_name);

        qtd_label = new JLabel("Product Quantity");
        panel.add(qtd_label);

        input_qtd = new JTextField();
        input_qtd.setPreferredSize(new Dimension(225, 25));
        panel.add(input_qtd);

        submit = new JButton("Add Product");
        submit.setForeground(Color.WHITE);
        submit.setBackground(Color.decode("#632218"));
        submit.setBorder(BorderFactory.createEmptyBorder(4, 4, 4, 4));
        submit.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == submit){
                    Produto.addProduct(input_name.getText(), input_qtd.getText());
                }
            }
        });
        panel.add(submit);

        this.setVisible(true);
    }
}
