import graphene
from graphene_django import DjangoObjectType
from .models import ToDo


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class CreateToDoMutation(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        status = graphene.String(required=True)
        fromDate = graphene.String(required=True)
        deadlineDate = graphene.String(required=True)

    todo = graphene.Field(ToDoType)

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
    class Arguments:
        id = graphene.ID(required=True)
        status = graphene.String(required=True)

    todo = graphene.Field(ToDoType)

    @classmethod
    def mutate(cls, root, info, id, status):
        updateToDo = ToDo.objects.get(id=id)
        updateToDo.status = status
        updateToDo.save()

        return UpdateToDoMutation(todo=updateToDo)


class Query(graphene.ObjectType):
    all_todos = graphene.List(ToDoType)
    todo_by_id = graphene.Field(ToDoType, id=graphene.ID())

    def resolve_all_todos(root, info, **kwargs):
        return ToDo.objects.all()


class Mutation(graphene.ObjectType):
    create_todo = CreateToDoMutation.Field()
    update_todo = UpdateToDoMutation.Field()
