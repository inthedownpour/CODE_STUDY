import java.io.IOException;
import java.util.Scanner;

//증가하는 부분 수열을 만들어서 합 비교
public class b11055 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();//수열의 크기
        int max = 0;
        int[] seq = new int[N+1];//1 100 2   50  60  3  5  6  7 8
        int[] dp = new int[N+1]; //1 101 113 111 61 31 28 23 16 9 부분수열의 합

        for (int i = 1; i < N; i++) {
            seq[i] = sc.nextInt();
            dp[i]=seq[i];
        }
        int result = dp[1];

        for (int i = 1; i <= N; i++) {
            for (int j = 1; j < i; j++) {
                if (seq[j] < seq[i]) {
                    dp[i] = Math.max(dp[j]+seq[i], dp[i]);
                    result = Math.max(result, dp[i]);
                }
            }
        }
        System.out.println(result);
    }
}