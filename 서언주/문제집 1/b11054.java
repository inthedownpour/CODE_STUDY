import java.io.IOException;
import java.util.Scanner;

//가장 긴 바이토닉 수열
//오름차순이거나, 내림차순이거나, 올랐다 내리는 순으로 진행
public class b11054 {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();//수열의 크기
        int max = 0;
        int[] seq = new int[N+1];
        int[] r_dp = new int[N+1]; //왼쪽에서 오른쪽으로 진행하는 오름차순 부분 수열 LIS
        int[] l_dp = new int[N+1]; //오른쪽에서 왼쪽으로 진행하는 오름차순 부분 수열 LDS

        for (int i = 1; i <= N; i++) {
            seq[i] = sc.nextInt();
        }

        for (int i = 1; i <= N; i++) {
            r_dp[i] = 1;
            for (int j = 1; j < i; j++) {
                if (seq[i] > seq[j]) {
                    r_dp[i] = Math.max(r_dp[j] + 1, r_dp[i]);
                }
            }
        }
        for (int i = N; i > 0; i--) {
            l_dp[i] = 1;
            for (int j = N; j > i; j--) {
                if (seq[i] > seq[j]) {
                    l_dp[i] = Math.max(l_dp[j] + 1, l_dp[i]);
                }
            }
        }
        for (int i = 1; i <= N; i++) {
            max = Math.max(max, r_dp[i] + l_dp[i]);
        }

        System.out.println(max - 1);
    }

}