var builder = DistributedApplication.CreateBuilder(args);

var cache = builder.AddRedis("redis");

var api = builder.AddProject<Projects.DemoApi>("demoapi");

builder.AddProject<Projects.WebApp>("spaproxy")
        .WithReference(cache)
        .WithReference(api);

await builder.Build().RunAsync();