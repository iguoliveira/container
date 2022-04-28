package delivery;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class CadastrarRestaurante extends JFrame {

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

    public ArrayList get_user_data(JTextField value1, JTextField value2, JTextField value3, JTextField value4){
        ArrayList<String> user_data = new ArrayList<>();
        user_data.add(value1.getText());
        user_data.add(value2.getText());
        user_data.add(value3.getText());
        user_data.add(value4.getText());
        return user_data;
    }

    CadastrarRestaurante(){
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
        lcpf = new JLabel("CNPJ: ");
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
                    get_user_data(name, cpf, endx, endy);
                }
            }
        });
        inputs.add(button);

        this.setVisible(true);
    }
}
