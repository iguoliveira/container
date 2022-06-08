package inventory;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Signin {
        JFrame frame;

        JPanel input_container;

        JLabel username_label;
        JTextField username_input;

        JLabel password_label;
        JTextField password_input;

        JButton signin;

        Signin(){
            frame = new JFrame();
            frame.setTitle("Register");
            frame.setSize(250,200);
            frame.setResizable(false);

            input_container = new JPanel();
            input_container.setLayout(new FlowLayout());
            frame.add(input_container);

            username_label = new JLabel("Username");
            input_container.add(username_label);

            username_input = new JTextField();
            username_input.setPreferredSize(new Dimension(225,25));
            input_container.add(username_input);

            password_label = new JLabel("Password");
            input_container.add(password_label);

            password_input = new JTextField();
            password_input.setPreferredSize(new Dimension(225, 25));
            input_container.add(password_input);

            signin = new JButton("Signin");
            signin.setForeground(Color.WHITE);
            signin.setBackground(Color.decode("#632218"));
            signin.setBorder(BorderFactory.createEmptyBorder(4, 4, 4, 4));
            signin.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    if(e.getSource() == signin){

                    }
                }
            });
            input_container.add(signin);

            frame.setVisible(true);
    }
}
