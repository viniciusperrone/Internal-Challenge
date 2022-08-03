from email.policy import default
import graphene
from graphene_django import DjangoObjectType
from .models import ToDo


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo


class ToDoMutation(graphene.Mutation):
    todo = graphene.Field(ToDoType)

    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        status = graphene.String(required=True)
        fromDate = graphene.Date()
        deadlineDate = graphene.Date(required=True)

    @classmethod
    def mutate(cls, root, info, **kwargs):
        createTodo = ToDo(
            title=kwargs['title'],
            description=kwargs['description'],
            status=kwargs['status'],
            fromDate=kwargs['fromDate'],
            deadlineDate=kwargs['deadlineDate']
        )
        createTodo.save()

        return ToDoMutation(todo=createTodo)


class Mutation(graphene.ObjectType):
    create_todo = ToDoMutation.Field()
