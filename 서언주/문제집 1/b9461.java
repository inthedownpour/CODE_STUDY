import java.io.IOException;
import java.util.Scanner;

public class b9461 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        long[] dp = new long[101];
        dp[1] = dp[2] = dp[3] = 1;

        for (int j = 4; j <= 100; j++) {
            dp[j] = dp[j - 2] + dp[j - 3];
        }

        int T = sc.nextInt();
        for (int i = 1; i <= T; i++) {
            System.out.println(dp[sc.nextInt()]);
        }
    }
}