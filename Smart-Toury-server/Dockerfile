# See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Smart-Toury.Host/Smart-Toury.Host.csproj", "Smart-Toury.Host/"]
COPY ["Smart-Toury.Identity/Smart-Toury.Identity.csproj", "Smart-Toury.Identity/"]
COPY ["SmartToury.SharedKernel/SmartToury.SharedKernel.csproj", "SmartToury.SharedKernel/"]
RUN dotnet restore "./Smart-Toury.Host/Smart-Toury.Host.csproj"
COPY . .
WORKDIR "/src/Smart-Toury.Host"
RUN dotnet build "./Smart-Toury.Host.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Smart-Toury.Host.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Smart-Toury.Host.dll"]

