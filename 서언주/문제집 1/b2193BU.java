import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class b2193BU {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        long[] pinary = new long[N + 1];
        pinary[0] = 0;
        pinary[1] = 1;
        for (int i = 2; i <= N; i++)
            pinary[i] = pinary[i - 1] + pinary[i - 2];

        System.out.println(pinary[N]);
        br.close();
    }
}