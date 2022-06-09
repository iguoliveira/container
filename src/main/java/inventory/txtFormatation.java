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

    public static void gravarTxtAux(String n,String newName, ArrayList<String> products) {
        ArrayList<String> auxiliar = new ArrayList<>();
        Path camin = Paths.get(n + ".txt");
        Path paths = Paths.get(newName + ".txt");
        String result = String.join(" \n", products);
        auxiliar.add(result);

        try {
            if (Files.exists(camin)) {
                Files.write(camin, auxiliar, StandardCharsets.UTF_8, StandardOpenOption.WRITE);
            } else {
                Files.write(camin, auxiliar, StandardCharsets.UTF_8);
            }
            if (Files.exists(paths)) {
                Files.write(paths, auxiliar, StandardCharsets.UTF_8, StandardOpenOption.WRITE);
            } else {
                Files.write(paths, auxiliar, StandardCharsets.UTF_8);
            }

            List<String> conteudo = Files.readAllLines(camin, StandardCharsets.UTF_8);
            System.out.println("CONTENTS" + conteudo);
            for (String content : conteudo) {
                products.add(content);
                System.out.println(content);

            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static String getProductItems() {
        String allItems = "";
        Path path = Paths.get("./src/main/java/inventory/Product.txt");
        try {
            List<String> contents = Files.readAllLines(path, StandardCharsets.UTF_8);
            int count = 0;
            for(String items : contents ){
                if(count > 6){
                    allItems = allItems.concat("\n");
                    count = 0;
                }
                allItems = allItems.concat(items+", ");
                count +=1;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return allItems;
    }
}