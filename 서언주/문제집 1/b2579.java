import java.io.IOException;
import java.util.Scanner;

public class b2579 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();//계단 수
        int[] stair = new int[301];
        int[] dp = new int[301]; //합 저장

        for (int i = 1; i <= N; i++) {
            stair[i] = sc.nextInt();
        }
        dp[1] = stair[1];
        dp[2] = stair[1] + stair[2];
        dp[3] = Math.max(stair[1], stair[2]) + stair[3];
        //--OXO
        //--XOO
        for (int i = 4; i <= N; i++) {
            dp[i] = Math.max(dp[i - 3] + stair[i - 1], dp[i - 2]) + stair[i];
        }
        System.out.println(dp[N]);
    }
}