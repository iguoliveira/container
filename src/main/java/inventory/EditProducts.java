package inventory;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class EditProducts extends JFrame {
    JPanel panel;

    JTextArea products;

    JLabel name_label;
    JTextField name_input;

    JLabel qtd_label;
    JTextField qtd_input;

    JButton submit;

    EditProducts(){
        this.setTitle("Edit Product");
        this.setSize(250, 200);
        this.setResizable(false);

        panel = new JPanel();
        panel.setLayout(new FlowLayout());
        this.add(panel);

//        products = new JTextArea();
//        products.setText(""+Produto.alterarProduto());
//        panel.add(products);

        name_label = new JLabel("Quantity");
        panel.add(name_label);

        name_input = new JTextField();
        name_input.setPreferredSize(new Dimension(225, 25));
        panel.add(name_input);

        qtd_label = new JLabel("Index");
        panel.add(qtd_label);

        qtd_input = new JTextField();
        qtd_input.setPreferredSize(new Dimension(225, 25));
        panel.add(qtd_input);

        submit = new JButton("Edit Product");
        submit.setForeground(Color.WHITE);
        submit.setBackground(Color.decode("#632218"));
        submit.setBorder(BorderFactory.createEmptyBorder(4, 4, 4, 4));
        submit.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == submit){
                    Produto.changeQtdProduct(Integer.parseInt(qtd_input.getText()), name_input.getText());
                }
            }
        });
        panel.add(submit);

        this.setVisible(true);
    }
}
