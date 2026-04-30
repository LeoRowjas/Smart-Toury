namespace SmartToury.SharedKernel;

public class Result<T> 
{
    public T? Value { get; }
    public bool IsSuccess { get; }
    public string? ErrorMessage { get; }
    
    public Result(T? value)
    {
        Value = value;
        IsSuccess = true;
    }

    public Result(string? errorMessage)
    {
        ErrorMessage = errorMessage;
        IsSuccess = false;
    }

    public static Result<T> Success(T value) => new(value);
    public static Result<T> Failure(string errorMessage) => new(errorMessage);
}