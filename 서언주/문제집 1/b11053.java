import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class b11053 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int max = 0;
        int[] seq = new int[N];//10 20 10 30 20 50
        int[] dp = new int[N]; //1  2  1  3  2  4 부분수열의 길이

        for (int i = 0; i < N; i++) {
            seq[i] = sc.nextInt();
        }
        dp[0] = 1;
        for (int i = 1; i < N; i++) {
            dp[i] = 1;
            //0 ~ i 이전 원소들 탐색
            for (int j = 0; j < i; j++) {
                //j번째 원소가 i번째 원소보다 작으면서 i번째 dp가 j번째 dp+1 값보다 작은경우
                if (seq[j] < seq[i] && dp[i] <= dp[j]) {
                    dp[i] = dp[j] + 1;// j번째 원소+1 이 i번째 dp
                }
            }
        }
        //최대 길이 탐색
        for (int i : dp) {//배열의 원소 추출
            max = Math.max(max, i);
        }
        System.out.println(max);
    }
}