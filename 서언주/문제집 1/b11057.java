import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class b11057 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int mod = 10007;
        int[][] dp = new int[N + 1][10]; //dp[digit][val] = digit개 자리 숫자 중 가장 맨 뒤의 숫자가 val일 때의 경우의 수
        //첫번째 자릿수는 경우의 수가 각 1개
        for (int i = 0; i < 10; i++) {
            dp[1][i] = 1;
        }
        //두번째 자릿수부터 N번째 자릿수까지 dp[N][j]
        for (int i = 2; i <= N; i++) {
            for (int j = 0; j <= 9; j++) {
                for (int k = j; k <= 9; k++) {//(가장 맨 뒷자리)와 같거나 작은 수만 가능
                    dp[i][j] += dp[i - 1][k];
                    dp[i][j] %= mod;
                }
            }
        }
        int sum = 0;
        for (int i = 0; i < 10; i++) {
            sum += dp[N][i];
        }
        System.out.println(sum % mod);

        br.close();
    }
}