import java.io.IOException;
import java.util.Scanner;

public class b1699 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] dp = new int[N + 1]; //제곱수의 합 저장
        for (int i = 1; i <= N; i++) {
            dp[i] = i;
            for (int j = 1; j * j <= i; j++) {
                if (dp[i] > dp[i - j * j] + 1) {
                    dp[i] = dp[i - j * j] + 1;
                }
            }
            //13보다 작은 제곱수 1, 4, 9
            //(13-1)의 최소 제곱수의 합 + 1
            //(13-4)의 최소 제곱수의 합 + 1
            //(13-9)의 최소 제곱수의 합 + 1 중 가장 작은 값
        }
        System.out.println(dp[N]);
    }
}
