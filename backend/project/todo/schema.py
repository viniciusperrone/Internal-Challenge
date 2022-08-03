import graphene
from graphene_django import DjangoObjectType
from .models import ToDo


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class CreateToDoMutation(graphene.Mutation):
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

        return CreateToDoMutation(todo=createTodo)

class UpdateToDoMutation(graphene.Mutation):
    todo = graphene.Field(ToDoType)

    class Arguments:
        id = graphene.ID()
        status = graphene.String(required=True)

    @classmethod
    def mutate(cls, root, info, **kwargs):
        updateToDo = ToDo.objects.get(id=kwargs['id'])
        updateToDo.status=kwargs['status'],

        updateToDo.save()

        return UpdateToDoMutation(todo=updateToDo)


class Query(graphene.ObjectType):
    all_todos = graphene.List(ToDoType)

    def resolve_all_todos(root, info, **kwargs):
        return ToDo.objects.all()


class Mutation(graphene.ObjectType):
    create_todo = CreateToDoMutation.Field()
    update_todo = UpdateToDoMutation.Field()
