import java.io.IOException;
import java.util.Scanner;

public class b1912 {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        int[] seq = new int[N+1];
        int[] dp = new int[N+1]; //연속합 저장

        for (int i = 1; i <= N; i++) {
            seq[i] = sc.nextInt();
        }
        //dp[1]은 첫 원소로 이전에 더이상 탐색할 것이 없어서
        //seq[1]자체 값이 되므로 seq[1]으로 초기화
        //max 또한 첫번째 원소로 초기화
        dp[1]=seq[1];
        int max = seq[1];

        for (int i = 2; i <= N; i++) {
            //(이전 dp + 현재 seq값)과 현재 seq 값 중 큰 것을 dp에 저장
            dp[i]=Math.max(dp[i-1]+seq[i],seq[i]);
            //최댓값 갱신
            max=Math.max(max,dp[i]);
        }

        System.out.println(max);
    }
}