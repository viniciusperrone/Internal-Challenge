import graphene
from .todo.schema import Query as QueryToDo, Mutation as MutationTodo


class Query(graphene.ObjectType):
    pass


class Mutation(MutationTodo, graphene.ObjectType):
    pass


schema = graphene.Schema(query=QueryToDo, mutation=Mutation)
