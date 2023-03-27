import java.io.IOException;
import java.util.Scanner;

public class b2225 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int MOD = 1000000000;
        int N = sc.nextInt();
        int K = sc.nextInt();

        int[][] dp = new int[N+1][K+1];
        for (int i = 0; i <= N; i++) //k=1일때 모두 1로 초기화
            dp[i][1]=1;
        for (int i = 1; i <= K; i++) //N=0일때 모두 1로 초기화
            dp[0][i]=1;

        for (int i = 1; i <= N; i++) {
            for (int j = 2; j <= K; j++) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
                dp[i][j]%=MOD;
            }
        }
        System.out.println(dp[N][K]);
    }
}
