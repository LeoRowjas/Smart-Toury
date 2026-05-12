# README

- Database: Postgres
- Server: C# + ASP.NET

To launch backend and database:

```
cd Smart-Toury-server
docker-compose up -d
```

api specification is availablle at [localhost:8080/swagger](localhost:8080/swagger)

to reduce misunderstandings:
```
enum Gender{
    Male = 0,
    Female = 1,
}

public enum AccessibilityMode
{
    Standard = 0,
    NoStairsAndWithRamps = 1 
}


public enum RouteAtmosphere
{
    Any = 0,
    QuietAndUncrowded = 1 
}

public enum UserRole
{
    Tourist,
    Guide,
    Admin
}
```

sorry i will add string serialization for enums later
