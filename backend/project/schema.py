import graphene
from .todo.schema import Mutation as MutationTodo


class Mutation(MutationTodo, graphene.ObjectType):
    pass


schema = graphene.Schema(mutation=Mutation)
