import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;
import java.util.StringTokenizer;

public class b10825 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        String [][] arr = new String[N][4];

        StringTokenizer st;
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            arr[i][0] = st.nextToken(); //이름
            arr[i][1] = st.nextToken(); //국
            arr[i][2] = st.nextToken(); //영
            arr[i][3] = st.nextToken(); //수
        }

        Arrays.sort(arr, new Comparator<String[]>() {
            @Override
            public int compare(String[] s1, String[] s2){
                if(s2[1].equals(s1[1])){ // 국어 점수가 감소하는 순으로
                    if(s1[2].equals(s2[2])){ // 국어 점수가 같다면 영어 점수가 증가하는 순
                        if(s1[3].equals(s2[3])){ // 국 =영이면 수학 점수가 감소하는 순
                            return s1[0].compareTo(s2[0]); // 모든 점수가 같으면 이름 사전 순
                        }
                        return Integer.parseInt(s2[3])-Integer.parseInt(s1[3]);
                    }
                    return Integer.parseInt(s1[2])-Integer.parseInt(s2[2]);
                }
                return Integer.parseInt(s2[1])- Integer.parseInt(s1[1]);
            }
        });
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < N; i++) {
            sb.append(arr[i][0]).append('\n');
        }
        System.out.println(sb);
    }
}
//public class Main {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
//        int n = Integer.parseInt(br.readLine());
//
//        Student[] students = new Student[n];
//
//        for (int i = 0; i < n; i++) {
//            String[] score = br.readLine().split(" ");
//            students[i] = new Student(
//                    score[0],
//                    Integer.parseInt(score[1]),
//                    Integer.parseInt(score[2]),
//                    Integer.parseInt(score[3]));
//        }
//        Comparator<Student> myComparator = new Comparator<Student>() {
//            @Override
//            public int compare(Student o1, Student o2) {
//                if(o1.korean < o2.korean) {
//                    return 1;
//                }else if(o1.korean == o2.korean) {
//                    if(o1.english > o2.english) {
//                        return 1;
//                    }else if(o1.english == o2.english) {
//                        if(o1.math < o2.math) {
//                            return 1;
//                        }else if (o1.math == o2.math) {
//                            return o1.name.compareTo(o2.name);
//                        }
//                    }
//                }
//                return -1;
//            }
//        };
//        Arrays.sort(students, myComparator);
//        for (int i = 0; i < n; i++) {
//            bw.write(students[i].name + "\n");
//        }
//
//
//        bw.flush();
//        bw.close();
//    }
//}
//
//class Student {
//    String name;
//    int korean;
//    int english;
//    int math;
//
//    Student(String name, int korean, int english, int math) {
//        this.name = name;
//        this.korean = korean;
//        this.english = english;
//        this.math = math;
//    }
//}