public class Type {
    public static void main(String[] args) {
        String pwd = "asd1234";
        System.out.printf("password:%s\n", pwd);

        float num1 = 2.7f;
        float num2 = 8.1f/3;
        System.out.printf("num1=%f, num2=%f\n", num1, num2);

        if (num1 == num2) {
            System.out.printf("num1:%f == num2:%f\n", num1, num2);
        }

        if (Math.abs(num1-num2) < 0.000001) {
            System.out.printf("num1 == num2");
        }

    }
}
