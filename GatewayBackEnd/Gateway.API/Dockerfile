#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Gateway.API/Gateway.API.csproj", "Gateway.API/"]
COPY ["Gateway.Shared/Gateway.Shared.csproj", "Gateway.Shared/"]
COPY ["Gateway.Data/Gateway.Data.csproj", "Gateway.Data/"]
RUN dotnet restore "Gateway.API/Gateway.API.csproj"
COPY . .
WORKDIR "/src/Gateway.API"
RUN dotnet build "Gateway.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Gateway.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Gateway.API.dll"]
