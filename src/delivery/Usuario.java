package delivery;

import java.util.ArrayList;

public class Usuario {
    static ArrayList<String> user_data = new ArrayList<>();

    public void get_user_data(String value1, String value2, String value3, String value4){
        user_data.clear();
        user_data.add(value1);
        user_data.add(value2);
        user_data.add(value3);
        user_data.add(value4);
    }

    public static String getUserData(int value){
        return user_data.get(value);
    }
}
