import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class b2156 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] wine = new int[N+1]; //와인의 양이 있는 배열
        int[] dp = new int[N + 1]; //최대값 저장
        //연속으로 마신
        //1번째 경우 dp[i-2]+wine[i]
        //2번째 경우 dp[i-3]+wine[i-1]+wine[i]
        //3번째 경우 dp[i-1]
        for (int i = 1; i <= N; i++) {
            wine[i] = Integer.parseInt(br.readLine());
        }
        dp[1] = wine[1];
        if(N > 1){
            dp[2] = wine[1] + wine[2];
        }
        for(int i = 3; i <= N; i++){
            dp[i] = Math.max(dp[i-1], Math.max(dp[i-2]+wine[i], dp[i-3] + wine[i-1] + wine[i]));
        }

        System.out.println(dp[N]);
    }
}