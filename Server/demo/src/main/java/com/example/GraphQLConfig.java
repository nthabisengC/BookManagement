import graphql.kickstart.tools.SchemaParser;
import graphql.schema.GraphQLSchema;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GraphQLConfig {

    @Bean
    public GraphQLSchema graphQLSchema(BookResolver bookResolver) {
        return SchemaParser.newParser()
                .file("schema.graphqls")
                .resolvers(bookResolver)
                .build()
                .makeExecutableSchema();
    }
}
