package inventory;

import java.io.IOException;
import java.util.ArrayList;

public class Usuario {
    private String login;
    private String senha;

    Usuario(){}

    Usuario(String login, String senha){
        this.login = login;
        this.senha = senha;

    }
    public static void cadastrarUsuario(String login, String senha) {
        txtFormatation.saveUserData(login, senha);
    }

    public static boolean isUserRegistered(String login, String senha) throws IOException {
        ArrayList<String> read_txt = txtFormatation.readTxt("users");
        int count = 0;
        boolean isUser = false;
        boolean isSenha = false;

        for (String value : read_txt) {
            if (count % 2 == 0) {
                if (value.equals(login)) {
                    isUser = true;
                }
            } else {
                if (value.equals(senha)) {
                    isSenha = true;
                }
            }
            if (isSenha && isUser) {
                return true;
            }
            count++;
        }
        return false;
    }
}
