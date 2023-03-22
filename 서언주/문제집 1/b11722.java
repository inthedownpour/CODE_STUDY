import java.io.IOException;
import java.util.Scanner;

public class b11722 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int max = 0;
        int[] seq = new int[N + 1];
        int[] dp = new int[N + 1];

        for (int i = 1; i <= N; i++) {
            seq[i] = sc.nextInt();
        }
        dp[1] = 1;
        for (int i = 2; i <= N; i++) {
            dp[i] = 1;
            for (int j = 0; j < i; j++) {
                if (seq[i] < seq[j] && dp[i] <= dp[j]) {
                    dp[i] = dp[j] + 1;
                } else if (seq[i] == seq[j]) {
                    dp[i] = dp[j];
                }
            }
        }
        for (int i = 1; i <= N; i++)
            max = Math.max(dp[i], max);
        System.out.println(max);
    }
}