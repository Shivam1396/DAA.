MergeSort(A):
    1. If length of A ≤ 1:
           return A                     // already sorted (base case)
    2. Find middle point: mid = length(A) / 2
    3. Divide A into two halves:
           Left  = A[0 ... mid-1]
           Right = A[mid ... n-1]
    4. Recursively sort each half:
           Left  = MergeSort(Left)
           Right = MergeSort(Right)
    5. Merge the two sorted halves:
           return Merge(Left, Right)


Merge(Left, Right):
    1. Create empty array Result
    2. Set i = 0, j = 0                  // pointers for Left, Right

    3. While i < length(Left) AND j < length(Right):
           If Left[i] ≤ Right[j]:
                Append Left[i] to Result
                i = i + 1
           Else:
                Append Right[j] to Result
                j = j + 1

    4. Append any remaining elements of Left to Result
    5. Append any remaining elements of Right to Result
    6. return Result
