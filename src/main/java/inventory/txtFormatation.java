package inventory;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.List;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;

public class txtFormatation {

    public static void saveDataInLog(List<String> lista) {
        Path caminho = Paths.get("./src/main/java/inventory/Log.txt");
        try {
            if (Files.exists(Paths.get("./src/main/java/invetory/Log.txt")) && caminho.equals("./src/main/java/inventory/Log.txt")) {
                Files.write(caminho, lista, StandardCharsets.UTF_8, StandardOpenOption.APPEND);
            } else {
                Files.write(caminho, lista, StandardCharsets.UTF_8);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static ArrayList<String> readTxt(String nomeArquivo) throws IOException {
        Path caminho = Paths.get("./src/main/java/inventory/"+nomeArquivo+".txt");
        ArrayList<String> txt_data = new ArrayList<>((Files.readAllLines(caminho)));

        return txt_data;
    }

    public static void saveUserData(String login, String senha) {
        ArrayList<String> usuarios = new ArrayList<>();
        Path caminho = Paths.get("./src/main/java/inventory/users.txt");
        usuarios.add(login);
        usuarios.add(senha);
        try {
            if (Files.exists(caminho)) {
                Files.write(caminho, usuarios, StandardCharsets.UTF_8, StandardOpenOption.APPEND);
            } else {
                Files.write(caminho, usuarios, StandardCharsets.UTF_8);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void saveProductData(String nome, String quantidade) {
        ArrayList<String> produtos = new ArrayList<>();
        Path caminho = Paths.get("./src/main/java/inventory/Product.txt");
        produtos.add(nome);
        produtos.add(quantidade);

        try {
            if (Files.exists(caminho)) {
                Files.write(caminho, produtos, StandardCharsets.UTF_8, StandardOpenOption.APPEND);
            } else {
                Files.write(caminho, produtos, StandardCharsets.UTF_8);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}