package delivery;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class CadastrarUsuario extends JFrame {
    JPanel inputs;

    JLabel lname;
    JTextField name;

    JLabel lcpf;
    JTextField cpf;

    JLabel lendx;
    JTextField endx;

    JLabel lendy;
    JTextField endy;

    JButton button;

    CadastrarUsuario(){
//        Main Frame
        this.setTitle("Cadastrar Cliente");
        this.setSize(300,300);
        this.setResizable(false);

//        Main Container
        inputs = new JPanel();
        inputs.setLayout(new FlowLayout());
        this.add(inputs);

//        Name Label and Input
        lname = new JLabel("Nome: ");
        inputs.add(lname);

        name = new JTextField();
        name.setPreferredSize(new Dimension(250, 25));
        inputs.add(name);

//        CPF Label and Input
        lcpf = new JLabel("CPF:D ");
        inputs.add(lcpf);

        cpf = new JTextField();
        cpf.setPreferredSize(new Dimension(250, 25));
        inputs.add(cpf);

//        EndX Label and Input
        lendx = new JLabel("Endereco X");
        inputs.add(lendx);

        endx = new JTextField();
        endx.setPreferredSize(new Dimension(250, 25));
        inputs.add(endx);

//        EndY Label and Input
        lendy = new JLabel("Endereco Y");
        inputs.add(lendy);

        endy = new JTextField();
        endy.setPreferredSize(new Dimension(250, 25));
        inputs.add(endy);

//        Confirm Button
        button = new JButton("Confirmar Dados");
        button.setBackground(Color.pink);
//        Button Pressed
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == button){
                    Usuario u = new Usuario();
                    u.get_user_data(name.getText(), cpf.getText(), endx.getText(), endy.getText());
                }
            }
        });
        inputs.add(button);

        this.setVisible(true);
    }
}
